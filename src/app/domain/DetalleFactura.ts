import { CabeceraFactura } from "./CabeceraFactura";
import { Producto } from "./Producto";
import { Cliente } from "./Cliente";



export class DetalleFactura {
    private det_codigo?: number;
    private det_precio?: number;
    private det_cantidad?: number;
    private det_subtotal?: number;

    private producto?: Producto;
    private cabeceraFactura?: CabeceraFactura;
    private cliente?: Cliente;
}


