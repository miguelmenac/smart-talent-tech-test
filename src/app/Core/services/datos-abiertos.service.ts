import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Municipio } from '../models/municipio';
import { environment } from '../../../environments/environment.development';

const DATOS_ABIERTOS_API = environment.datosAbiertos;
@Injectable({
  providedIn: 'root'
})
export class DatosAbiertosService {

  httpClient = inject(HttpClient);

  obtenerDepartamentos(): Observable<string[]> {
    return this.httpClient.get<Municipio[]>(DATOS_ABIERTOS_API)
      .pipe(map((res: Municipio[]) => {
        let data = res.map((municipio: Municipio) => (municipio.municipio));
        data.sort((a: string, b: string) => a.localeCompare(b));
        return [...new Set(data)]
      }))
  };
}
