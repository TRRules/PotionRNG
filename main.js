//Sections of code required to navigate this appalling architecture
//Section 1: Object and miscalleouns items
//Section 2: Object variables.
//Section 3: updateGame function. Mot likely will be filled with either functions or if else code. Enter at your own descretion. You have been warned.
//Section 4: BuyWizard functions
//Section 5: 1 Function to iniatiate ticks

let values = {
    potions: 0,
    wizard1: 0,
    wizard2: 0,
    wizard3: 0,
    wizard4: 0,
    wizard5: 0,
    wizard6: 0,
    wizard7: 0,
    wizard8: 0,
    wizard9: 0,
    wizard10: 0,
    wizard11: 0,
    wizard12: 0,
    wizard13: 0,
    wizard14: 0,
    wizard15: 0,
    //balance
    wizCost1: 15,
    wizCost2: 100,
    wizCost3: 1100,
    wizCost4: 12000,
    wizCost5: 130000,
    wizCost6: 1400000,
    wizCost7: 20000000,
    wizCost8: 330000000,
    wizCost9: 5100000000,
    wizCost10: 75000000000,
    wizCost11: 1000000000000,
    wizCost12: 14000000000000,
    wizCost13: 170000000000000,
    wizCost14: 2100000000000000,
    wizCost15: 26000000000000000,
    w1Pot: 0,
    w2Pot: 0,
    w3Pot: 0,
    w4Pot: 0,
    w5Pot: 0,
    w6Pot: 0,
    w7Pot: 0,
    w8Pot: 0,
    w9Pot: 0,
    w10Pot: 0,
    w11Pot: 0,
    w12Pot: 0,
    w13Pot: 0,
    w14Pot: 0,
    w15Pot: 0,
    w1Base: 1,
    w2Base: 1,
    w3Base: 8,
    w4Base: 47,
    w5Base: 260,
    w6Base: 1400,
    w7Base: 7800,
    w8Base: 44000,
    w9Base: 260000,
    w10Base: 1600000,
    w11Base: 10000000,
    w12Base: 65000000,
    w13Base: 430000000,
    w14Base: 2900000000,
    w15Base: 21000000000,
    get createdPotions() {
        return [
            this.w1Pot, this.w2Pot, this.w3Pot, this.w4Pot, this.w5Pot,
            this.w6Pot, this.w7Pot, this.w8Pot, this.w9Pot, this.w10Pot,
            this.w11Pot, this.w12Pot, this.w13Pot, this.w14Pot, this.w15Pot
        ];
    }
}

const booton1 = document.getElementById("wizard1")
const booton2 = document.getElementById("wizard2")
const booton3 = document.getElementById("wizard3")
const booton4 = document.getElementById("wizard4")
const booton5 = document.getElementById("wizard5")
const booton6 = document.getElementById("wizard6")
const booton7 = document.getElementById("wizard7")
const booton8 = document.getElementById("wizard8")
const booton9 = document.getElementById("wizard9")
const booton10 = document.getElementById("wizard10")
const booton11 = document.getElementById("wizard11")
const booton12 = document.getElementById("wizard12")
const booton13 = document.getElementById("wizard13")
const booton14 = document.getElementById("wizard14")
const booton15 = document.getElementById("wizard15")

function createPotions() {
    values.potions += values.createdPotions.reduce((acc, cur) => acc + cur, 0);
    updateGame();
    changeHTML();
}

function potionsInterval() {
    setInterval(createPotions, 1000);
}

function addPotions() {
    values.potions = values.potions + 1;
    changeHTML();
    updateGame();
}

