import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

import {API_URL, DEBUG} from '../config/config'

export const rest = axios.create({
    // Страница api для продакшина
    baseURL: API_URL
})

export function fetch(endpoint: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    if (DEBUG) {
        // eslint-disable-next-line
        console.log('FETCH!', endpoint)
    }
    return rest.get(endpoint, config)
}

export function create(endpoint: string, data: any): Promise<AxiosResponse> {
    return rest.post(endpoint, data)
}

export function update(endpoint: string, data: any): Promise<AxiosResponse> {
    return rest.put(endpoint, data)
}

export function destroy(endpoint: string): Promise<AxiosResponse> {
    return rest.delete(endpoint)
}

export default {
    rest,
    fetch,
    create,
    update,
    destroy
}