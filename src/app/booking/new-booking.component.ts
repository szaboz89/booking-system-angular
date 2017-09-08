import {BookingService} from "../service/booking.service";
import {Booking} from "../service/booking";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'new-booking',
    templateUrl: './new-booking.component.html',
    styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {

    @Output()
    updated = new EventEmitter<String>();

    myForm: FormGroup;

    ngOnInit(): any {
        this.myForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'itemId': ['', Validators.required]
        });

    }

    constructor(private bookingService: BookingService,
                private router: Router,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute) {
    }


    onSubmit(value) {
        let newBooking: Booking = {
            id: null,
            name: value.name,
            startTime: new Date(),
            endTime: new Date(),
            item: {
                id: value.itemId,
                name: '',
                description: ''
            }
        }
        this.bookingService.addBooking(newBooking).subscribe(
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
