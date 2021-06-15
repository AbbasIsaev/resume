import React, {FC} from 'react'
import {Dialog} from '@material-ui/core'

import {CarouselSelectImage} from '../Carousels/CarouselSelectImage'

type TImg = {
    name: string
    alt: string
}

type Props = {
    open: boolean
    images: TImg[]
    srcImagePath: string
    selectImage?: TImg

    onClose(): void
}

export const ImageDialog: FC<Props> = ({
    open, onClose, images, srcImagePath,
    selectImage
}) => (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={'md'}>
        <div className="text-center">
            <CarouselSelectImage images={images} srcImagePath={srcImagePath} interval={0} selectImage={selectImage}/>
        </div>
    </Dialog>
)