function changeHTML() {
    let elem = document.getElementById("change");
    elem.innerHTML = values.potions;
    let wizamount1 = document.getElementById("change1");
    wizamount1.innerHTML = values.wizard1;
    let wizamount2 = document.getElementById("change2");
    wizamount2.innerHTML = values.wizard2;
    let wizamount3 = document.getElementById("change3");
    wizamount3.innerHTML = values.wizard3;
    let wizamount4 = document.getElementById("change4");
    wizamount4.innerHTML = values.wizard4;
    let wizamount5 = document.getElementById("change5");
    wizamount5.innerHTML = values.wizard5;
    let wizamount6 = document.getElementById("change6");
    wizamount6.innerHTML = values.wizard6;
    let wizamount7 = document.getElementById("change7");
    wizamount7.innerHTML = values.wizard7;
    let wizamount8 = document.getElementById("change8");
    wizamount8.innerHTML = values.wizard8;
    let wizamount9 = document.getElementById("change9");
    wizamount9.innerHTML = values.wizard9;
    let wizamount10 = document.getElementById("change10");
    wizamount10.innerHTML = values.wizard10;
    let wizamount11 = document.getElementById("change11");
    wizamount11.innerHTML = values.wizard11;
    let wizamount12 = document.getElementById("change12");
    wizamount12.innerHTML = values.wizard12;
    let wizamount13 = document.getElementById("change13");
    wizamount13.innerHTML = values.wizard13;
    let wizamount14 = document.getElementById("change14");
    wizamount14.innerHTML = values.wizard14;
    let wizamount15 = document.getElementById("change15");
    wizamount15.innerHTML = values.wizard15;
    let costamount1 = document.getElementById("cost1");
    costamount1.innerHTML = values.wizCost1;
    let costamount2 = document.getElementById("cost2");
    costamount2.innerHTML = values.wizCost2;
    let costamount3 = document.getElementById("cost3");
    costamount3.innerHTML = values.wizCost3;
    let costamount4 = document.getElementById("cost4");
    costamount4.innerHTML = values.wizCost4;
    let costamount5 = document.getElementById("cost5");
    costamount5.innerHTML = values.wizCost5;
    let costamount6 = document.getElementById("cost6");
    costamount6.innerHTML = values.wizCost6;
    let costamount7 = document.getElementById("cost7");
    costamount7.innerHTML = values.wizCost7;
    let costamount8 = document.getElementById("cost8");
    costamount8.innerHTML = values.wizCost8;
    let costamount9 = document.getElementById("cost9");
    costamount9.innerHTML = values.wizCost9;
    let costamount10 = document.getElementById("cost10");
    costamount10.innerHTML = values.wizCost10;
    let costamount11 = document.getElementById("cost11");
    costamount11.innerHTML = values.wizCost11;
    let costamount12 = document.getElementById("cost12");
    costamount12.innerHTML = values.wizCost12;
    let costamount13 = document.getElementById("cost13");
    costamount13.innerHTML = values.wizCost13;
    let costamount14 = document.getElementById("cost14");
    costamount14.innerHTML = values.wizCost14;
    let costamount15 = document.getElementById("cost15");
    costamount15.innerHTML = values.wizCost15;
}

function updateGame() {
    checkPrice1();
    checkPrice2();
    checkPrice3();
    checkPrice4();
    checkPrice5();
    checkPrice6();
    checkPrice7();
    checkPrice8();
    checkPrice9();
    checkPrice10();
    checkPrice11();
    checkPrice12();
    checkPrice13();
    checkPrice14();
    checkPrice15();
}

//Another object
function buyWizard1() {
    values.wizard1 = values.wizard1 + 1;
    values.w1Pot = values.w1Base * values.wizard1;
    values.potions = values.potions - values.wizCost1;
    values.wizCost1 = values.wizCost1;
    changeHTML();
    updateGame();
}

function buyWizard2() {
    values.wizard2 = values.wizard2 + 1;
    values.w2Pot = values.w2Base * values.wizard2;
    values.potions = values.potions - values.wizCost2;
    values.wizCost2 = values.wizCost2;
    updateGame();
    changeHTML();
}

function buyWizard3() {
    values.wizard3 = values.wizard3 + 1;
    values.w3Pot = values.w3Base * values.wizard3;
    values.potions = values.potions - values.wizCost3;
    values.wizCost3 = values.wizCost3;
    updateGame();
    changeHTML();
}

function buyWizard4() {
    values.wizard4 = values.wizard4 + 1;
    values.w4Pot = values.w4Base * values.wizard4;
    values.potions = values.potions - values.wizCost4;
    values.wizCost4 = values.wizCost4;
    updateGame();
    changeHTML();
}

function buyWizard5() {
    values.wizard5 = values.wizard5 + 1;
    values.w5Pot = values.w5Base * values.wizard5;
    values.potions = values.potions - values.wizCost5;
    values.wizCost5 = values.wizCost5;
    updateGame();
    changeHTML();
}

function buyWizard6() {
    values.wizard6 = values.wizard6 + 1;
    values.w6Pot = values.w6Base * values.wizard6;
    values.potions = values.potions - values.wizCost6;
    values.wizCost6 = values.wizCost6;
    updateGame();
    changeHTML();
}

function buyWizard7() {
    values.wizard7 = values.wizard7 + 1;
    values.w7Pot = values.w7Base * values.wizard7;
    values.potions = values.potions - values.wizCost7;
    values.wizCost7 = values.wizCost7;
    updateGame();
    changeHTML();
}

