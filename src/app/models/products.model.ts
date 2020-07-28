export interface AllProducts {
    ok: boolean,
    message: string,
    products: Array<Product>,
}

export interface Product {
    iIdProducto: number,
    dPrecioUnitario: number,
    dTasaIva: number,
    iCategoria: number,
    iTipo: number,
    sDescripcion: string,
    sNombre: string,
    sNombreCategoria: string,
    sTipoProducto: string,
    sUrlImagenes: Array<string>
}
// export interface Product {
//     _id: string,
//     available: boolean,
//     category: string,
//     description: string,
//     date: string,
//     name: string,
//     price: number,
//     stock: number,
//     img: Array<Image>
// }

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

export interface Categoria {
    iIdCategoria: number,
    sNombreCategoria: string,
}
