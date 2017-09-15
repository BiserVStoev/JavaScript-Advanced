function carProducer(requirements) {
    let engines = {
        90: {power: 90, volume: 1800},
        120: {power: 120, volume: 2400},
        200: {power: 200, volume: 3500}
    };

    let carriages = {
        hatchback: {type: 'hatchback', color: ''},
        coupe: {type: 'coupe', color: ''}
    };

    function getEngine(power) {
        return engines[Object.keys(engines).filter(e => e >= power)[0]];
    }

    function getCarriage(type, color) {
        let carriage = carriages[type];
        carriage.color = color;

        return carriage;
    }

    function getWheels(size) {
        let neededSize = size;
        if (size % 2 === 0){
            neededSize--;
        }

        return [neededSize, neededSize, neededSize, neededSize];
    }

    let car = { model: requirements.model};

    let carEngine = getEngine(requirements.power);
    let carCarriage = getCarriage(requirements.carriage, requirements.color);
    let carWheels = getWheels(requirements.wheelsize);

    car.engine = carEngine;
    car.carriage = carCarriage;
    car.wheels = carWheels;

    return car;
}

console.log(carProducer({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));