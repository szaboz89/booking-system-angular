import {Booking} from "../service/booking";
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "booking",
    templateUrl: './booking.component.html',
    inputs: ["booking"],
    styleUrls: ['./booking.component.css']
})
export class BookingComponent {
    public booking: Booking = null;

    constructor(private _router: Router) {
    }
}
