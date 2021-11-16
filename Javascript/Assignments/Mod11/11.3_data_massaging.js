const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];


// ******return all the names from the array*****************
function names(arr) {
    const resultArr = [];
    arr.forEach(function (user) {
        resultArr.push(user.name);
    });
    return resultArr;
    
    // return arr.map((user)=> { ---- solution with map
    //     return user.name;
    // });   
}

console.log(names(data));

// ****** return all object born before 1990*******************
function before90(arr) {
    const resultArr = [];
    arr.forEach(function (d) {
        if (d.birthday.slice(-4) < 1990) {
            //can use splitString=user.birthday.split("-") gives an array
            resultArr.push(d);
        }
        //create a date object new Date(user.Birthday).getFullyear();

    });
    return resultArr;
}
console.log(before90(data));

// ****** return object of foods and number of foods**********
function favoriteFoods(arr) {
    const allFoods = [];
    const foodObj={};
    arr.forEach(function (d) {
        d.favoriteFoods.meats.forEach(function (m) {
            if (foodObj[m]){
                foodObj[m]+=1;
            }
            else{
                foodObj[m]=1;
            }
            
        });
        d.favoriteFoods.fish.forEach(function (f) {
            if (foodObj[f]){
                foodObj[f]+=1;
            }
            else{
                foodObj[f]=1;
            }
        });

    });
    
    return foodObj;
}
console.log(favoriteFoods(data));
