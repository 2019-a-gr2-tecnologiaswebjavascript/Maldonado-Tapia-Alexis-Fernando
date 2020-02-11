export interface Factura{
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    fechaFactura: string;
    nombreCliente:string; 
    ciCliente: string; 
    direccion: string;
    telefono: string;
    correo: string;
    total:number;
    fkUsuario: number;
}