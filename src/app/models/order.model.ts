import { ItemCart } from './products.model';


export interface Order {
    dFechaEntrega: number,
    dFechaPedido: number,
    dTotal: number,
    ItemsCart: Array<ItemCartOrder>,
    sEstatus?: string,
    sNoPedido?: string,
    sPersonaRecibe?: string,
}

export interface ItemCartOrder {
    dCantidad: number,
    dPrecio: number,
    dPrecioUnitario: number,
    dTasaIva: number,
    iIdProducto: number,
    sNombreProducto?: string,
    sUrlImagen?: string,
}

export interface OrderRequest {
    iIdDireccion: number,
    sPersonaRecibe: string,
    dTotal: number,
    ItemsCart: Array<ItemCartOrder>
}

export interface OrderResponse {
    iResultado: string | boolean,
    sDetalle: string
}


// Classes
export class CreateOrder {

    iIdDireccion: number;
    sPersonaRecibe: string;
    dTotal: number;
	ItemsCart: Array<ItemCartOrder>;

    constructor(idDireccion: number, persona: string, total:number, itemCart: Array<ItemCart>) {
        this.iIdDireccion = idDireccion;
        this.sPersonaRecibe = persona;
        this.dTotal = total;

        this.ItemsCart = itemCart.reduce((acc, x) => {
            acc.push(new ItemCreateOrderCart(x.itemCart.dPrecioUnitario, x.itemCart.iIdProducto, x.quantity, x.itemCart.dPrecioUnitario, x.itemCart.dTasaIva));
            return acc;
        }, [])
    }
}



export class ItemCreateOrderCart {    

    dPrecioUnitario: number;
    iIdProducto: number;
    dCantidad: number;
    dPrecio: number;
    dTasaIva: number;

    constructor(precioUnitario: number, idProducto: number, cantidad: number, precio: number, iva: number) {
                    this.dPrecioUnitario = precioUnitario
                    this.iIdProducto = idProducto
                    this.dCantidad = cantidad
                    this.dPrecio = precio
                    this.dTasaIva = iva
                }
}