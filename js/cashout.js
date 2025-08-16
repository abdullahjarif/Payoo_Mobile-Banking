document.getElementById('btn_Cashout').addEventListener("click", function (event) {
    event.preventDefault();

    const outputAccNum = inputCashOutSharedValue('output_accNum');
    const cashOut = inputCashOutSharedValue('input_cashout');
    const cashoutPin = inputCashOutSharedValue('cashout_pin');

    if (isNaN(outputAccNum)) {
        alert("Failed to add money! Please try again letter")
        return;
    }

    if (isNaN(cashOut)) {
        alert("Failed to add money")
        return;
    }

    if (cashoutPin === 1234) {
        const accounBalance = getInputTextFieldValue('account_Balance');

        if(cashOut > accounBalance){
            alert("You do not have enough money to cash out");
            return;
        }

        const newBalanceCashout = accounBalance - cashOut;
        // console.log(newBalanceCashout);
        document.getElementById('account_Balance').innerText = newBalanceCashout;


        const cashOutHistory = document.createElement('div');
        cashOutHistory.classList.add('bg-black-300');
        cashOutHistory.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>Money Withdraw: ${cashOut} Tk. New Balance is: ${newBalanceCashout}</p>
        <p>Account Number: ${outputAccNum}</p>
    `

        const transactionAdd = document.getElementById('transaction_container');
        transactionAdd.appendChild(cashOutHistory);

    } else {
        alert("Failed to cash out money! Please try again latter.")
    }

});