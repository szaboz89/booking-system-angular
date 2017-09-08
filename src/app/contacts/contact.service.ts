import {CONTACTS} from "./mock-contact";
import {Contact} from "./contact";
import {Injectable} from "@angular/core";

@Injectable()
export class ContactService {
  getContacts() {
    return Promise.resolve(CONTACTS);
  }

  insertContact(contact: Contact) {
    Promise.resolve(CONTACTS).then((contacts: Contact[]) => contacts.push(contact))
  }
}
