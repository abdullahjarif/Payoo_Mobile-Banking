document.getElementById('bonus_btn').addEventListener("click", function (event) {

    event.preventDefault();

    const bonusCoupon = document.getElementById('bonus_Coupon').value;
    // console.log(bonusCoupon);

    if (bonusCoupon === 'AB10') {
        const accounBalance = getInputTextFieldValue('account_Balance');

        const transferAmount = transferMoneyShared('transfer_Amount');

        const bonusAmount = transferAmount * 0.05;

        const bonusAccBalance = accounBalance + bonusAmount;

        document.getElementById('account_Balance').innerText = bonusAccBalance;
        
        // show bonus history
        const bonusHistory = document.createElement('div');
        bonusHistory.classList.add('bg-black-300');
        bonusHistory.innerHTML = `
            <h4 class="text-2xl font-bold">Get Bonus</h4>
            <p>Get Bonus ${bonusAmount} Tk. To Transfer: ${transferAmount}</p>
            `
        // bonusHistory.style.marginTop = '5px';

        const showBonusHistory = document.getElementById('transaction_container');
        showBonusHistory.appendChild(bonusHistory);  

    } else {
        alert("Invalid Coupon! Please Try again")
    }


});