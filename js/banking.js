document.getElementById('deposite-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposite-input');
    const newdepositAmount = depositInput.value;
    //console.log(depositeAmount);

    const depositTotal = document.getElementById('deposite-total');

    const PreviousDepositAmount = depositTotal.innerText;
    const newDepositTotal = PreviousDepositAmount + newdepositAmount;
    depositTotal.innerText = newDepositTotal;
    depositInput.value = '';
})

