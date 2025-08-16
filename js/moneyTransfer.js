document.getElementById('btn_transferMoney').addEventListener("click", function (event) {
    event.preventDefault();
    
    const transferAccNum = transferMoneyShared('transfer_accNum');
    const transferAmount = transferMoneyShared('transfer_Amount');
    const transferPin = transferMoneyShared('transfer_Pin');

    if (isNaN(transferAccNum)) {
        alert("Failed to transfer money");
        return;
    }

    if (transferPin === 1234) {
        const accounBalance = getInputTextFieldValue('account_Balance');

        if (transferAmount > accounBalance) {
            alert("You do not have enough money to cash out");
            return;
        }

        const accounBalanceTransfer = accounBalance - transferAmount;

        document.getElementById('account_Balance').innerText = accounBalanceTransfer; 

        const transferHistory = document.createElement('div');
        transferHistory.classList.add('bg-black-300');
        transferHistory.innerHTML = `
            <h4 class="text-2xl font-bold">Transfer Amount</h4>
            <p>Transfer: ${transferAmount} Tk.</p>
            <p>To User: ${transferAccNum}</p>
            `
        // transferHistory.style.marginTop = '5px';

        const showTransferHistory = document.getElementById('transaction_container');
        showTransferHistory.appendChild(transferHistory);

    } else {
        alert("Wrong Credential! Please try again latter")
    }
});