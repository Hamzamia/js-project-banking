document.getElementById('submit-button').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passField = document.getElementById('user-password');
    const userpassword = passField.value;


    if (userEmail == 'sontan@baap.com' && userpassword == 'hamza') {
        window.location.href = 'banking.html';
    }
})