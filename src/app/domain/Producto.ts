import { DetalleFactura } from "./DetalleFactura";

export class Producto {
    public pro_codigo?: number;
    public pro_fecha_registro?: Date;
    public pro_nombre?: string;
    public pro_stock?: number;
    public pro_imagen?: string;
    public pro_precio?: number;
    public pro_iva?: number;

    public detallesFactura?: DetalleFactura[];
}
