let bill = 0;
let tip = 0;
let peopleNumber = 0;
let totalTip = 0;
let totalPerson = 0;

const renderValues = () => {
    const billValue = document.querySelector("#ibill");
    const peopleNumberValue = document.querySelector("#ipeoplenumber");
    const tipValue = document.querySelector("#tip-amount");
    const totalValue = document.querySelector("#total-amount");

    billValue.value = bill;
    peopleNumberValue.value = peopleNumber;
    tipValue.innerHTML = totalTip;
    totalValue.innerHTML = totalPerson;
}

const notZeroOrLower = (val) => {
    return val <= 0 ? false : true;
}

const calculateTotalTipPerPerson = () => {
    if (notZeroOrLower(peopleNumber)) {
        const tipValue = document.querySelector("#tip-amount");
        console.log(bill)
        totalTip = (parseFloat(bill) + (parseFloat(bill) * (parseInt(tip) / 100))) / parseInt(peopleNumber);
        tipValue.innerHTML = totalTip;
    } else {
        let warningP = document.querySelector("#warning");
        const warningMessage = "Number of people must be grater than 0!"
        warningP.innerHTML(warningMessage);
    }

}

const checkOldSelectedDiv = () => {
    if (document.querySelector(".selected-box")) {
        const oldSelectedDiv = document.querySelector(".selected-box");
        oldSelectedDiv.classList.remove('selected-box');
    }
}


document.querySelector("#tip-container").addEventListener("click", (event) => {

    if (event.srcElement.className === "tip-el tip-div") {

        checkOldSelectedDiv();
        tip = event.srcElement.innerText.replace('%', '');
        event.srcElement.classList.toggle('selected-box');

    }
})
document.querySelector("#custom-tip").addEventListener("click", (event) => {
    checkOldSelectedDiv();
    if (event.target.value != "") {
        tip = event.target.value;
    }
    document.querySelector("#custom-tip").addEventListener("change", (event) => {
        if (event.target.value != "") {
            tip = event.target.value;
        }
    })


})


document.querySelector("#ibill").addEventListener("change", (event) => {
    bill = event.target.value;
})

document.querySelector("#ipeoplenumber").addEventListener("change", (event) => {
    peopleNumber = event.target.value;
    console.log(peopleNumber);
    calculateTotalTipPerPerson();
})

renderValues();

// TO DO
//call calculateTotalTipPerPerson  in every goood places
//add disabled / placeholder when value is 0
// add Total person calculations
// add reset functionality
// mobile view
// check srcElement