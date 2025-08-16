// console.log("add money loaded");
document.getElementById('btn_addMoney').addEventListener("click", function (event) {
    event.preventDefault();

    const inputAccNum = inputFieldValueSharedById('input_accNum');
    const addMoney = inputFieldValueSharedById('input_addMoney');
    const pinNumber = inputFieldValueSharedById('input_Pin');

    if (isNaN(inputAccNum)) {
        alert("Failed to add money! Please try again letter");
        return;
    }
    if (isNaN(addMoney)) {
        alert("Failed to add money");
        return;
    }

    if (pinNumber === 1234) {
        const accounBalance = getInputTextFieldValue('account_Balance');
        const newBalance = accounBalance + addMoney;
        console.log(newBalance);
        document.getElementById('account_Balance').innerText = newBalance;

        // add to transaction history
        // const entryElement = document.createElement('p');
        // entryElement.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance} \n Bank Account: ${inputAccNum}`;
        // entryElement.style.marginTop = '10px';

        const entryElement = document.createElement('div');
        entryElement.classList.add('bg-black-300');
        entryElement.innerHTML = `
            <h4 class="text-2xl font-bold">Add Money</h4>
            <p>Added: ${addMoney} Tk. New Balance: ${newBalance}</p>
            <p>Bank Account: ${inputAccNum}</p>
            `

        const showtransactions = document.getElementById('transaction_container');
        showtransactions.appendChild(entryElement);
    } else {
        alert("Failed to add money! Please try again letter");
    }
});