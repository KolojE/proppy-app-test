import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { Contact, IContact } from "src/app/Model/Contact/contact.model";



@Component({
    selector: 'contact-edit-modal',
    templateUrl: 'contact-edit.component.html',
    styleUrls: ['contact-edit.component.scss']
})
export class ContactEditModal {

    @Input() isOpen = false;
    @Input() contact: Contact = new Contact();
    @Output() didDismiss: EventEmitter<any> = new EventEmitter();
    @Output() onSave: EventEmitter<any> = new EventEmitter();

    contactForm: FormGroup;

    constructor(FormBuilder: FormBuilder) {
        this.contactForm = FormBuilder.group({
            name: ['', Validators.required],
        });
    }


    dismissModal() {
        this.didDismiss.emit();
    }

    saveContact() {
        this.dismissModal();
        this.onSave.emit(this.contact);
    }

    onDetailsChange(event: any) {

        const key = event.target.name as keyof IContact;
        const value = event.target.value as never;
        this.contact[key] = value;
    }
}