document.getElementById('deposite-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposite-input');

    // update deposite value
    const newdepositAmountText = depositInput.value;

    const newdepositAmount = parseFloat(newdepositAmountText);
    //console.log(depositeAmount);

    const depositTotal = document.getElementById('deposite-total');

    const PreviousDepositAmountText = depositTotal.innerText;
    const PreviousDepositAmount = parseFloat(PreviousDepositAmountText);
    const newDepositTotal = PreviousDepositAmount + newdepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update total deposite balance
    const Totalbalance = document.getElementById('total-amount');
    const TotalbalanceText = Totalbalance.innerText;
    const previousTotalBalance = parseFloat(TotalbalanceText);
    const newTotalBalance = previousTotalBalance + newdepositAmount;
    Totalbalance.innerText = newTotalBalance;

    //clear input field 
    depositInput.value = '';
})

