import {Item} from "./item";
export interface Booking {
    id: number,
    name: string,
    startTime: Date,
    endTime: Date
    item: Item
}
