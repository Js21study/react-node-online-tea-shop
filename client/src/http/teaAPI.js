import {$authHost, $host} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createSort = async (sort) => {
    const {data} = await $authHost.post('api/sort', sort)
    return data
}

export const fetchSorts = async () => {
    const {data} = await $host.get('api/sort', )
    return data
}

export const createTea = async (tea) => {
    const {data} = await $authHost.post('api/tea', tea)
    return data
}

export const fetchTeas = async (typeId, sortId, page, limit= 5) => {
    const {data} = await $host.get('api/tea', {params: {
            typeId, sortId, page, limit
        }})
    return data
}

export const fetchOneTea = async (id) => {
    const {data} = await $host.get('api/tea/' + id)
    return data
}
