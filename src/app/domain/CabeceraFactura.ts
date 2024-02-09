import { DetalleFactura } from "./DetalleFactura";
import { Cliente } from "./Cliente";


export class CabeceraFactura {
    public cab_codigo?: number;
    public cab_fecha?: Date;
    public cab_subtotal?: number;
    public cab_iva?: number;
    public cab_total?: number;

    public cliente?: Cliente;
    public detalles?: DetalleFactura[];

}

