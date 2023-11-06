import { Component } from "@angular/core";
import { Contact } from "../Model/Contact/contact.model";
import { ContactService } from "../Service/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})

export class ContactPage {

  public actionSheet: boolean = false;
  public selectedContact: Contact = new Contact();
  public contacts: Contact[] = [];
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

  constructor(private contactService: ContactService) {
  }

  private async deleteContact() {

    if (!this.selectedContact) {
      throw new Error('Contact not found');
    }

    await this.contactService.deleteContact(this.selectedContact.id);
    this.contacts = await this.contactService.getContacts();
  }

  async ngOnInit() {
    this.contacts = await this.contactService.getContacts()
  }

  async openActionSheet(open: boolean, id: number) {
    this.actionSheet = open;
    let selectedContact = this.contacts.find((contact) => contact.id == id);

    if(selectedContact)
    {
      this.selectedContact = selectedContact;
    }

  }

  actionSheetHandler(event: any) {
    this.actionSheet = false;
    const action = event.detail.data.action;

    if(!action && action == undefined)
    {return;}

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

  async onContactSaved(contact: Contact) {
    
    this.toggleEditModal(false);

    if(this.selectedContact.id == 0)
      await this.contactService.createContact(contact);
    else
      await this.contactService.updateContact(contact);

    this.contacts = await this.contactService.getContacts();
    return;
  }

  toggleEditModal(open: boolean, edit: boolean = true) {

    if(!edit){
      this.selectedContact = new Contact();
    }

    this.isEditModalOpen = open;
  }
}

