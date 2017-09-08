import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from "./app.routing";
import {ContactListComponent} from "./contacts/contact-list.component";
import {ContactComponent} from "./contacts/contact.component";
import {BookingComponent} from "./booking/booking.component";
import {BookingListComponent} from "./booking/booking-list.component";
import {NewContactComponent} from "./contacts/new-contact.component";
import {NewBookingComponent} from "./booking/new-booking.component";
import {HTTPTestComponent} from "./test/http-test.component";
import {HeaderComponent} from './header/header.component';
import {MarketComponent} from "./market/market.component";
import {CollectionComponent} from "./collection/collection.component";
import {CollectableService} from "./shared/collectable.service";
import {BookingService} from "./service/booking.service";
import {ItemListComponent} from "./item/item-list.component";
import {ItemComponent} from "./item/item.component";
import {NewItemComponent} from "./item/new-item.component";

@NgModule({
    declarations: [
        AppComponent,
        ContactListComponent,
        ContactComponent,
        BookingComponent,
        BookingListComponent,
        NewContactComponent,
        NewBookingComponent,
        HTTPTestComponent,
        HeaderComponent,
        MarketComponent,
        CollectionComponent,
        ItemListComponent,
        ItemComponent,
        NewItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule
    ],
    providers: [CollectableService, BookingService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
