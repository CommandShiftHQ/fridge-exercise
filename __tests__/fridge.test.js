const findIngredients = require('../fridge');

const fridgeContent = [
    {name: 'eggs',saladIngredient: false},
    {name: 'lettuce',saladIngredient: true},
    {name: 'tomatoes',saladIngredient: true},
    {name: 'carrots',saladIngredient: true},
    {name: 'milk',saladIngredient: false}
];

test('findIngredients is a function', () => {

    expect(findIngredients).toBeInstanceOf(Function);

});

test('returns an array', () => {

    const result = findIngredients(fridgeContent);

    expect(typeof result).toBe('object');

});

test('it returns the right ingredients for a salad', () => {

    expect(findIngredients(fridgeContent)).toEqual(['lettuce', 'tomatoes', 'carrots']);

});

