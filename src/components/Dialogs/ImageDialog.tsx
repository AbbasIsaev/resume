import React, {FC} from 'react'
import {Dialog} from '@mui/material'

import {CarouselSelectImage} from '../Carousels/CarouselSelectImage'
import {TImg} from '../Carousels/Carousel'

type Props = {
    open: boolean
    images: TImg[]
    srcImagePath: string

    onClose(): void
}

export const ImageDialog: FC<Props> = ({
    open, onClose, images, srcImagePath
}) => (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={'lg'}>
        <CarouselSelectImage images={images} srcImagePath={srcImagePath} interval={0}/>
    </Dialog>
)