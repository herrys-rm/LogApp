import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("heri", "website project", 3500);
const invTwo = new Invoice("rian", "website project", 3500);
const invThree = new Invoice("muliadi", "website project", 3500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
console.log(form);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
