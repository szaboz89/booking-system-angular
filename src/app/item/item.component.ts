import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Item} from "../service/item";

@Component({
    selector: "item",
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {

    @Input()
    public item: Item = null;

    constructor(private _router: Router) {
    }
}
