let solution =  function() {
    let ingredients  = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function (inputString) {
        let inputData = inputString.split(' ');
        let command = inputData[0];
        if (command === 'restock'){
            let microElement = inputData[1];
            let quantity = Number(inputData[2]);
            ingredients[microElement] += quantity;

            return 'Success';
        }
        else if (command === 'report'){
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        } else if (command === 'prepare'){
            let currentProduct = products[inputData[1]];
            for (let currentIngredient in currentProduct) {
                let neededMaterial = currentProduct[currentIngredient] * Number(inputData[2]);
                if(neededMaterial > ingredients[currentIngredient]){
                    return `Error: not enough ${currentIngredient} in stock`;
                }
            }

            for (let currentIngredient in currentProduct) {
                let neededMaterial = currentProduct[currentIngredient] * Number(inputData[2]);
                ingredients[currentIngredient] -= neededMaterial;
            }

            return 'Success';
        }
    }
};
solution = solution();

console.log(solution('restock carbohydrate 10'));
console.log(solution('restock flavour 10'));
console.log(solution('prepare apple 1'));
console.log(solution('restock fat 10'));
console.log(solution('prepare burger 1'));
console.log(solution('report'));
