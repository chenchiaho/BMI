function doFirst() {

    document.getElementById('theForm').onsubmit = calculate
}
function calculate(e) {

    e.preventDefault()

    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value

    let bmi = weight / Math.pow(height / 100, 2)
    bmi = bmi.toFixed(2)

    if (bmi < 18.5) {
        document.getElementById('total').innerHTML = `Your BMI is ${bmi}.<br> You are underweight!`
    } else if (bmi > 22.0) {
        document.getElementById('total').innerHTML = `Your BMI is ${bmi}.<br> You are overweight!`
    } else {
        document.getElementById('total').innerHTML = `Your BMI is ${bmi}.<br> You are in normal range`
    }

    // return false;
}

window.addEventListener('load', doFirst)