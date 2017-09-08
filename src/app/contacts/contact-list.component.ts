import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "contact-list",
    template: `
  <ul>
      <li
        *ngFor="let contact of contacts"
        (click)="onSelect(contact)"
        [class.clicked]="selectedContact === contact"
      >
        {{contact.firstName}} {{contact.lastName | uppercase}}
      </li> 
    </ul>
    <contact *ngIf="selectedContact !== null" [contact]="selectedContact"></contact>
`,
    styleUrls: ['./contact-list.component.css'],
    providers: [ContactService]
})
export class ContactListComponent implements OnInit {

    ngOnInit(): any {
        this.getContacts();
    }

    public contacts: Contact[];
    public selectedContact = null;

    constructor(private _contactService: ContactService) {
    }

    onSelect(contact) {
        if (this.selectedContact === contact) {
            this.selectedContact = null;
        } else {
            this.selectedContact = contact;
        }
    }

    getContacts() {
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts)
    }
}
