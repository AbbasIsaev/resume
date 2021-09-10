import React, {FC, useEffect, useState} from 'react'
import {Map, Placemark, YMaps} from 'react-yandex-maps'

import {scrolling, unScrolling} from './scrollingJQ'
import './Dashboard.css'
import {Carousel, TImg} from '../../components/Carousels/Carousel'
import {fetchEntity} from '../../services/httpService'
import {CONST, FILTER_RESUME_ISAEV_ABBAS, NAME} from '../../config/routes'
import {
    IAbout,
    IConst,
    IContact,
    IData,
    ILogo,
    IMasthead,
    INavigation,
    IParam,
    IParams,
    TAbout,
    TProject,
    TService
} from '../../types/interfaces'

const KALUGA_COORDS: [number, number] = [54.513845, 36.261215]

export const Dashboard: FC = () => {

    useEffect(() => {
        // Аналогично componentDidMount
        // Слушаем события скроллинга
        scrolling()
        return () => {
            // Аналогично componentWillUnmount
            // Отписываемся от скроллинга
            unScrolling()
        }
    }, [])

    const navigation: INavigation = {
        brand: 'Исаев Аббас',
        list: [
            {title: 'Навыки', href: '#services'},
            {title: 'Проекты', href: '#projects'},
            {title: 'Опыт', href: '#about'},
            {title: 'Cвязаться со мной', href: '#contact'}
        ]
    }

    const [masthead, setMasthead] = useState<IMasthead>(
        {
            title: '',
            description: ''
        }
    )

    const [service, setService] = useState<IParam<TService>>(
        {
            title: '',
            description: '',
            list: []
        }
    )

    const [logo, setLogo] = useState<ILogo>(
        {
            srcPath: '',
            list: []
        }
    )

    const [project, setProject] = useState<IParam<TProject>>(
        {
            title: '',
            description: '',
            list: []
        }
    )

    const [about, setAbout] = useState<IAbout>(
        {
            title: '',
            description: '',
            srcPath: 'assets/img/about/',
            list: [],
            lastTimeline: ''
        }
    )

    const [contact, setContact] = useState<IContact>(
        {
            title: '',
            coords: KALUGA_COORDS,
            copyright: 'Isaev Abbas'
        }
    )

    useEffect(() => {
        const param = `${NAME}=${FILTER_RESUME_ISAEV_ABBAS}`
        fetchEntity(CONST, param)
            .then(response => response.data)
            .then((data: IData<IConst>) => {
                try {
                    const {results} = data
                    const params: IParams = JSON.parse(results?.[0]?.params)

                    // Устанавливаем данные, полученные от сервера
                    setMasthead(params.masthead)
                    setService(params.service)
                    setLogo(params.logo)
                    setProject(params.project)
                    setAbout(params.about)
                    setContact(params.contact)
                } catch (e) {
                    // console.log(e)
                }
            })
    }, [])

    const renderImg = (srcPath = 'assets/img/', {name, alt}: TImg) => (
        <div className="col-md-3 col-sm-6 my-3" key={alt}>
            <img
                className="img-fluid img-brand d-block mx-auto"
                src={srcPath + name}
                alt={alt}/>
        </div>
    )

    const renderService = ({title, text}: TService) => (
        <div className="col-md-4" key={title}>
            <h4 className="my-3">{title}</h4>
            <p className="text-muted">{text}</p>
        </div>
    )

    const renderAbout = (
        srcPath = 'assets/img/about/',
        {index = 0, years, title, text, image}: TAbout & { index: number }
    ) => {
        const timelineClass = (index % 2) ? 'timeline-inverted' : 'timeline-image'

        return (
            <li className={timelineClass} key={index}>
                <div className="timeline-image">
                    <img
                        className="rounded-circle img-fluid"
                        src={srcPath + image.name}
                        alt={image.alt}/>
                </div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{years}</h4>
                        <h4 className="subheading">{title}</h4>
                    </div>
                    <div className="timeline-body">
                        <p className="text-muted">{text}</p>
                    </div>
                </div>
            </li>
        )
    }

    const renderProject = ({index, title, remark, srcPath, images}: TProject & { index: number }) => (
        <div className="col-sm-6 col-md-4 project-item" key={index}>
            <Carousel images={images} srcImagePath={srcPath}/>

            <div className="project-caption bg-grey">
                <h4>{title}</h4>
                <p className="text-muted">{remark}</p>
            </div>
        </div>
    )

    // This script automatically adds the current year to your website footer (credit: https://updateyourfooter.com/)
    const copyright = `©2021${new Date().getFullYear() > 2021 ? `-${new Date().getFullYear()}` : ''} ${contact.copyright}`

    return (
        <div id="page-top">
            {/*Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">{navigation.brand}</a>
                    <button
                        className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        Меню <i className="fas fa-bars ml-1"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto">
                            {navigation.list.map(item => <li className="nav-item" key={item.href}>
                                <a className="nav-link js-scroll-trigger" href={item.href}>{item.title}</a>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </nav>
            {/*Masthead*/}
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">{masthead.title}</div>
                    <div className="masthead-heading">{masthead.description}</div>
                </div>
            </header>
            {/*Services*/}
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">{service.title}</h2>
                        <h3 className="section-subheading text-muted">{service.description}</h3>
                    </div>
                    <div className="row text-center">
                        {service.list.map(service => (
                            renderService(service)
                        ))}
                    </div>
                </div>
            </section>
            {/*Logos*/}
            <div className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        {logo.list.map(img => (
                            renderImg(logo.srcPath, img)
                        ))}
                    </div>
                </div>
            </div>
            {/*Projects*/}
            <section className="page-section bg-grey" id="projects">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">{project.title}</h2>
                        <h3 className="section-subheading text-muted">{project.description}</h3>
                    </div>
                    <div className="row">
                        {project.list.map((item, index) =>
                            renderProject({index, ...item}))
                        }
                    </div>
                </div>
            </section>
            {/*About*/}
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">{about.title}</h2>
                        <h3 className="section-subheading text-muted">{about.description}</h3>
                    </div>
                    <ul className="timeline">
                        {about.list.map((aboutItem, index) => (
                            renderAbout(about.srcPath, {...aboutItem, index})
                        ))}
                        {about.lastTimeline &&
                        <li>
                            <div className="timeline-image">
                                <h4>{about.lastTimeline}</h4>
                            </div>
                        </li>
                        }
                    </ul>
                </div>
            </section>
            {/*Contact*/}
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">{contact.title}</h2>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        {contact.coords &&
                        <div className="col-auto my-3 my-lg-0">
                            <YMaps>
                                <Map
                                    state={{
                                        center: contact.coords,
                                        zoom: 12
                                    }}
                                    className={'yandex-map'}
                                >
                                    <Placemark geometry={contact.coords}/>
                                </Map>
                            </YMaps>
                        </div>
                        }
                        <div className="col-auto my-3 my-lg-0">
                            {contact.email &&
                            <p className="text-white">Почта: {contact.email}</p>
                            }
                            {contact.github &&
                            <p className="text-white">GitHub:
                                <a
                                    className="btn btn-social mx-2"
                                    href={contact.github}
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className="fab fa-github fs-2 text-white"/>
                                </a>
                            </p>
                            }
                            {contact.vk &&
                            <p className="text-white">В контакте:
                                <a
                                    className="btn btn-social mx-2"
                                    href={contact.vk}
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className="fab fa-vk fs-2 text-white"/>
                                </a>
                            </p>
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/*Footer*/}
            <footer className="footer py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-left">
                            {copyright}
                        </div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            {contact.github &&
                            <a
                                className="btn btn-social mx-2"
                                href={contact.github}
                                target="_blank"
                                rel="noreferrer">
                                <i className="fab fa-github fs-2"/>
                            </a>
                            }
                            {contact.vk &&
                            <a
                                className="btn btn-social mx-2"
                                href={contact.vk}
                                target="_blank"
                                rel="noreferrer">
                                <i className="fab fa-vk fs-2"/>
                            </a>
                            }
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}