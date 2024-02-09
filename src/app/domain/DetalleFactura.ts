 //import { CabeceraFactura } from "./CabeceraFactura";
import { Producto } from "./Producto";
import { Cliente } from "./Cliente";

export class DetalleFactura {
    public det_codigo?: number;
    public det_precio?: number;
    public det_cantidad?: number;
    public det_subtotal?: number;
    public producto?: Producto | null;
    public cliente?: Cliente | null;
}


