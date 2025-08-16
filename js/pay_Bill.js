document.getElementById('btn_payBill').addEventListener("click", function (event) {
    event.preventDefault();

    const billarAccountNum = payBillAmountShared('biller_AccNum');
    const billarPin = payBillAmountShared('payBill_Pin');
    const payBillAmount = payBillAmountShared('PayBill_Amount');


    if (isNaN(billarAccountNum)) {
        alert("Failed to Pay Your Bill")
        return;
    }


    if (billarPin === 1234) {
        const accounBalance = getInputTextFieldValue('account_Balance');
        const newBalancePayBill = accounBalance - payBillAmount;
        document.getElementById('account_Balance').innerText = newBalancePayBill;


        const payBillHistory = document.createElement('div');
        payBillHistory.classList.add('bg-black-300');
        payBillHistory.innerHTML = `
        <h4 class="text-2xl font-bold">Pay Bill</h4>
        <p>Pay Bill: ${payBillAmount} Tk. New Balance is: ${newBalancePayBill}</p>
        <p>Billar Account Number: ${billarAccountNum}</p>`

        const showPayBillHistory = document.getElementById('transaction_container');
        showPayBillHistory.appendChild(payBillHistory);

    } else {
        alert("Failed to Pay Your Bill. Please Try Again.")
    }
});
