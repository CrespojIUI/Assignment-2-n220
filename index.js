// Dating Problem
let tickets = 3;
let ticketPrice = 14;
let totalCost = tickets * ticketPrice;

document.getElementById("ttCost").textContent =
    "Total Ticket Cost: $" + totalCost;


// Shopping Problem
let bankAccount = 235.87;

// outfit items
let shirt = 35;
let pants = 75;
let shoes = 60;

let totalPurchase = shirt + pants + shoes;
let remaining = bankAccount - totalPurchase;

document.getElementById("bank").textContent =
    "Remaining Balance: $" + remaining.toFixed(2);


let jacket = 70;
let canAffordJacket = remaining >= jacket;

document.getElementById("addJacket").textContent =
    "Can afford jacket: " + canAffordJacket;


// Pizza Problem
let pizzas = 4;
let slicesPerPizza = 8;
let totalSlices = pizzas * slicesPerPizza;

let slicesPerStudent = 2.5;
let studentsFed = Math.floor(totalSlices / slicesPerStudent);
let leftoverSlices = totalSlices - (studentsFed * slicesPerStudent);

document.getElementById("profPizza").textContent =
    "Students Fed: " + studentsFed + " | Leftover Slices: " + leftoverSlices;


// Monty's Mega Bar
let adult = 12;
let child = 6;
let drink = 1.5;

let totalMonty = (2 * adult) + (1 * child) + (3 * drink);

document.getElementById("Monty").textContent =
    "Total Bill: $" + totalMonty;


// Tips Average
let tips = [202.45, 134.97, 256.63, 178.22];

let sum = tips.reduce((a, b) => a + b, 0);
let average = sum / tips.length;

document.getElementById("tips").textContent =
    "Average Weekly Tips: $" + average.toFixed(4);