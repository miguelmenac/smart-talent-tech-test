import { Component, ElementRef, inject, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { ComponentImports } from './hotel-form.imports';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DatosAbiertosService } from '../../../../Core/services/datos-abiertos.service';
import { Hotel, roomTypes } from '../../../../Core/models/hotel';
import { HotelsService } from '../../services/hotels.service';
import { ToastService } from '../../../../Shared/Services/toast.service';

@Component({
  selector: 'app-hotel-form',
  imports: ComponentImports,
  templateUrl: './hotel-form.component.html',
  styleUrl: './hotel-form.component.scss'
})
export class HotelFormComponent implements OnInit {
  @ViewChild('fu', { static: true }) fileUploadRef: ElementRef | undefined;
  @Input() editHotel: Hotel | undefined;
  form!: FormGroup;
  cities: string[] = [];
  citiesCopy: string[] = [];
  roomTypes = [
    {
      name: roomTypes.single
    },
    {
      name: roomTypes.double
    },
    {
      name: roomTypes.familiar
    },
  ];

  datosAbiertosService = inject(DatosAbiertosService);
  hotelsService = inject(HotelsService);
  toastService = inject(ToastService);
  editMode: boolean = false;

  ngOnInit(): void {
    this.buildForm();
    this.queryCities();
    this.setEditData();
  }

  setEditData() {
    if (this.editHotel) {
      this.editMode = true;
      this.editHotel.rooms.forEach((room, index) => {
        if (index > 0) {
          this.addRoom();
        }
      })
      this.form.patchValue(this.editHotel);
    }
  }

  createDefaultRoom(): { [key: string]: FormControl } {
    return {
      floor: new FormControl(null, [Validators.required]),
      idRoom: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      capacity: new FormControl(null, [Validators.required]),
      enabled: new FormControl(true, [Validators.required]),
    };
  }

  buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      location: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      isEnabled: new FormControl(true),
      rooms: new FormArray([new FormGroup(this.createDefaultRoom())])
    });
  }



  get rooms(): FormArray {
    return this.form.controls['rooms'] as FormArray;
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

  addRoom() {
    this.rooms.push(new FormGroup(this.createDefaultRoom()));
  }

  async submit(): Promise<void> {
    const data = { ...this.form.value };
    try {
      let message = 'Hotel creado correctamente';
      if (this.editMode) {
        await this.hotelsService.editHotel(data, this.editHotel!.id);
        message = 'Hotel actualizado correctamente';
      } else {
        await this.hotelsService.createHotel(data);
      }
      this.toastService.showSuccess(message);
    } catch (error) {
      this.toastService.showError('Ocurrió un error, por favor intente nuevamente');
    }
  }

  async onSelectedFiles(event: any) {
    const files = event.currentFiles();
    const reader = new FileReader();
    const file = files[0];
    const blob = await fetch(file.objectURL).then((r) => r.blob()); 

    reader.readAsDataURL(blob);

    reader.onloadend = async () => {
      const base64data = reader.result as string;
      
    };
  }

}
