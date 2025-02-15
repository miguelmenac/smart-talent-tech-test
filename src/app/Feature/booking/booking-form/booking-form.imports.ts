import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DatePickerModule } from "primeng/datepicker";
import { DividerModule } from "primeng/divider";
import { FieldsetModule } from "primeng/fieldset";
import { FloatLabel } from "primeng/floatlabel";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { SelectModule } from "primeng/select";
import { ToastModule } from "primeng/toast";


export const ComponentImports = [
    ReactiveFormsModule, 
    FormsModule,
    FloatLabel,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    DividerModule,
    ButtonModule,
    DatePickerModule,
    FieldsetModule,
    ToastModule
]