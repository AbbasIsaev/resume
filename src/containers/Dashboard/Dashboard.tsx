import React, {FC, useEffect} from 'react'
import {Map, Placemark, YMaps} from 'react-yandex-maps'

import {scrolling, unScrolling} from './scrollingJQ'
import './Dashboard.css'
import {Carousel} from '../../components/Carousels/Carousel'

type TMenuItems = {
    title: string
    href: string
}

type TImg = {
    name: string
    alt: string
}

type TService = {
    title: string
    text: string
}

type TAbout = {
    years: string
    title: string
    text: string
    image: TImg
}

type TProject = {
    title: string
    images: TImg[]
}

const KALUGA_COORDS = [54.513845, 36.261215]

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
    })

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

    const renderAbout = (srcPath = 'assets/img/about/',
        {index = 0, years, title, text, image}: TAbout & { index: number }) => {
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

    const renderProject = (srcPath = 'assets/img/projects/',
        {index, title, images}: TProject & { index: number }) => (
        <div className="col-sm-6 col-md-4 project-item" key={index}>
            <Carousel images={images} srcImagePath={srcPath}/>

            <div className="project-caption bg-grey">
                <h4>{title}</h4>
                <p className="text-muted">Illustration</p>
            </div>
        </div>
    )

    const menuItems: TMenuItems[] = [
        {title: 'Навыки', href: '#services'},
        {title: 'Проекты', href: '#projects'},
        {title: 'Опыт', href: '#about'},
        {title: 'Cвязаться со мной', href: '#contact'}
    ]

    const logoImages: TImg[] = [
        {name: 'react.png', alt: 'react'},
        {name: 'redux.png', alt: 'redux'},
        {name: 'node-js.png', alt: 'node-js'},
        {name: 'express-js.png', alt: 'express-js'},
        {name: 'sequelize.png', alt: 'sequelize'},
        {name: 'type-script.png', alt: 'type-script'},
        {name: 'webpack.png', alt: 'webpack'},
        {name: 'mysql.png', alt: 'mysql'},
        {name: 'postgresql.png', alt: 'postgresql'},
        {name: 'redis.png', alt: 'redis'},
        {name: 'material-ui.png', alt: 'material-ui'},
        {name: 'kendo-ui.png', alt: 'kendo-ui'},
        {name: 'bootstrap.png', alt: 'bootstrap'},
        {name: 'pwa.png', alt: 'pwa'},
        {name: 'workbox.png', alt: 'workbox'},
        {name: 'nginx.png', alt: 'nginx'},
        {name: 'python.png', alt: 'python'},
        {name: 'django.png', alt: 'django'},
        {name: 'django-rest-framework.png', alt: 'django-rest-framework'},
        {name: 'docker.png', alt: 'docker'},
        {name: 'docker-compose.png', alt: 'docker-compose'},
        {name: 'git.png', alt: 'git'}
    ]

    const services: TService[] = [
        {
            title: 'React',
            text: 'Для фронтенда создал компоненты UI различной сложности с помощью Material UI, Kendo UI, Bootstrap. ' +
                'Применяю современный подход в разработке приложений, используя технологию прогрессивного веб-приложения (PWA), ' +
                'которая позволяет клиентам установить ваш сайт на смартфон как приложение.'
        },
        {
            title: 'NodeJS',
            text: 'Бэкенд RestApi на ExpressJS. Применяется для авторизация пользователей, проверки прав, работа с БД PostgreSQL с помощью ORM Sequelize. ' +
                'Кэширование данных в Redis.'
        },
        {
            title: 'Django',
            text: 'Бэкенд для авторизации администраторов, осуществление настроек прав пользователей, работа с БД PostgreSQL, осуществление хранения файлов. ' +
                'Применяется подход Django Rest Framework.'
        }
    ]

    const projects: TProject[] = [
        {
            title: 'React UI', images: [
                {name: '1-full.jpg', alt: '1-thumbnail'},
                {name: '2-thumbnail.jpg', alt: '2-thumbnail'},
                {name: '3-thumbnail.jpg', alt: '3-thumbnail'}
            ]
        },
        {
            title: 'NodeJS', images: [
                {name: '2-thumbnail.jpg', alt: '2-thumbnail'},
                {name: '3-thumbnail.jpg', alt: '3-thumbnail'},
                {name: '4-thumbnail.jpg', alt: '4-thumbnail'},
                {name: '5-thumbnail.jpg', alt: '5-thumbnail'},
                {name: '6-thumbnail.jpg', alt: '6-thumbnail'},
                {name: '5-thumbnail.jpg', alt: '5-thumbnail'},
                {name: '6-thumbnail.jpg', alt: '6-thumbnail'}
            ]
        },
        {
            title: 'Django', images: [
                {name: '5-full.jpg', alt: '5-thumbnail'},
                {name: '6-full.jpg', alt: '6-thumbnail'}
            ]
        }
    ]

    const abouts: TAbout[] = [
        {
            years: '6 лет',
            title: 'КФ МГТУ им. Баумана',
            text: 'Закончил обучение с отличием. Совмещал работу и учебу.\n' +
                'Установка программного обеспечения в компьютерном классе.\n' +
                'Настройка сети.\n' +
                'Помощь преподавателям и студентам.\n' +
                'Оформлении документаций.',
            image: {
                name: '1.jpg',
                alt: 'КФ МГТУ им. Баумана'
            }
        },
        {
            years: '6 меcяцев',
            title: 'ООО "Фирма Фавор"',
            text: 'Сопровождение ПО «1С:Бухгалтерия 8».\n' +
                'Оптимизация и устранения ошибок в коде.\n' +
                'Работа с клиентами по уточнению характера исправления функционала.\n' +
                'Оформлении документаций.',
            image: {
                name: '2.jpg',
                alt: 'ООО "Фирма Фавор"'
            }
        },
        {
            years: '5 меcяцев',
            title: 'ПАО ВымпелКом (Билайн)',
            text: 'Прием звонков и консультирование клиентов по техническим вопросам.\n' +
                'Настройка сетевого оборудования клиента.\n' +
                'Мониторинг и диагностика неисправностей на сетевом оборудовании.\n' +
                'Регистрация обращений клиентов в базе данных.',
            image: {
                name: '3.jpg',
                alt: 'ПАО ВымпелКом (Билайн)'
            }
        },
        {
            years: 'с 2017 по н.в.',
            title: 'ООО "Бизнес Тренд"',
            text: 'Доработка существующих проектов на PHP, JS, C#, Python.\n' +
                'Формирование отчетов по контролю качества и приемке продукции.\n' +
                'Создание новых веб-систем для предприятий с разным видом продукции, со своей спецификой работы тех. процесса.\n' +
                'Написание скриптов синхронизаций для баз данных на Python, работа с Cron для запуска скриптов по запланированному времени.\n' +
                'Разработка full stack проекта с нуля в связке с технологиями PostgreSQL, Django, NodeJS, React.\n' +
                'Адаптивная верстка веб-сайта с использованием Bootstrap.',
            image: {
                name: '4.jpg',
                alt: 'ООО "Бизнес Тренд"'
            }
        }
    ]

    return (
        <div id="page-top">
            {/*Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Исаев Аббас</a>
                    <button
                        className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        Меню <i className="fas fa-bars ml-1"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto">
                            {menuItems.map(item => (
                                <li className="nav-item" key={item.href}>
                                    <a className="nav-link js-scroll-trigger" href={item.href}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            {/*Masthead*/}
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">
                        Добро пожаловать!
                    </div>
                    <div className="masthead-heading">Моё мини-резюме</div>
                </div>
            </header>
            {/*Services*/}
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Навыки в программировании</h2>
                        <h3 className="section-subheading text-muted">
                            На текущий момент пишу с нуля full stack системы React+NodeJS+Django+PostgreSQL.
                            В своих проектах для автоматизации развёртывания и управления приложениями использую Docker,
                            с написанием Docker Compose файлов.
                            Исходники хранятся в системе Git.
                        </h3>
                    </div>
                    <div className="row text-center">
                        {services.map(service => (
                            renderService(service)
                        ))}
                    </div>
                </div>
            </section>
            {/*Logos*/}
            <div className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        {logoImages.map(img => (
                            renderImg('assets/img/logos/', img)
                        ))}
                    </div>
                </div>
            </div>
            {/*Projects*/}
            <section className="page-section bg-grey" id="projects">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Проекты</h2>
                        <h3 className="section-subheading text-muted">Эти проекты используются в реальной жизни.</h3>
                    </div>
                    <div className="row">
                        {projects.map((item, index) =>
                            renderProject('assets/img/projects/', {index, ...item}))
                        }
                    </div>
                </div>
            </section>
            {/*About*/}
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Мой опыт</h2>
                        <h3 className="section-subheading text-muted">В данном блоке описаны основные этапы становления
                            моей личности в качестве программиста.</h3>
                    </div>
                    <ul className="timeline">
                        {abouts.map((about, index) => (
                            renderAbout('assets/img/about/', {...about, index})
                        ))}
                        <li>
                            <div className="timeline-image">
                                <h4>
                                    Здесь
                                    <br/>
                                    может быть
                                    <br/>
                                    Ваша часть!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/*Contact*/}
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Связаться со мной</h2>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-auto my-3 my-lg-0">
                            <YMaps>
                                <Map
                                    defaultState={{
                                        center: KALUGA_COORDS,
                                        zoom: 12
                                    }}
                                    className={'yandex-map'}
                                >
                                    <Placemark geometry={KALUGA_COORDS}/>
                                </Map>
                            </YMaps>
                        </div>
                        <div className="col-auto my-3 my-lg-0">
                            <p className="text-white">Почта: abbas.isaev@gmail.com</p>
                            <p className="text-white">GitHub:
                                <a
                                    className="btn btn-social mx-2"
                                    href="https://github.com/AbbasIsaev"
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className="fab fa-github fs-2 text-white"/>
                                </a>
                            </p>
                            <p className="text-white">В контакте:
                                <a
                                    className="btn btn-social mx-2"
                                    href="https://vk.com/abbas.isaev"
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className="fab fa-vk fs-2 text-white"/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*Footer*/}
            <footer className="footer py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-left">
                            {/*This script automatically adds the current year to your website footer
                            (credit: https://updateyourfooter.com/)*/}
                            © 2021{new Date().getFullYear() > 2021 && '-' + new Date().getFullYear()} Isaev Abbas
                        </div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            <a
                                className="btn btn-social mx-2"
                                href="https://github.com/AbbasIsaev"
                                target="_blank"
                                rel="noreferrer">
                                <i className="fab fa-github fs-2"/>
                            </a>
                            <a
                                className="btn btn-social mx-2"
                                href="https://vk.com/abbas.isaev"
                                target="_blank"
                                rel="noreferrer">
                                <i className="fab fa-vk fs-2"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}