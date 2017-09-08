import {Booking} from "./booking";
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Item} from "./item";

@Injectable()
export class BookingService {

    // private SERVICE_URL = "http://localhost:8080/booking/rest/";
    private SERVICE_URL = "http://185.28.100.200:8080/booking/rest/";


    constructor(private http: Http) {
    }

    // getBookings() {
    //     return Promise.resolve(BOOKINGS);
    // }
    //
    // insertBooking(booking: Booking) {
    //     Promise.resolve(BOOKINGS).then((bookings: Booking[]) => bookings.push(booking))
    // }

    addBooking(booking: Booking) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let url = this.SERVICE_URL + "items/" + booking.item.id + "/bookings";
        let data = JSON.stringify(
            {name: booking.name, endTime: booking.endTime, startTime: booking.startTime}
        );
        console.log("data: " + data);
        return this.http.post(url, data, options).map(res => res.json());
    }

    listBookings() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let url = this.SERVICE_URL + "bookings";

        return this.http.get(url, options).map(response => <Booking[]>response.json());
    }

    addItem(item: Item) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let url = this.SERVICE_URL + "items";
        let data = JSON.stringify(item);
        console.log("data: " + data);
        return this.http.post(url, data, options).map(res => res.json());
    }

    listItems() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let url = this.SERVICE_URL + "items";

        return this.http.get(url, options).map(response => <Item[]>response.json());
    }


}
