// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    if (email.value === '' || password.value === '') {
        event.preventDefault();
        alert('Semua kolom harus diisi!');
    }
});
