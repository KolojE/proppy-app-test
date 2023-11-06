interface IContact{
    id: number;
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: number;
    country?: string;
    notes?: string;
}

class Contact implements IContact{

    id: number;
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: number;
    country?: string;
    notes?: string;
  
    
    constructor(Contact?:IContact) {
        this.id = Contact?.id || 0;
        this.name = Contact?.name || '';
        this.email = Contact?.email || '';
        this.phone = Contact?.phone || '';
        this.address = Contact?.address || '';
        this.city = Contact?.city || '';
        this.state = Contact?.state || '';
        this.zip = Contact?.zip;
        this.country = Contact?.country || '';
        this.notes = Contact?.notes || '';
    }

}

export {IContact,Contact};