import {Contact} from "./contact";
import {Router} from "@angular/router";
import {Component} from "@angular/core";

@Component({
    selector: "contact",
    template: `

   <div>
    <div>
      <label for="firstName">First Name:</label>
      <input [(ngModel)]="contact.firstName" type="text" id="firstName"/>
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input [(ngModel)]="contact.lastName" type="text" id="lastName"/>
    </div>
    <div>
      <label for="phone"> Phone Number: </label>
     <input [(ngModel)]="contact.phone" type="text" id="phone"/>
    </div>
    <div>
      <label for="email">Email:</label>
      <input [(ngModel)]="contact.email" type="text" id="email"/>
    </div>
     <div>
      <label for="email"></label>
      <button (click)="onCreateNew()">Create new Contact from this contact</button>
    </div>
  </div>

`,
    inputs: ["contact"],
    styles: [`
    label {
      display: inline-block;;
      width: 140px;
    }
    input {
      width: 250px;
    }
    .slidingDiv {
       transition: margin 300ms;
    }
  `]
})
export class ContactComponent {
    public contact: Contact = null;

    constructor(private _router: Router) {
    }

    onCreateNew() {
        this._router.navigate([
            '/newcontact',
            {
                firstName: this.contact.firstName,
                lastName: this.contact.lastName,
                phone: this.contact.phone,
                email: this.contact.email
            }
        ]);
    }
}
