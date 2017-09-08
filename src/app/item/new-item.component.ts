import {BookingService} from "../service/booking.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Item} from "../service/item";

@Component({
    selector: 'new-item',
    templateUrl: './new-item.component.html',
    styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

    @Output()
    updated = new EventEmitter<String>();

    myForm: FormGroup;

    ngOnInit(): any {
        this.myForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'description': ['', Validators.required]
        });

    }

    constructor(private bookingService: BookingService,
                private router: Router,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute) {
    }


    onSubmit(value) {
        let newItem: Item = {
            id: null,
            name: value.name,
            description: value.description
        }
        this.bookingService.addItem(newItem).subscribe(
            data => this.logResponse(data),
            error => alert(error),
            () => console.log("finished")
        );
    }

    private logResponse(data) {
        let response = JSON.stringify(data);
        console.log("response: " + response);
        this.updated.emit("complete");
    }
}
