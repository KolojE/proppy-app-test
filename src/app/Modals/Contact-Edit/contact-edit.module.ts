import { CommonModule } from "@angular/common";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ContactEditModal } from "./contact-edit.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [ContactEditModal],
  exports: [ContactEditModal],
})
export class ContactEditModalModule{}
