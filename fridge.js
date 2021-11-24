const fridgeContent = [
    {name: 'eggs',saladIngredient: false},
    {name: 'lettuce',saladIngredient: true},
    {name: 'tomatoes',saladIngredient: true},
    {name: 'carrots',saladIngredient: true},
    {name: 'milk',saladIngredient: false}
];

const findIngredients = (fridgeContent) => {
    const ingredients = [];
    for(let i = 0; i < fridgeContent.length; i+=1){
        if(fridgeContent[i].saladIngredient === true){
            ingredients.push(fridgeContent[i].name);
        }
    }
    return ingredients;
};

module.exports = findIngredients;