export interface Hotel {
    name: string;
    location: string;
    image: string;
    enabled: boolean;
    rooms: Room[];
    descripcion?: string;
}

export interface Room {
    floor: string;
    enabled: boolean;
    idRoom: string;
    price: number;
    type: string;
    capacity: number;
}

export enum roomTypes {
    single = 'Sencilla',
    double = 'Doble',
    familiar = 'Familiar'
}