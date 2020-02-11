export interface Jugador{    
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    numeroCamiseta: number; 
    nombreCamiseta: string; 
    nombreCompletoJugador: string;
    fechaIngresoEquipo: string;
    goles: number;
    precio: number;
    fkEquipoFutbol: number;
}