import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Contact, IContact } from "src/app/Model/Contact/contact.model";



@Component({
    selector: 'contact-edit-modal',
    templateUrl: 'contact-edit.component.html',
    styleUrls: ['contact-edit.component.scss']
})
export class ContactEditModal {

    @Input() isOpen = false;
    @Input() contact: Contact | null = null;
    @Output() didDismiss: EventEmitter<any> = new EventEmitter();
    @Output() onSave: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    dismissModal() {
        this.didDismiss.emit();
    }

    saveContact() {
        console.log("onSave")
        if (!this.contact) {
            throw new Error('No Contact Selected! ');
        }
        this.contact.editContact();
        this.dismissModal();
        this.onSave.emit(this.contact);
    }

    onDetailsChange(event: any) {
        console.log("onDetailsChange");

        if (!this.contact) {
            throw new Error("No Contact Selected! ");
        }
        const key = event.target.name as keyof IContact;
        const value = event.target.value as never;
        this.contact[key] = value;
    }
}