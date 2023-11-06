import { CommonModule } from "@angular/common";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ContactEditModal } from "./contact-edit.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ContactEditModal],
  exports: [ContactEditModal],
})
export class ContactEditModalModule{}
