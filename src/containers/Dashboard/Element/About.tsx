import React, {useEffect, useMemo, useState} from 'react'
import {Link} from '@mui/material'
import Plot from 'react-plotly.js'

import example from '../example.json'
import {IAbout, TAbout} from '../../../types/interfaces'
import {getMonthDiff, getMonthsToYearsAndMonths} from '../utils'

const renderAbout = (
    srcPath = 'assets/img/about/',
    {index = 0, years, title, href, text, image}: TAbout & { index: number }
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
                    <h4 className="subheading">
                        <Link href={href} underline="none" target="_blank" rel="noreferrer">{title}</Link>
                    </h4>
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

    const data: Plotly.Data[] = useMemo(() => {
        const monthsBT = getMonthDiff(new Date('2021-07-30'), new Date('2017-04-21'))
        const yearsAndMonthsBT = getMonthsToYearsAndMonths(monthsBT)
        const monthsNLMK = getMonthDiff(new Date(), new Date('2021-08-03'))
        const yearsAndMonthsNLMK = getMonthsToYearsAndMonths(monthsNLMK)

        return [{
            values: [5 * 12 + 10, 6, 5, monthsBT, monthsNLMK],
            text: ['5 лет, 10 мес.', '6 мес.', '5 мес.1', yearsAndMonthsBT, yearsAndMonthsNLMK],
            labels: ['МГТУ', 'Фирма Фавор', 'ВымпелКом', 'Бизнес Тренд', 'НЛМК'],
            textinfo: 'label',
            textposition: 'outside',
            hoverinfo: 'label+text',
            showlegend: true,
            type: 'pie'
        }]
    }, [])

    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{about.title}</h2>
                    <h3 className="section-subheading text-muted">{about.description}</h3>
                </div>

                <div className="text-center pb-5">
                    <Plot
                        data={data}
                        layout={{height: 300, margin: {'t': 10, 'b': 10, 'l': 0, 'r': 0}, legend: {x: 0, y: 0.5}}}
                    />
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