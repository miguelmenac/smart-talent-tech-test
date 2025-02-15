import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ComponentImports } from './booking-form.imports';
import { DOOCTYPES, GENRES } from '../../../Core/constants';
import { BookingService } from '../booking-search/services/booking.service';

@Component({
  selector: 'app-booking-form',
  imports: ComponentImports,
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent {
  @Input() hotelId: string = '';
  @Input() roomId: string = '';
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  form!: FormGroup;
  bookingService = inject(BookingService);

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.bookingService.getBookingSearch
      .subscribe((booking) => {
        const travelersArray = Array.from({ length: booking.numberOfPeople }, (_, index) => index + 1).map((x: any) => x = new FormGroup(this.createDefaultTraveler()));
        this.form = new FormGroup({
          travelers: new FormArray(travelersArray),
          nameEmergencyContact: new FormControl('', [Validators.required]),
          phoneEmergencyContact: new FormControl(null, [Validators.required])
        });

      });
  }


  get travelers(): FormArray {
    return this.form.controls['travelers'] as FormArray;
  }

  createDefaultTraveler(): { [key: string]: FormControl } {
    return {
      name: new FormControl(null, [Validators.required]),
      docType: new FormControl('', [Validators.required]),
      id: new FormControl(''),
      genre: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      contactPhone: new FormControl(null, [Validators.required])
    };
  }

  get docTypes() {
    return DOOCTYPES;
  }

  get genres() {
    return GENRES;
  }

  addTraveler(): void {
    this.travelers.push(new FormGroup(this.createDefaultTraveler()));
  }

  async submit(): Promise<void> {
    try {
      const booking = { ...this.form.value, hotelId: this.hotelId, roomId: this.roomId };
      await this.bookingService.createBooking(booking);
      this.onClose.emit(true);
    } catch (error) {
      this.onClose.emit(false);
    }
  }

  getTravelerNumber(index: number) {
    const idTraveler = Number(index) + 1;
    return `Datos del Viajero # ${idTraveler.toString()}`;
  }

}
