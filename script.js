function convertCurrency() {
    const bitcoinInput = parseFloat(document.getElementById('bitcoin').value);
    const currencySelect = document.getElementById('currency');
    const selectedCurrency = currencySelect.options[currencySelect.selectedIndex].value;
    let convertedAmount = 0;
    let resultText = "";

    if (isNaN(bitcoinInput)) {
        resultText = "Please provide a valid input.";
    } else if (selectedCurrency === 'inr') {
        convertedAmount = bitcoinInput * 5000000; // Assuming 1 Bitcoin = 5,000,000 INR
        resultText = `${bitcoinInput} Bitcoin is approximately ${convertedAmount} INR.`;
    } else if (selectedCurrency === 'bitcoin') {
        convertedAmount = bitcoinInput / 5000000; // Assuming 1 Bitcoin = 5,000,000 INR
        resultText = `${bitcoinInput} INR is approximately ${convertedAmount} Bitcoin.`;
    }

    document.getElementById('result').innerText = resultText;
}


function swapInputs() {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    
    var temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}

function addNewRow() {
    const walletList = document.querySelector('.wallet-list');
    const newRow = document.createElement('li');
    newRow.classList.add('wallet-item');
    
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Crypto Name';
    
    const priceField = document.createElement('input');
    priceField.type = 'text';
    priceField.placeholder = 'Crypto Price';
    
    newRow.appendChild(inputField);
    newRow.appendChild(priceField);
    
    walletList.insertBefore(newRow, walletList.lastElementChild);
}
