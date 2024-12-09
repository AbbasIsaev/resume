import React, {useEffect, useState} from 'react'
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps'

import example from '../example.json'
import {IContact} from '../../../types/interfaces'

const KALUGA_COORDS = [54.513845, 36.261215]

export const Contact = () => {
    const [contact, setContact] = useState<IContact>(
        {
            title: '',
            coords: KALUGA_COORDS,
            copyright: 'Isaev Abbas',
            srcPath: 'assets/img/qrcodes/',
            qrCodes: []
        }
    )
    useEffect(() => {
        setContact(example.contact)
    }, [])

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{contact.title}</h2>
                </div>
                <div className="row justify-content-center align-items-start">
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
                    {contact.qrCodes.map(qrCode => (
                        <div className="col-auto my-3 my-lg-0" key={qrCode.name}>
                            <img
                                className="img-fluid contact-img"
                                src={contact.srcPath + qrCode.name}
                                alt={qrCode.alt ? qrCode.alt : qrCode.name}
                            />
                            <p className="text-center text-white">{qrCode.alt}</p>
                        </div>
                    ))}

                    <div className="col-auto my-3 my-lg-0">
                        {contact.email &&
                            <p className="text-white">
                                {'Почта: '}
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="text-white text-decoration-none"
                                >
                                    {contact.email}
                                </a>
                            </p>
                        }
                        {contact.phone &&
                            <p className="text-white">
                                {'Телефон: '}
                                <a
                                    href={`tel:${contact.phone}`}
                                    className="text-white text-decoration-none">
                                    {contact.phone}
                                </a>
                            </p>
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
    )
}