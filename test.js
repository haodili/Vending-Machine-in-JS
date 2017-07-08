function Buy() {

const products = {
  Pepsi :{name:'pepsi',cost:150, amount:50},
  MtnDew:{name:'mtndew',cost:150, amount:40},
  Cheetos:{name:'cheetos',cost:100,amount:30},
  LaysChips:{name:'layschips',cost:100,amount:20}
}

const money ={
  Dime:{name:'10cent',amount:50},
  Quarter:{name:'25cent',amount:100},
  Dollar:{name:'100cent',amount:50}
}

var totalInserted = 0;

  while (totalInserted<100) {
   var added = prompt("for start, please insert coins,only Dime,Quarter and one dollar are accepted");
   var intAdded = parseInt(added);
       if(intAdded ==10){
       console.log(intAdded);
       totalInserted +=intAdded;
       money.Dime.amount++;
     }
       if(intAdded ==25){
       console.log(intAdded);
       totalInserted +=intAdded;
       money.Quarter.amount++;
     }
       if(intAdded ==100){
       console.log(intAdded);
       totalInserted +=intAdded;
       money.Dollar.amount++;
     }
     else {
      added =0;
      intAdded = 0;
      console.log("please make sure insert Dime, Quarter or One Dollar")
     }
    }
    
    console.log(totalInserted +" are inserted")
    console.log("please select what to buy?")
    product()

    function product (){
     console.log("12345")
    }
    

  }

Buy()




