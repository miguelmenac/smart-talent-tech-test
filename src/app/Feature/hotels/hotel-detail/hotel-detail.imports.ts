import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { BookingFormComponent } from "../../booking/booking-form/booking-form.component";
import { ToastModule } from 'primeng/toast';


export const ComponentImports = [
    AccordionModule,
    DataViewModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    BookingFormComponent,
    ToastModule
]