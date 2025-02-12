import { Component, inject } from '@angular/core';
import { ComponentImports } from './hotel.imports';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatosAbiertosService } from '../../../../Core/services/datos-abiertos.service';

@Component({
  selector: 'app-hotel-form',
  imports: ComponentImports,
  providers: [DatosAbiertosService],
  templateUrl: './hotel-form.component.html',
  styleUrl: './hotel-form.component.scss'
})
export class HotelFormComponent {
  form!: FormGroup;
  cities: string[] = [];
  citiesCopy: string[] = [];

  datosAbiertosService = inject(DatosAbiertosService);

  ngOnInit(): void {
    this.buildForm();
    this.queryCities();
  }

  buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      location: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      isEnabled: new FormControl<boolean>(false)
    });
    console.log('this.form', this.form)
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

  submit(): void {

  }
}
