import React, {useEffect, useState} from 'react'

import example from '../example.json'
import {TImg} from '../../../components/Carousels/Carousel'
import {ILogo} from '../../../types/interfaces'

function renderImg(srcPath = 'assets/img/', {name, alt}: TImg) {
    return (
        <div className="col-md-3 col-sm-6 my-3" key={name}>
            <img
                className="img-fluid img-brand d-block mx-auto"
                src={srcPath + name}
                alt={alt}/>
        </div>
    )
}

export const Logos = () => {
    const [logo, setLogo] = useState<ILogo>(
        {
            srcPath: '',
            list: []
        }
    )

    useEffect(() => {
        setLogo(example.logo)
    }, [])

    return (
        <div className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    {logo.list.map(img => (
                        renderImg(logo.srcPath, img)
                    ))}
                </div>
            </div>
        </div>
    )
}