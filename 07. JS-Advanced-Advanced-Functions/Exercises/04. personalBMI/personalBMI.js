function solve(name, age, weight, height) {
    let personalBmi = Math.round(weight / Math.pow(height / 100, 2));

    let status;

    switch (true) {
        case personalBmi < 18.5:
            status = 'underweight';
            break;
        case personalBmi < 25:
            status = 'normal';
            break;
        case personalBmi < 30:
            status = 'overweight';
            break;
        default:
            status = 'obese';
            break;
    }

    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: personalBmi,
        status: status
    };

    if(status === 'obese'){
        patient['recommendation'] = 'admission required';
    }

    return patient;
}

//console.log(solve('“Honey Boo Boo”', 9, 57, 137));
console.log(solve('“Peter”', 29, 75, 182));