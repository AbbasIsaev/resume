import React, {FC, useRef, useState} from 'react'

import {ImageDialog} from '../Dialogs/ImageDialog'

type TImg = {
    name: string
    alt: string
}

type Props = {
    images: TImg[]
    srcImagePath: string
    interval?: number | boolean
}

export const Carousel: FC<Props> = ({images, srcImagePath, interval = 10000}) => {
    const [open, setOpen] = useState(false)
    // Выбрали картинку
    const refImg: { current: TImg | undefined } = useRef(undefined)
    const onOpenModel = (img: TImg) => {
        // Сохраняем элемент выбранной картинки
        refImg.current = img
        setOpen(true)
    }
    const onCloseModel = () => setOpen(false)

    const carouselId = `carouselDark-${Date.now()}`

    return (
        <>
            <div
                id={carouselId} className="carousel carousel-dark slide"
                data-bs-ride="carousel" data-bs-interval={interval}
            >
                <div className="carousel-indicators">
                    {images.map((img, index) => {
                        const activeClass = index === 0 ? 'active' : ''
                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target={'#' + carouselId} data-bs-slide-to={index}
                                className={activeClass}
                            />
                        )
                    })}
                </div>

                <div className="carousel-inner">
                    {images.map((img, index) => {
                        const activeClass = index === 0 ? 'active' : ''
                        return (
                            <div
                                key={index}
                                className={'carousel-item ' + activeClass}
                            >
                                <div className="project-link">
                                    <div className="project-hover" onClick={() => onOpenModel(img)}/>
                                    <img
                                        className="img-fluid"
                                        src={srcImagePath + img.name}
                                        alt={img.alt}/>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button" data-bs-target={'#' + carouselId}
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button" data-bs-target={'#' + carouselId}
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <ImageDialog
                open={open} onClose={onCloseModel}
                images={images} srcImagePath={srcImagePath}
                selectImage={refImg.current}
            />
        </>
    )
}