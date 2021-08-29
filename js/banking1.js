document.getElementById('deposite-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposite-input');
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);
    //console.log(depositeAmount);

    const depositTotal = document.getElementById('deposite-total');

    const PreviousDepositAmountText = depositTotal.innerText;
    const PreviousDepositAmount = parseFloat(PreviousDepositAmountText);

    const newDepositTotal = PreviousDepositAmount + newdepositAmount;
    depositTotal.innerText = newDepositTotal;
    //update  account balance

    const balanceTotal = document.getElementById('total-amount');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newTotalBalance = previousBalance + newdepositAmount;
    TotalBalance.innerText = newTotalBalance;

    depositInput.value = '';



})

