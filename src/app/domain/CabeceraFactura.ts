import { DetalleFactura } from "./DetalleFactura";
import { Cliente } from "./Cliente";




export class CabeceraFactura {
    private cab_codigo?: number;
    private cab_fecha?: Date;
    private cab_subtotal?: number;
    private cab_iva?: number;
    private cab_total?: number;

    private cliente?: Cliente;
    private detalles?: DetalleFactura[];
}

