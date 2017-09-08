import {BookingService} from "../service/booking.service";
import {Component, OnInit} from "@angular/core";
import {Item} from "../service/item";

@Component({
    selector: "item-list",
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

    ngOnInit(): any {
        this.listItems();
    }

    public items: Item[];
    public selectedItem = null;

    constructor(private bookingService: BookingService) {
    }

    onSelect(item) {
        if (this.selectedItem === item) {
            this.selectedItem = null;
        } else {
            this.selectedItem = item;
        }
    }

    updateList(event) {
        console.log("update list");
        this.listItems();
    }

    listItems() {
        this.bookingService.listItems().subscribe(items => this.items = items);
    }

}
