//classes
import { HassFormatter } from "./HasFormatter";

export class Invoice implements HassFormatter {
    constructor(
    public client: string,
    public details: string,
    public amount: number,

   ) {}

   format() {
       return `${this.client} owes $${this.amount} for ${this.details}`;
   }
}