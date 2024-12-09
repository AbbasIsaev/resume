import {TImg} from '../components/Carousels/Carousel'

export interface IParam<T> {
    title: string
    description: string
    list: T[]
}

export interface IAbout extends IParam<TAbout> {
    srcPath: string
    lastTimeline: string
}

export interface ILogo {
    srcPath: string
    list: TImg[]
}

export type TSkill = {
    title: string
    text: string
}

export type TProject = {
    title: string
    remark: string
    srcPath: string
    images: TImg[]
}

export type TAbout = {
    years: string
    title: string
    text: string
    image: TImg
}

export interface IContact {
    title: string
    email?: string
    phone?: string
    github?: string
    vk?: string
    coords: number[]
    copyright: string
    srcPath: string
    qrCodes: TImg[]
}

export type INavigation = {
    brand: string
    list: INavigationItem[]
}

export type INavigationItem = {
    title: string
    href: string
}

export interface IMasthead {
    title: string
    description: string
}