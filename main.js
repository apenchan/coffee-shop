// var coffeeShop = {
//   beans: 40,
//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },
//   makeDrink: function (drinkName) {
//     // TODO: Finish this method
//     var drinkType = this.drinkRequirements[drinkName];
//     // var newBeans = this.beans - this.drinkRequirements[drinkName];
//     if(drinkType && this.beans > 0){
//       this.beans -= this.drinkRequirements[drinkName]; 
//       console.log("Enjoy your " + drinkName + " there are now only " + this.beans + " beans left");
//     } else if(drinkType && this.beans < 0){
//       console.log("Sorry, we are out of beans for " + drinkName);
//     }else{
//       console.log("You're shit out of luck and we don't serve " + drinkName + " coffee");
//     }
//   }
// }

// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered");
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress");


var coffeeShop = {
  beans: 40,
  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },
  makeDrink: function (drinkName) {
    // TODO: Finish this method
    var drinkType = this.drinkRequirements[drinkName];
    // var newBeans = this.beans - this.drinkRequirements[drinkName];
    if(drinkType < this.beans){
      this.beans -= this.drinkRequirements[drinkName]; 
      console.log("Enjoy your " + drinkName + " there are now only " + this.beans + " beans left");
    } else if(drinkType > this.beans){
      alert("Sorry, we are out of beans for " + drinkName);
      console.log("Sorry, we are out of beans for " + drinkName)
    }else{
      console.log("You're shit out of luck and we don't serve " + drinkName + " coffee");
    }
  }, 
  money: 200,
  buySupplies: function(price){
    var beanCosts = 100;
    var newMoney = this.money - price;
    console.log(newMoney);
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
coffeeShop.buySupplies(4);
