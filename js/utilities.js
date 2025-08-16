function inputFieldValueSharedById(id){
    const inputFieldShared = document.getElementById(id).value; 
    const inputFieldSharedNum = parseFloat(inputFieldShared);
    return inputFieldSharedNum;
}

function getInputTextFieldValue(id){
    const textValue = document.getElementById(id).innerText;
    const textVlueNum = parseFloat(textValue);
    return textVlueNum;
}

function inputCashOutSharedValue(id){
    const inputCashOut = document.getElementById(id).value;
    const inputCashOutNum = parseFloat(inputCashOut); 
    return inputCashOutNum;

}

function transferMoneyShared(id){
    const tranferMoney = document.getElementById(id).value;
    const transferMoneyNum = parseFloat(tranferMoney);
    return transferMoneyNum;
}

function payBillAmountShared(id){
    const payBillDetails = document.getElementById(id).value;
    const payBillDetailsNum = parseFloat(payBillDetails);
    return payBillDetailsNum;
}

function showSectionById(id){
    // hide all the sections 
    document.getElementById('addMoney_form').classList.add('hidden');
    document.getElementById('cashout_Form').classList.add('hidden');
    document.getElementById('transferMoney_form').classList.add('hidden');
    document.getElementById('bonus_form').classList.add('hidden');
    document.getElementById('payBill_form').classList.add('hidden');
    document.getElementById('transactions_section').classList.add('hidden');

    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}