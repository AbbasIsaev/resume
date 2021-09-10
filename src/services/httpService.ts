import rest from './rest'
import {AxiosRequestConfig, AxiosResponse} from 'axios'

export function fetchEntity(entityName: string, param?: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    let uri = '/'
    if (param) {
        uri = '/?' + param
    }
    return rest.fetch(entityName.toLowerCase() + uri, config)
}

export function fetchEntityById(entityName: string, id: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return rest.fetch(`${entityName.toLowerCase()}/${id}/`, config)
}

export function createEntity(entityName: string, data: any): Promise<AxiosResponse> {
    return rest.create(`${entityName.toLowerCase()}/`, data)
}

export function updateEntity(entityName: string, data: any, dataId: string): Promise<AxiosResponse> {
    return rest.update(`${entityName.toLowerCase()}/${dataId}/`, data)
}

export function destroyEntity(entityName: string, id: string): Promise<AxiosResponse> {
    return rest.destroy(`${entityName.toLowerCase()}/${id}/`)
}