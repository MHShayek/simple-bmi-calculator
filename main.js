// function bmiCalculator(weight, height) {
//     var bmi = weight / (height * height);
//     return bmi;
// }
// var bmi = bmiCalculator(65, 1.8);
// console.log(bmi);
function getbmiresult() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    height = height * 12;
    height = height * 0.025;

    var bmiresult = weight / (height * height);
    bmiresult = Math.round(bmiresult);

    document.getElementById('bmiresult').value = bmiresult;

}
