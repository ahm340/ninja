import { HassFormatter } from "./HasFormatter";

export class Payment implements HassFormatter {
    constructor(
    public recipient: string,
    public details: string,
    public amount: number,

   ) {}

   format() {
       return `${this.recipient} is owed $${this.amount} for ${this.details}`;
   }
}