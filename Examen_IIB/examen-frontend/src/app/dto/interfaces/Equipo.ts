export interface Equipo{
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    nombre: string;
    liga: string;
    fechaCreacion:string;
    numeroCopasInternacionales: number;
    campeonActual: boolean;
    jugadores?:any[]
}