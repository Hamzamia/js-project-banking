document.getElementById('deposite-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposite-input');
    const depositeAmount = depositInput.value;
    console.log(depositeAmount);

    const depositTotal = document.getElementById('deposite-total');
    depositTotal.innerText = depositeAmount;
    depositInput.value = '';
})