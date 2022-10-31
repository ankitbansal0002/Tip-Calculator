// const billInput = document.getElementById('billTotal');
// const tipInput = document.getElementById('tipTotal');
// const button_plus_minus = document.querySelector('.splitButton');

const input_bill = document.getElementById('billTotalInput');
const input_tip = document.getElementById('tipInput');
const BillingPerPerson = document.getElementById('perPersonTotal')
const personCount= document.getElementById("numberOfPeople");
const button_plus = document.querySelector('.plus');
const button_minus = document.querySelector('.minus');


function calculateTheTip(){

    let tip_bill = 0;
    let count = 1;
    let initial_amount = 0;  
    let initial_tip = 0;


    input_bill.addEventListener("input", (e) =>{
        e.preventDefault();
        const billValue = input_bill.value;
        initial_amount = billValue;
        pern(initial_amount,initial_tip,count);
    })
    
    input_tip.addEventListener("input", (e) =>{
        e.preventDefault();
        const tipValue = input_tip.value;
        initial_tip = tipValue;
        pern(initial_amount,initial_tip,count);
    })


    button_plus.addEventListener('click', (e)=>{
        e.preventDefault();
        count = Number(count + 1);
        personCount.innerText = `${count}`;
        pern(initial_amount,initial_tip,count);
    })

    button_minus.addEventListener('click', (e)=>{
        e.preventDefault();
        count = Number(count - 1);
        if(Number(count) <= 0){
            count = 1;
        }
        personCount.innerText = `${count}`;
        pern(initial_amount,initial_tip,count);
    })
}

function pern(x,y,z){

    const l = (Number(x) + (Number(x)*(Number(y)/100))).toFixed(2);
    const split = (Number(l)/Number(z)).toFixed(2);

    BillingPerPerson.innerText = `₹ ${split}`;
}

calculateTheTip();