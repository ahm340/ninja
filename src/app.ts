
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HassFormatter } from "./classes/HasFormatter.js"; 
import { ListTemplate } from "./classes/ListTemplate.js";


// array of objects

let docs : HassFormatter[] = [];



//form
const form = document.querySelector('form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')! as HTMLUListElement;
const list = new ListTemplate(ul);

console.log(list);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HassFormatter;
    if (type.value === 'invoice') {
     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);

}else {
    doc =  new Payment(tofrom.value, details.value, amount.valueAsNumber);

}

list.render(doc, type.value, 'end');

})




