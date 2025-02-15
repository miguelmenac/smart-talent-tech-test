export interface Booking {
    destination: string;
    numberOfPeople: number;
    initialDate: Date;
    endDate: Date;
}
export interface BookingFull {
    name: string;
    docType: string;
    id: string;
    genre: string;
    birthDate: Date;
    email: string;
    contactPhone: string;
    roomId: string;
    hotelId: string;
}