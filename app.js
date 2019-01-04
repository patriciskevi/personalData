console.log(document.getElementById('myForm').elements.gender.value)
console.log(document.getElementById('myForm').elements.gender[1])

function calcBMI({
    weight,
    height
}) {
    return Math.floor(weight / Math.pow((height / 100), 2));
}

function calcMaxHeartRateMaleOther({
    age
}) {
    return Math.floor(220 - age);
}

function calcMaxHeartRateFemale({
    age
}) {
    return Math.floor(206 - (0.88 * age));
}

function onSubmit(funcName) {

    let element = document.getElementById('myForm').elements;
    let person = {
        height: element[0].value,
        weight: element[1].value,
        age: element[2].value,
    };
    if (funcName == 'calcBMI') {

        const bmi = calcBMI(person);
        let str = 'Your BMI is ' + bmi;
        switch (true) {
            case (bmi < 18.5):
                str += ', which is classified by the WHO as underweight.';
                break;
            case (bmi < 25):
                str += ', which is classified by the WHO as normal weight.';
                break;
            case (bmi < 30):
                str += ', which is classified by the WHO as overweight.';
                break;
            case (bmi < 35):
                str += ', which is classified by the WHO as class I obesity.';
                break;
            case (bmi < 40):
                str += ', which is classified by the WHO as class II obesity.';
                break;
            default:
                str += ', which is classified by the WHO as class III obesity.';
                break;
        }
        document.getElementById('displayBMI').innerHTML = str;
    } else {
        if (document.getElementById('myForm').elements.gender.value === 'female') {
            document.getElementById('displayMaxHeartrate').innerHTML = 'Your max heart rate is ' + calcMaxHeartRateFemale(person) + 'bpm.';
        } else {
            document.getElementById('displayMaxHeartrate').innerHTML = 'Your max heart rate is ' + calcMaxHeartRateMaleOther(person) + 'bpm.';
        }

    }
}