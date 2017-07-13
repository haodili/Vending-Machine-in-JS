function app() {
    //define the goods properties
    var products = {
        pepsi: {
            id: 1,
            name: 'Pepsi',
            cost: 150,
            amount: 50
        },
        mtnDew: {
            id: 2,
            name: 'MtnDew',
            cost: 150,
            amount: 40
        },
        cheetos: {
            id: 3,
            name: 'Cheetos',
            cost: 100,
            amount: 30
        },
        laysChips: {
            id: 4,
            name: 'LaysChips',
            cost: 100,
            amount: 2
        }
    }

    //define the initial money stored in the vending machine
    var money = {
        nickel: {
            name: '5cent',
            amount: 100
        },
        dime: {
            name: '10cent',
            amount: 50
        },
        quarter: {
            name: '25cent',
            amount: 100
        },
        dollar: {
            name: '100cent',
            amount: 50
        }
    }

    serviceFlag = true;

    while (serviceFlag) {
        if (products.pepsi.amount <= 1 || 　products.mtnDew.amount <= 1 || products.cheetos.amount <= 1 || products.laysChips.amount <= 1 || money.nickel.amount <= 1 || money.dime.amount <= 1 || money.quarter.amount <= 1 || money.dollar.amount <= 1) {
            serviceFlag = false;
        }
        //start a purchase
        selection()

        //select the product you want to buy
        function selection() {
            selectionFlag = false;
            alert("Welcome to our vending machine,  \n Pepsi: " + products.pepsi.cost + " cents ,MtnDew: " + products.mtnDew.cost + " cents ,Cheetos: " + products.cheetos.cost + " cents,LaysChips:" + products.laysChips.cost + " cents; \n click OK for select product")
            while (!selectionFlag) {
                var selection = prompt("type 1 for Pepsi, type 2 for MtnDew,type 3 for Cheetos, type 4 for Layschips")
                var selectionInt = parseInt(selection);
                if (selectionInt === 1 || selectionInt === 2 || selectionInt === 3 || selectionInt === 4) {
                    selectionFlag = true
                } else {
                    alert("Please ensure type 1-4 for product selection!")
                }
            }
            payment(selectionInt);
            console.log("You choice is " + selectionInt)
        }

        //pay for the product and get change back
        function payment(choice) {
            var totalInserted = 0;
            var productIndex = choice - 1;
            var price = products[Object.keys(products)[productIndex]].cost;
            var name = products[Object.keys(products)[productIndex]].name;
            products[Object.keys(products)[productIndex]].amount--;
             while (totalInserted < price) {
                var added = prompt("for payment, please insert coins,only Dime(10),Quarter(25) and one dollar(100) are accepted");
                var intAdded = parseInt(added);
                if (intAdded === 10 || intAdded === 25 || intAdded === 100) {
                    console.log(intAdded);
                    totalInserted += intAdded;
                    moneyCount(intAdded, 1);
                } else {
                    added = 0;
                    intAdded = 0;
                    alert("please make sure insert Dime, Quarter or One Dollar Cash")
                }
            }
            var change = totalInserted - price;
            moneyCount(change, -1)
            alert("Enjoy your " + name + " and your change is " + change)
        
        }
        //account the money
        function moneyCount(count, flag) {
            if (count === 10 && flag === 1) {
                money.dime.amount++;
            }
            if (count === 25 && flag === 1) {
                money.quarter.amount++;
            }
            if (count === 100 && flag === 1) {
                money.dollar.amount++;
            }
            if (flag === -1) {
                if (count === 50) {
                    money.quarter.amount--;
                    money.quarter.amount--;
                }
                if (count === 45) {
                    money.dime.amount--;
                    money.dime.amount--;
                    money.quarter.amount--;
                }
                if (count === 35) {
                    money.quarter.amount--;
                    money.dime.amount--;
                }
                if (count === 30) {
                    money.dime.amount--;
                    money.dime.amount--;
                    money.dime.amount--;
                }
                if (count === 25) {
                    money.quarter.amount--;
                }
                if (count === 20) {
                    money.dime.amount--;
                    money.dime.amount--;
                }
                if (count === 15) {
                    money.dime.amount--;
                    money.nickel.amount--;
                }
                if (count === 10) {
                    money.dime.amount--;
                }
                if (count === 5) {
                    money.nickel.amount--;
                }
            }
        }
        var earned = (money.dime.amount) * 10 + (money.quarter.amount) * 25 + (money.dollar.amount) * 100
        console.log("the money in machine is " + earned + " cents")
        console.log("Pepsi left:" + products.pepsi.amount + ", Mtndew left:" + products.mtnDew.amount + ", Cheetos left:" + products.cheetos.amount + ", LaysChips left:" + products.laysChips.amount)
    }
    console.log("Under maintenance, sorry for the inconvenience")
}
app()
