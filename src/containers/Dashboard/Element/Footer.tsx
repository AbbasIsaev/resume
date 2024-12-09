import React, {useEffect, useState} from 'react'

import example from '../example.json'
import {IContact} from '../../../types/interfaces'

export const Footer = () => {
    const [contact, setContact] = useState<IContact>(
        {
            title: '',
            coords: [],
            copyright: 'Isaev Abbas',
            srcPath: 'assets/img/qrcodes/',
            qrCodes: []
        }
    )
    useEffect(() => {
        setContact(example.contact)
    }, [])

    // This script automatically adds the current year to your website footer (credit: https://updateyourfooter.com/)
    const copyright = `©2021${new Date().getFullYear() > 2021 ? `-${new Date().getFullYear()}` : ''} ${contact.copyright}`

    return (
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
    )
}