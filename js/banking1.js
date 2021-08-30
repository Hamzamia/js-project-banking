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

    const newTotalBalance = previousBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newTotalBalance;






    depositInput.value = '';



})


//balance withdraw 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawbalanceText = withdrawInput.value;
    const newWithdraw = parseFloat(withdrawbalanceText);
    console.log(newWithdraw);


    //sset withdraw total

    const withdrawtotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawtotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);
    const withdrawTotal = newWithdraw + previousWithdraw;
    withdrawtotal.innerText = withdrawTotal;



    //set total balance after withbdraw

    const balanceTotal = document.getElementById('total-amount');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newTotalBalance = previousBalanceTotal - newWithdraw;
    balanceTotal.innerText = newTotalBalance;

    withdrawInput.value = '';
})

