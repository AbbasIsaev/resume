import React, {useEffect, useState} from 'react'
import {Link} from '@mui/material'

import example from '../example.json'
import {IParam, TSkill} from '../../../types/interfaces'

function renderSkill({title, href, text}: TSkill) {
    return (
        <div className="col-md-4" key={title}>
            {href
                ?
                <h4 className="my-3">
                    <Link href={href} underline="none" target="_blank" rel="noreferrer">{title}</Link>
                </h4>
                : <h4 className="my-3">{title}</h4>
            }
            <p className="text-muted">{text}</p>
        </div>
    )
}

export const Skills = () => {
    const [skill, setSkill] = useState<IParam<TSkill>>(
        {
            title: '',
            description: '',
            list: []
        }
    )

    useEffect(() => {
        setSkill(example.skill)
    }, [])

    return (
        <section className="page-section" id="skills">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{skill.title}</h2>
                    <h3 className="section-subheading text-muted">{skill.description}</h3>
                </div>
                <div className="row text-center">
                    {skill.list.map(skill => (
                        renderSkill(skill)
                    ))}
                </div>
            </div>
        </section>
    )
}