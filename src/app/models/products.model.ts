export interface AllProducts {
    ok: boolean,
    message: string,
    products: Array<Product>,
}

export interface Product {
    _id: string,
    available: boolean,
    category: string,
    description: string,
    date: string,
    name: string,
    price: number,
    stock: number,
    img: Array<Image>
}

export interface Image {
    _id: string,
    name: string,
    path: string,
    size: number
}


export interface AddProduct {
    name: string,
    description: string,
    price: string,
    stock: string,
    archivo: any
}

export interface ItemCart {
    itemCart: Product,
    quantity: number,
}
