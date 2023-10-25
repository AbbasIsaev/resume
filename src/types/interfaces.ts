import {TImg} from '../components/Carousels/Carousel'

export interface IData<T> {
    count: number
    next: null | string,
    previous: null | string,
    results: T[]
}

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

export interface IParams {
    masthead: IMasthead
    service: IParam<TService>
    project: IParam<TProject>
    about: IAbout
    contact: IContact
    logo: ILogo
}

export type TService = {
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

export interface IConst {
    id: string
    name: string
    params: string
    remark: string
}

export interface IContact {
    title: string
    email?: string
    github?: string
    vk?: string
    coords: number[]
    copyright: string
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