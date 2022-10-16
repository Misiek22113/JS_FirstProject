// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let espresso = { water: 250, coffeeBeans: 16, cost: 4};
let latte = { water: 350, milk: 75, coffeeBeans: 20, cost: 7};
let cappuccino = { water: 200, milk: 100, coffeeBeans: 12, cost: 6};
let coffeeMachine = { water: 400, milk: 540, coffeeBeans: 120, cups: 9, money: 550};

function makeCoffee(milk, water, coffeeBeans, cups, money){
  coffeeMachine.water = coffeeMachine.water - water;
  coffeeMachine.milk = coffeeMachine.milk - milk;
  coffeeMachine.coffeeBeans = coffeeMachine.coffeeBeans - coffeeBeans;
  coffeeMachine.cups = coffeeMachine.cups - cups;
  coffeeMachine.money = coffeeMachine.money + money;
}

function checkComponents(milk, water, coffeeBeans, cups){
  if(water > coffeeMachine.water){
    console.log("Sorry, not enough water!\n");
    return -1;
  }
  else if(milk > coffeeMachine.milk){
    console.log("Sorry, not enough milk!\n");
    return -1;
  }
  else if(coffeeBeans > coffeeMachine.coffeeBeans){
    console.log("Sorry, not enough coffee beans!\n");
    return -1;
  }
  else if(cups > coffeeMachine.cups){
    console.log("Sorry, not enough cups!\n");
    return -1;
  }
  else
    return 1;
}

function coffeeMachineState(){
  console.log(`The coffee machine has:\n${coffeeMachine.water} ml of water\n${coffeeMachine.milk} ml of milk
${coffeeMachine.coffeeBeans} g of coffee beans\n${coffeeMachine.cups} disposable cups\n${coffeeMachine.money} of money\n`)
}

function addComponent(milk, water, coffeeBeans, cups){
  coffeeMachine.water = coffeeMachine.water + water;
  coffeeMachine.milk = coffeeMachine.milk + milk;
  coffeeMachine.coffeeBeans = coffeeMachine.coffeeBeans + coffeeBeans;
  coffeeMachine.cups = coffeeMachine.cups + cups;
}

for(;;) {
  let ans = input("Write action (buy, fill, take, remaining, exit):\n");
  if (ans === "buy") {
    let coffee = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n"));
    if (coffee === 1) {
      if(checkComponents(0, espresso.water, espresso.coffeeBeans, 1) === 1){
        console.log("I have enough resources, making you a coffee!\n");
        makeCoffee(0, espresso.water, espresso.coffeeBeans, 1, espresso.cost);
      }
    } else if (coffee === 2) {
      if(checkComponents(latte.milk, latte.water, latte.coffeeBeans, 1) === 1){
        console.log("I have enough resources, making you a coffee!\n");
        makeCoffee(latte.milk, latte.water, latte.coffeeBeans, 1, latte.cost);
      }

    } else if(coffee === 3){
      if(checkComponents(cappuccino.milk, cappuccino.water, cappuccino.coffeeBeans, 1) === 1){
        console.log("I have enough resources, making you a coffee!\n");
        makeCoffee(cappuccino.milk, cappuccino.water, cappuccino.coffeeBeans, 1, cappuccino.cost);
      }
    }
  } else if (ans === "fill") {
    let water = Number(input("Write how many ml of water you want to add:\n"));
    let milk = Number(input("Write how many ml of milk you want to add:\n"));
    let coffeeBeans = Number(input("Write how many grams of coffee beans you want to add:\n"));
    let cups = Number(input("Write how many disposable cups you want to add:\n"));
    addComponent(milk, water, coffeeBeans, cups);
  } else if(ans === "take"){
    console.log(`I gave you $${coffeeMachine.money}\n`);
    coffeeMachine.money = 0;
  }
  else if(ans === "remaining"){
    coffeeMachineState();
  }
  else{
    process.exit();
  }
}
