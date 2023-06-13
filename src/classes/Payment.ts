import { HasFormatter } from "../Interfaces/HasFormatter";

export class Payment implements HasFormatter {
  constructor(readonly recipient: string, private details: string, public amount: number) {}

  format() {
    return `${this.recipient} owed Rp.${this.details} ${this.amount}`;
  }
}
