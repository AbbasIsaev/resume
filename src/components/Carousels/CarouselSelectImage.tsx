import React, {FC} from 'react'

import {TImg, useCarouselContext} from './Carousel'

type Props = {
    images: TImg[]
    srcImagePath: string
    interval?: number
}

export const CarouselSelectImage: FC<Props> = ({
    images, srcImagePath, interval = 10000
}) => {
    const carouselId = `carouselDark-${Date.now()}`
    const selectImage = useCarouselContext()

    return (
        <div
            id={carouselId} className="carousel carousel-dark slide position-static text-center my-3"
            data-bs-ride="carousel" data-bs-interval={interval}
        >
            <div className="carousel-inner">
                {images.map((img, index) => {
                    // Добавляем active class на выбранную картинку или на первый элемент
                    const activeClass = selectImage
                        ? (img === selectImage ? 'active' : '')
                        : (index === 0 ? 'active' : '')
                    return (
                        <div
                            key={index}
                            className={'carousel-item ' + activeClass}
                        >
                            <img
                                className="img-fluid img-mh800"
                                src={srcImagePath + img.name}
                                alt={img.alt ? img.alt : img.name}/>
                        </div>
                    )
                })}
            </div>

            <div className="carousel-indicators position-static">
                {images.map((img, index) => {
                    const activeClass = selectImage
                        ? (img === selectImage ? 'active' : '')
                        : (index === 0 ? 'active' : '')
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
    )
}