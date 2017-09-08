import {BookingService} from "../service/booking.service";
import {Booking} from "../service/booking";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "booking-list",
    templateUrl: './booking-list.component.html',
    styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

    ngOnInit(): any {
        this.listBookings();
    }

    public bookings: Booking[];
    public selectedBooking = null;

    constructor(private bookingService: BookingService) {
    }

    onSelect(booking) {
        if (this.selectedBooking === booking) {
            this.selectedBooking = null;
        } else {
            this.selectedBooking = booking;
        }
    }

    updateList(event) {
        console.log("update list");
        this.listBookings();
    }

    listBookings() {
        this.bookingService.listBookings().subscribe(bookings => this.bookings = bookings);
    }

}
