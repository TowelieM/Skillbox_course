export interface Product{
id?:number // В видео не видно было там это или нет    
company?: string
title?:string
image?: string
rating?: ProductRating
reviews?: number
price?: ProductPrice
deliveryOptions?: DeliveryOptions 
badge?: ProductBadge
colors:{
    one:ProductColor
    two:ProductColor
}
}

export interface ProductPrice {
    value?: number
    discount?: number
}

export interface ProductRating {
    value?: number
    reviews?: number
}

export interface DeliveryOptions{
    delivery?: string
    postamate?: boolean
    available?: number
}

export interface ProductBadge {
    color?: string
    text?: string
}

export interface ProductColor{
    color?: string
    image?: string
}