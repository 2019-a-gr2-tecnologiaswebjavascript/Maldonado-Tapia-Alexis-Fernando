export interface DetalleFactura{
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    cantidad: number; 
    fkFacturaId: number; 
    fkJugador: number;
}