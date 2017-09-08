
import 'rxjs/add/operator/map'
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class HTTPTestService {
    constructor(private http: Http) {
    }

    getCurrentTime() {
        return this.http.get('http://date.jsontest.com').map(res => res.json());
    }

    postJSON() {
        var json = JSON.stringify({var1: 'test', var2: 3});
        var params = 'json=' + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('http://validate.jsontest.com',
            params,
            {
                headers: headers
            }).map(res => res.json());
    }

    postBooking() {

        var endTime = new Date();
        var startTime = new Date();

        var data = JSON.stringify(
            {name: 'rest test', endTime: endTime, startTime: startTime}
        );
        console.log("data: " + data);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post("http://localhost:8080/booking/items/1/bookings", data, options).map(res => res.json());
    }

}
