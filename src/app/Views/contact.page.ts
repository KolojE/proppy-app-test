import { Component } from "@angular/core";
import { Contact } from "../Model/Contact/contact.model";


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})

export class ContactPage {

  public actionSheet: boolean = false;
  public selectedContact: Contact | null = null;
  public sampleData: Contact[] = [];
  public isEditModalOpen: boolean = false;

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Edit',
      data: {
        action: 'edit',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() {
    this.sampleData = Contact.getContacts();
  }

  private deleteContact() {

    if (!this.selectedContact) {
      throw new Error('Contact not found');
    }

    this.selectedContact.deleteContact();
    //update views
    this.sampleData = Contact.getContacts();

  }

  openActionSheet(open: boolean, id: number) {
    this.actionSheet = open;
    this.selectedContact = Contact.getContact(id);
  }

  actionSheetHandler(event: any) {
    this.actionSheet = false;
    const action = event.detail.data.action;

    switch (action) {
      case 'delete':
        this.deleteContact();
        break;
      case 'edit':
        this.toggleEditModal(true);
        break;
      case 'cancel':
        break;
    }
  }

  onContactSaved(contact: Contact) {
    console.log(contact);
    this.toggleEditModal(false);
    this.sampleData = Contact.getContacts();
  }

  toggleEditModal(open: boolean) {
    console.log('toggleEditModal');
    this.isEditModalOpen = open;
  }
}

