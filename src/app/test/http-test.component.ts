import {Component} from '@angular/core';
import {HTTPTestService} from "./http-test.service";

@Component({
    selector: 'http-test',
    template: `
        <button (click)="onTestGet()">Test GET Request</button>
        <p>Output: {{getData}}</p>
        <button (click)="onTestPost()">Test POST Request</button>
        <p>Output: {{postData}}</p>
        <button (click)="onBookingPost()">Test POST New Booking</button>
        <p>Output: {{postResponse}}</p>
        <br/>
      <div class="pipes">
        <h2>Date Pipe</h2>
        <div>{{ date | date:'fullDate'}}</div>
        <h2>Number Pipe</h2>
        <div>{{ 4.566| number:'1.4-4'}}</div>
        <h2>Currency Pipe</h2>
        <div>{{ 15.99 | currency:'USD':true:'1.4-4'}}</div>
        <h2>Stateful Pipe</h2>
        <div>{{ randomData | async }}</div>
      </div>
  `,
    providers: [HTTPTestService]
})
export class HTTPTestComponent {
    date = new Date();
    randomData = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Random data!'), 3000);
    });

    getData: string;
    postData: string;
    postResponse: string;

    constructor(private httpTestService: HTTPTestService) {
    }

    onTestGet() {
        this.httpTestService.getCurrentTime().subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }

    onTestPost() {
        this.httpTestService.postJSON().subscribe(
            data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }

    onBookingPost() {
        this.httpTestService.postBooking().subscribe(
            data => this.postResponse = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }
}
