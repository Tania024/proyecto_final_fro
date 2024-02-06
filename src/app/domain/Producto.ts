import { DetalleFactura } from "./DetalleFactura";


export class Producto {
    private pro_codigo?: number;
    private pro_fecha_registro?: Date;
    private pro_nombre?: string;
    private pro_stock?: number;
    private pro_imagen?: string;
    private pro_precio?: number;
    private pro_iva?: number;

    private detallesFactura?: DetalleFactura[];
}