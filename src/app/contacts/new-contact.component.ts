import {ContactService} from "./contact.service";
import {OnInit, Component} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    template: `
  <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">
    <div>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" 
        #firstName="ngForm"
        [formControl]="myForm.controls['firstName']"
      />
       <!--<span *ngIf="!myForm.controls['firstName'].valid">Not valid</span>-->
        <!--<span *ngIf="!firstName.valid">Not valid</span>-->
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" 
        [formControl]="myForm.controls['lastName']"
      />
    </div>
    <div>
      <label for="phone"> Phone Number: </label>
     <input type="text" id="phone"  
        [formControl]="myForm.controls['phone']"
      />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" 
        [formControl]="myForm.controls['email']"
      />
    </div>
    <button type="submit" [disabled]="!myForm.valid">
      Create Contact
    </button>
  </form>
`,
    providers: [ContactService],
    styles: [`
    label {
      display: inline-block;;
      width: 140px;
    }
    input {
      width: 250px;
    }
    input.ng-invalid[type="text"] {
        border: 1px solid red;
    }
  `]
})
export class NewContactComponent implements OnInit {

    private sub: any;
    myForm: FormGroup;
    private params: any;

    ngOnInit(): any {
        this.sub = this.route.params.subscribe(params => {
            this.params = params;
        });

        this.myForm = this.formBuilder.group({
            'firstName': [this.params['firstName'], Validators.required],
            'lastName': [this.params['lastName'], Validators.required],
            'phone': [this.params['phone'], Validators.required],
            'email': [this.params['email'], Validators.required],
        });

    }

    constructor(private contactService: ContactService,
                private router: Router,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute) {
    }

    onSubmit(value) {
        this.contactService.insertContact(value);
        this.router.navigate(['contacts']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
