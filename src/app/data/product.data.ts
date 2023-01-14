import {Product} from '../types/card'
export const product: Product = {
    id: 1,
    company: 'Google',
    title: 'Смартфон Google Pixel 4XL 6/128GB',
    image: 'https://gsm555.by/image/cache/data/1Azhar/Pixel/google_pixel_4_64gb_black_1-600x600.jpg',
    rating: {
        value: 5,
        reviews: 4,
    },
    price:{
        value: 63000,
        discount: 0.17,
    },
    deliveryOptions: {
        delivery: '21.07',
        postamate: true,
        available: 1,
    },
    badge: {
        color: '#198038',
        text: 'Выбор покупателей',
    },
    colors: {
        one: {
            color: 'black',
            image:'https://yandex.by/images/search?text=google%20pixel%204%20xl%20black&pos=15&img_url=http%3A%2F%2Fgigant-store.ru%2Fimage%2Fcatalog%2Fg-product-img%2Fsmartfon-google-pixel-4-1.jpg&rpt=simage&lr=157',
        },
        two: {
            color: 'white',
            image: 'https://yandex.by/images/search?text=google%20pixel%204%20xl%20white&pos=10&img_url=http%3A%2F%2Ftmonews.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fpixel-4-xl-white-tmobile.jpg&rpt=simage&lr=157',
        },
    },
}

export const products: Array<Product> = []