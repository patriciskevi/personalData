console.log(document.getElementById('myForm').elements)

function calcBMI({
    weight,
    height
}) {
    return weight / Math.pow((height / 100), 2);
}

function calcMaxHeartRate({
    age
}) {
    return 220 - age;
}

function onSubmit(funcName) {
    let element = document.getElementById('myForm').elements;
    let person = {
        firstName: element[0].value,
        lastName: element[1].value,
        height: element[2].value,
        weight: element[3].value,
        age: element[4].value,
    };
    if (funcName == 'calcBMI') {
        document.getElementById('displayBMI').innerHTML = calcBMI(person);
    } else {
        document.getElementById('displayMaxHeartrate').innerHTML = 'Your BMI is ' + calcMaxHeartRate(person);
    }

}

// let x = document.getElementById('myForm').elements[4].value;
// let z = document.getElementById('myForm').elements[2].value;
// let y = document.getElementById('myForm').elements[3].value;