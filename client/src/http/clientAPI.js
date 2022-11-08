import {$authHost, $host} from "./index";




export const createBasket = async (client) => {
    const {data} = await $host.post('api/basket', client)
    return data
}

export const fetchBasket = async () => {
    const {data} = await $host.get('api/basket')
    return data
}

