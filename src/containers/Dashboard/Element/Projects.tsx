import React, {Fragment, useEffect, useState} from 'react'

import example from '../example.json'
import {IParam, IProject, TProjectItem} from '../../../types/interfaces'
import {Carousel} from '../../../components/Carousels/Carousel'

function renderProjectItem({title, remark, srcPath, images}: TProjectItem) {
    return (
        <div className="col-sm-6 col-md-4 project-item" key={title + remark}>
            <Carousel images={images} srcImagePath={srcPath}/>

            <div className="project-caption bg-grey">
                <h4>{title}</h4>
                <p className="text-muted">{remark}</p>
            </div>
        </div>
    )
}

function renderProject({name, items}: IProject) {
    return (
        <Fragment key={name}>
            <h4 className="project-name">{name}</h4>
            {items.map((item) => renderProjectItem(item))}
        </Fragment>
    )
}

export const Projects = () => {
    const [project, setProject] = useState<IParam<IProject>>(
        {
            title: '',
            description: '',
            list: []
        }
    )

    useEffect(() => {
        setProject(example.project)
    }, [])

    return (
        <section className="page-section bg-grey" id="projects">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{project.title}</h2>
                    <h3 className="section-subheading text-muted">{project.description}</h3>
                </div>
                <div className="row">
                    {project.list.map((project) => renderProject(project))}
                </div>
            </div>
        </section>
    )
}