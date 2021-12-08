const getIDs = () =>
new Promise((resolve, reject) => {
setTimeout(() => {
resolve([532, 543, 753, 1, 5]);
}, 1500);
});

const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
    setTimeout(
    (ID) => {
    const recipe = {
    title: "Fresh tomato pasta",
    publisher: "Pinchas Hodadad",
    };
    resolve(`${ID}: ${recipe.title}`);
    },
    1500,
    recipeID
    );
    });
    };


 async function getSyncIDs(id)
 {
     try{
         const IDs= await getIDs();
         const recipe= await getRecipe(IDs);
         console.log(recipe);
     } catch (e){
         console.log ("It is an error!",e);
     }
     
 } 
 
 getSyncIDs(2);
 
// getIDs()
// .then((IDs) => {
// console.log(IDs);
// return getRecipe(IDs[2]);
// })
// .then((recipe) => {
// console.log(recipe);
// })
// .catch((error) => {
// console.log("It is an error!");
// });