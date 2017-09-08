import {Routes, RouterModule} from "@angular/router";
import {ContactListComponent} from "./contacts/contact-list.component";
import {NewContactComponent} from "./contacts/new-contact.component";
import {HTTPTestComponent} from "./test/http-test.component";
import {BookingListComponent} from "./booking/booking-list.component";
import {CollectionComponent} from "./collection/collection.component";
import {MarketComponent} from "./market/market.component";
import {ItemListComponent} from "./item/item-list.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/bookings', pathMatch: 'full'},
    {path: 'contacts', component: ContactListComponent},
    {path: 'newcontact', component: NewContactComponent},
    {path: 'test', component: HTTPTestComponent},
    {path: 'bookings', component: BookingListComponent},
    {path: 'items', component: ItemListComponent},
    {path: 'collection', component: CollectionComponent},
    {path: 'market', component: MarketComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
