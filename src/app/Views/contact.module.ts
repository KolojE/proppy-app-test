import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactPage } from './contact.page';
import { ContactRoutingModule } from './contact.routing.module';
import { ContactEditModalModule } from '../Modals/Contact-Edit/contact-edit.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ContactRoutingModule,
    ContactEditModalModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule{}
