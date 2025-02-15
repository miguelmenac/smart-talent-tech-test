import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import componentImports from './imports.booking-search';

import { BookingService } from './services/booking.service';
import { DatosAbiertosService } from '../../../Core/services/datos-abiertos.service';

@Component({
  selector: 'app-booking-search',
  imports: [componentImports],
  templateUrl: './booking-search.component.html',
  styleUrl: './booking-search.component.scss'
})
export class BookingSearchComponent {
  cities: string[] = [];
  citiesCopy: string[] = [];
  formGroup!: FormGroup;

  datosAbiertosService = inject(DatosAbiertosService);
  bookingService = inject(BookingService);

  ngOnInit(): void {
    this.buildForm();
    this.queryCities();
  }

  buildForm(): void {
    this.formGroup = new FormGroup({
      destination: new FormControl('', [Validators.required]),
      numberOfPeople: new FormControl(null, [Validators.required, Validators.max(6)]),
      initialDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
  }

  queryCities(): void {
    this.datosAbiertosService.obtenerDepartamentos().subscribe({
      next: (resp) => { this.cities = resp; this.citiesCopy = resp },
    });
  }

  search(event: AutoCompleteCompleteEvent): void {
    const query = event.query.toLocaleLowerCase();

    if (query.length > 2) {
      this.cities = this.citiesCopy.filter((city) => city.toLocaleLowerCase().includes(query));
    }
  }

  submitData() {
    const booking = { ...this.formGroup.value };
    this.bookingService.searchHotels(booking);
  }
}
