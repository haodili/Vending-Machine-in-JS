function app () {
//define the goods properties
var products = {
  Pepsi :{name:'Pepsi',cost:150, amount:50},
  MtnDew:{name:'MtnDew',cost:150, amount:40},
  Cheetos:{name:'Cheetos',cost:100,amount:30},
  LaysChips:{name:'LaysChips',cost:100,amount:2}
}

//define the initial money stored in the vending machine
var money ={
  Nickel:{name:'5cent',amount:100},
  Dime:{name:'10cent',amount:50},
  Quarter:{name:'25cent',amount:100},
  Dollar:{name:'100cent',amount:50}
}

serviceFlag = true;

while(serviceFlag){
if(products.Pepsi.amount<=1 ||　products.MtnDew.amount<=1 || products.Cheetos.amount<=1 || products.LaysChips.amount<=1|| money.Nickel.amount<=1 || money.Dime.amount<=1 || money.Quarter.amount<=1 || money.Dollar.amount<=1){
serviceFlag = false;
}
Buy()
//start a purchase
function Buy() {
    selection()
}
    //select the product you want to buy
    function selection () {
    selectionFlag = false;
    alert("Welcome to our vending machine,  \n Pepsi: "+products.Pepsi.cost+" cents ,MtnDew: "+products.MtnDew.cost+ " cents ,Cheetos: "+products.Cheetos.cost+ " cents,LaysChips:"+products.LaysChips.cost+" cents; \n click OK for select product")
    while (!selectionFlag){
    var selection = prompt("type 1 for Pepsi, type 2 for MtnDew,type 3 for Cheetos, type 4 for Layschips")
    var selectionInt =  parseInt(selection);
    if(selectionInt ==1 ||selectionInt ==2 ||selectionInt ==3 ||selectionInt ==4){
      selectionFlag=true
    }
    }
    payment(selectionInt);
    console.log("You choice is "+selectionInt)
    }

   //pay for the product and get change back
   function payment(choice) {
   var totalInserted = 0;
   if (choice ==1) {
    var price = products.Pepsi.cost;
    var name = products.Pepsi.name;
    products.Pepsi.amount--;
   }
    if (choice ==2) {
    var price = products.MtnDew.cost;
    var name = products.MtnDew.name;
    products.MtnDew.amount--;
   }
     if (choice ==3) {
    var price = products.Cheetos.cost;
    var name = products.Cheetos.name;
    products.Cheetos.amount--;
   }
      if (choice ==4) {
    var price = products.LaysChips.cost;
    var name = products.LaysChips.name;
     products.LaysChips.amount--;
   }
   while (totalInserted<price) {
      var added = prompt("for payment, please insert coins,only Dime(10),Quarter(25) and one dollar(100) are accepted");
      var intAdded = parseInt(added);
      if (intAdded ==10 || intAdded ==25 || intAdded ==100) {
       console.log(intAdded);
       totalInserted +=intAdded;
       moneyCount(intAdded,1);
     }
     else {
      added =0;
      intAdded = 0;
      alert("please make sure insert Dime, Quarter or One Dollar Cash")
     }
   }
      var change = totalInserted - price;
      moneyCount(change,-1)
      alert("Enjoy your "+ name + " and your change is " + change)
   }

       //account the money
    function moneyCount(count,flag) {
       if(count ==10 && flag==1){
       money.Dime.amount++;
    }
      if(count ==25 && flag==1){
       money.Quarter.amount++;
    }
      if(count ==100 && flag==1){
       money.Dollar.amount++;
    }     
       if(flag==-1){
       if(count ==50){
      money.Quarter.amount--;
      money.Quarter.amount--;
     }
     if(count ==15){
    money.Dime.amount--;
    money.Nickel.amount--;
     }
     if(count ==5){
    money.Nickel.amount--;
     }
    }    
    }
    var earned = (money.Dime.amount)*10+(money.Quarter.amount)*25+(money.Dollar.amount)*100
    console.log("the money we have is "+ earned +" cents")
    console.log("Pepsi left:"+products.Pepsi.amount+", Mtndew left:"+ products.MtnDew.amount +", Cheetos left:"+products.Cheetos.amount+", LaysChips left:"+products.LaysChips.amount)
}
  console.log("Under maintenance, sorry for the inconvenience")

}

app()