function buyWizard8() {
    values.wizard8 = values.wizard8 + 1;
    values.w8Pot = values.w8Base * values.wizard8;
    values.potions = values.potions - values.wizCost8;
    values.wizCost8 = values.wizCost8;
    updateGame();
    changeHTML();
}

function buyWizard9() {
    values.wizard9 = values.wizard9 + 1;
    values.w9Pot = values.w9Base * values.wizard9;
    values.potions = values.potions - values.wizCost9;
    values.wizCost9 = values.wizCost9;
    updateGame();
    changeHTML();
}

function buyWizard10() {
    values.wizard10 = values.wizard10 + 1;
    values.w10Pot = values.w10Base * values.wizard10;
    values.potions = values.potions - values.wizCost10;
    values.wizCost10 = values.wizCost10;
    updateGame();
    changeHTML();
}

function buyWizard11() {
    values.wizard11 = values.wizard11 + 1;
    values.w11Pot = values.w11Base * values.wizard11;
    values.potions = values.potions - values.wizCost11;
    values.wizCost11 = values.wizCost11;
    updateGame();
    changeHTML();
}

function buyWizard12() {
    values.wizard12 = values.wizard12 + 1;
    values.w12Pot = values.w12Base * values.wizard12;
    values.potions = values.potions - values.wizCost12;
    values.wizCost12 = values.wizCost12;
    updateGame();
    changeHTML();
}

function buyWizard13() {
    values.wizard13 = values.wizard13 + 1;
    values.w13Pot = values.w13Base * values.wizard13;
    values.potions = values.potions - values.wizCost13;
    values.wizCost13 = values.wizCost13;
    updateGame();
    changeHTML();
}

function buyWizard14() {
    values.wizard14 = values.wizard14 + 1;
    values.w14Pot = values.w14Base * values.wizard14;
    values.potions = values.potions - values.wizCost14;
    values.wizCost14 = values.wizCost14;
    updateGame();
    changeHTML();
}

function buyWizard15() {
    values.wizard15 = values.wizard15 + 1;
    values.w15Pot = values.w15Base * values.wizard15;
    values.potions = values.potions - values.wizCost15;
    values.wizCost15 = values.wizCost15;
    updateGame();
    changeHTML();
}

function checkPrice1() {
    if (values.potions >= values.wizCost1) {
        booton1.disabled = false;
    }
    else {
        booton1.disabled = true;
    }
}

function checkPrice2() {
    if (values.potions >= values.wizCost2) {
        booton2.disabled = false;
    }
    else {
        booton2.disabled = true;
    }
}

function checkPrice3() {
    if (values.potions >= values.wizCost3) {
        booton3.disabled = false;
    }
    else {
        booton3.disabled = true;
    }
}

function checkPrice4() {
    if (values.potions >= values.wizCost4) {
        booton4.disabled = false;
    }
    else {
        booton4.disabled = true;
    }
}

function checkPrice5() {
    if (values.potions >= values.wizCost5) {
        booton5.disabled = false;
    }
    else {
        booton5.disabled = true;
    }
}

function checkPrice6() {
    if (values.potions >= values.wizCost6) {
        booton6.disabled = false;
    }
    else {
        booton6.disabled = true;
    }
}

function checkPrice7() {
    if (values.potions >= values.wizCost7) {
        booton7.disabled = false;
    }
    else {
        booton7.disabled = true;
    }
}

function checkPrice8() {
    if (values.potions >= values.wizCost8) {
        booton8.disabled = false;
    }
    else {
        booton8.disabled = true;
    }
}

function checkPrice9() {
    if (values.potions >= values.wizCost9) {
        booton9.disabled = false;
    }
    else {
        booton9.disabled = true;
    }
}

function checkPrice10() {
    if (values.potions >= values.wizCost10) {
        booton10.disabled = false;
    }
    else {
        booton10.disabled = true;
    }
}

function checkPrice11() {
    if (values.potions >= values.wizCost11) {
        booton11.disabled = false;
    }
    else {
        booton11.disabled = true;
    }
}

function checkPrice12() {
    if (values.potions >= values.wizCost12) {
        booton12.disabled = false;
    }
    else {
        booton12.disabled = true;
    }
}

function checkPrice13() {
    if (values.potions >= values.wizCost13) {
        booton13.disabled = false;
    }
    else {
        booton13.disabled = true;
    }
}

function checkPrice14() {
    if (values.potions >= values.wizCost14) {
        booton14.disabled = false;
    }
    else {
        booton14.disabled = true;
    }
}

function checkPrice15() {
    if (values.potions >= values.wizCost15) {
        booton15.disabled = false;
    }
    else {
        booton15.disabled = true;
    }
}

updateGame()
potionsInterval()