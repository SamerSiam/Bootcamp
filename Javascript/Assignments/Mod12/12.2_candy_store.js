const candyStore= {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }

    // get candy by ID - find is better in this case
    function getCandy(store, candyID){
         return store.candies.find((candy)=>(candy.id===candyID));
            
        }
       console.log(getCandy(candyStore,"5hd7y"));

       //get price function
       function getPrice(store, candyID){
        const tempObject= store.candies.find((candy)=>(candy.id===candyID));
        return tempObject;
        }
        console.log(getPrice(candyStore,"5hd7y"));

        // add candy function- need to first check if candy exists
        function addCandy(store, candyID, candyName, candyPrice)
        {
            const objCandy= getCandy(store,candyID);
            if (objCandy) // if candy exists
            {
                objCandy.amount++;
            }
            else{
            const newCandy={
                name: candyName,
                id: candyID,
                price: candyPrice,
                amount:1,
            };
         store.candies.push(newCandy); 
        }
       
         
          
            
        }
        addCandy(candyStore, "123", "Snickers",5);
        console.log(candyStore);
        
        // buy function , use find to avoid returning an array
        function buy(store, candyID){
            const candyObject=store.candies.find((candy)=>(candy.id===candyID));
            store.cashRegister=store.cashRegister+candyObject.price;
            candyObject.amount=candyObject.amount-1;

            }
            buy(candyStore,"as12f" );
            console.log(candyStore);