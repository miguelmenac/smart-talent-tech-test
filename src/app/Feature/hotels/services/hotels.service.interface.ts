import { Observable } from "rxjs"
import { Hotel } from "../../../Core/models/hotel"

export interface HotelsInterface {
    getAllHotels(): Observable<Hotel[]>
    getlHotelsByLocation(location: string): Observable<Hotel[]>
}