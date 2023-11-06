import { Injectable } from "@angular/core";
import { Contact } from "../Model/Contact/contact.model";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private apiUrl = environment.apiUrl;
    private http: HttpClient;
    constructor(HttpClient: HttpClient) {
        this.http = HttpClient;
    }

    public getContacts(): Promise<Contact[]> {
        return new Promise((resolve, reject) => {
            this.http.get<Contact[]>(`${this.apiUrl}contact`).subscribe({
                next: (contacts) => {
                    resolve(contacts);
                },
                error: (err) => {
                    reject(err);
                }
            })
            })
    }

    public getContactById(id: number): Promise<Contact> {
        return new Promise((resolve, reject) => {
            this.http.get<Contact>(`${this.apiUrl}contact/${id}`).subscribe({
                next: (contact) => {
                    resolve(contact);
                },
                error: (err) => {
                    reject(err);
                }
            })
        })
    }

    public updateContact(contact: Contact): Promise<Contact> {
        return new Promise((resolve, reject) => {
            this.http.put<Contact>(`${this.apiUrl}contact/update`, contact).subscribe({
                next: (contact) => {
                    resolve(contact);
                },
                error: (err) => {
                    reject(err);
                }
            })
        })
    }

    public createContact(contact: Contact): Promise<Contact> {
        return new Promise((resolve, reject) => {
            this.http.post<Contact>(`${this.apiUrl}contact/create`, contact).subscribe({
                next: (contact) => {
                    resolve(contact);
                },
                error: (err) => {
                    reject(err);
                }
            })
        })
    }

    public deleteContact(id: number): Promise<Contact> {
        return new Promise((resolve, reject) => {
            this.http.delete<Contact>(`${this.apiUrl}contact/delete/${id}`).subscribe({
                next: (contact) => {
                    resolve(contact);
                },
                error: (err) => {
                    reject(err);
                }
            })
        })
    }
}