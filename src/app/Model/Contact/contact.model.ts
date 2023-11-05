import { sampleData } from "./sampleData";

interface IContact{
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    notes: string;
}

class Contact implements IContact{

    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    notes: string;
    
    constructor(Contact?:IContact) {
        this.id = Contact?.id || 0;
        this.name = Contact?.name || '';
        this.email = Contact?.email || '';
        this.phone = Contact?.phone || '';
        this.address = Contact?.address || '';
        this.city = Contact?.city || '';
        this.state = Contact?.state || '';
        this.zip = Contact?.zip || '';
        this.country = Contact?.country || '';
        this.notes = Contact?.notes || '';
    }

    static emptyContact():Contact{
        return new Contact({
            id: 0,
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            notes: ''
        })
    }

    static getContacts():Contact[]{
        return sampleData.map((contact)=>{
            return new Contact(contact);
        })
       }

    static getContact(id:number):Contact|null{
        const contact= sampleData.find((contact)=>{
            return contact.id === id;
        })
        
        return contact? new Contact(contact):null;
    }

    static addContact(newContact: Contact){
        sampleData.push(newContact);
    }
    

    public deleteContact(){
        sampleData.find((contact,index)=>{
            return contact.id === this.id && sampleData.splice(index,1);
        })
        console.log(sampleData)
    }

    public editContact(){
        sampleData.find((contact,index)=>{
            if(contact.id === this.id){
                sampleData[index] = this;
            }
        })
    }

}

export {IContact,Contact};