import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DatePicker, DatePickerModule } from "primeng/datepicker";
import { FloatLabel } from "primeng/floatlabel";
import { InputNumberModule } from "primeng/inputnumber";

export const ComponentImports = [
    CardModule,
    ReactiveFormsModule,
    FormsModule, DatePicker, FloatLabel, InputNumberModule,
    AutoCompleteModule,
    DatePickerModule,
    ButtonModule
]