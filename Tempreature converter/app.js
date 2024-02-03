

function clearFields() {
    document.getElementById('con1').value = ''; 
    document.getElementById('con2').value = ''; 
}

function updateTemperature(inputField) {
    var celsiusInput = document.getElementById('con1').value;
    var fahrenheitInput = document.getElementById('con2').value;

    if (inputField === 'con1' && celsiusInput !== '') {
        
        var celsiusValue = parseFloat(celsiusInput);
        var fahrenheitValue = (celsiusValue * 9/5) + 32;
        document.getElementById('con2').value = fahrenheitValue.toFixed(2);
    } else if (inputField === 'con2' && fahrenheitInput !== '') {
    
        var fahrenheitValue = parseFloat(fahrenheitInput);
        var celsiusValue = (fahrenheitValue - 32) * 5/9;
        document.getElementById('con1').value = celsiusValue.toFixed(2);
    } else {
        
        document.getElementById('con1').value = '';
        document.getElementById('con2').value = '';
    }
}


document.getElementById('con1').addEventListener('input', function() {
    updateTemperature('con1');
});

document.getElementById('con2').addEventListener('input', function() {
    updateTemperature('con2');
});



