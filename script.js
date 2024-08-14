const form = document.getElementById('bmiForm')


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById('output').textContent = 'Please enter valid positive numbers for weight and height.';
        return;
    }

    const heightM = heightCm / 100;

    const bmi = weight / (heightM * heightM);

    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('output').textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
});
