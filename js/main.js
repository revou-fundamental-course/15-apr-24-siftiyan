function convertTemp() {
    let temperature = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('unit').value;
    let result = 0;
    let targetUnit = "";
    let explanation = "";

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        document.getElementById('conversionExplanation').innerText = "";
        return;
    }

    if (unit === "C") {
        result = (temperature * 9/5) + 32;
        targetUnit = "Fahrenheit";
        explanation = `Cara Konversi dari Celsius (°C) ke Fahrenheit (°F):\n` +
                      `Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celsius (°C) kali 9/5 ditambah 32.\n` +
                      `jadi rumusnya adalah S(°F) = (S(°C) × 9/5) + 32\n` +
                      `Sehingga perhitungannya sebagai berikut S(°F) = (${temperature} × 9/5) + 32 = ${result.toFixed(2)}`;
    } else {
        result = (temperature - 32) * 5/9;
        targetUnit = "Celsius";
        explanation = `Cara Konversi dari Fahrenheit (°F) ke Celsius (°C):\n` +
                      `Suhu S dalam derajat Celsius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32, lalu dibagi dengan 9/5.\n` +
                      `S(°C) = (S(°F) - 32) / (9/5)\n` +
                      `jadi rumusnya adalah S(°C) = (S(°F) - 32) / 1.8\n` +
                      `Sehingga perhitungannya sebagai berikut S(°C) = (${temperature} - 32) / 1.8 = ${result.toFixed(2)}`;
    }

    document.getElementById('result').innerText = `${temperature}° ${unit} sama dengan ${result.toFixed(2)}° ${targetUnit}.`;
    document.getElementById('conversionExplanation').innerText = explanation;
}

function resetForm() {
    document.getElementById('tempInput').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('conversionExplanation').innerText = '';
}

function reverseUnits() {
    let unitSelect = document.getElementById('unit');
    unitSelect.value = unitSelect.value === "C" ? "F" : "C";
}
