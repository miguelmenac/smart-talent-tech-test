export interface Booking {
    destination: string;
    numberOfPeople: number;
    initialDate: Date;
    endDate: Date;
}
export interface BookingFull extends Booking {
    travelers: TravelersData[];
    nameEmergencyContact: string;
    phoneEmergencyContact: string;
    roomId: string;
    hotelId: string;
    hotelName: string;
}

export interface TravelersData {
    name: string;
    docType: string;
    id: string;
    genre: string;
    birthDate: Date;
    email: string;
    contactPhone: string;
}