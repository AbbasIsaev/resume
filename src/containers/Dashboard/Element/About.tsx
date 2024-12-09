import React, {useEffect, useState} from 'react'

import example from '../example.json'
import {IAbout, TAbout} from '../../../types/interfaces'

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

export const About = () => {
    const [about, setAbout] = useState<IAbout>(
        {
            title: '',
            description: '',
            srcPath: 'assets/img/about/',
            list: [],
            lastTimeline: ''
        }
    )

    useEffect(() => {
        setAbout(example.about)
    }, [])

    return (
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
    )
}