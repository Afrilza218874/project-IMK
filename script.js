// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    if (email.value === '' || password.value === '') {
        event.preventDefault();
        alert('Semua kolom harus diisi!');
    }
});

document.getElementById('impact-calculator').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseInt(document.getElementById('amount').value);
    if (amount) {
        const impact = Math.floor(amount / 10000); // Contoh: Rp 10.000 = 1 buku
        document.getElementById('impact-result').innerText = 
            `Dengan donasi Rp ${amount.toLocaleString()}, Anda membantu menyediakan ${impact} buku untuk anak-anak.`;
    } else {
        document.getElementById('impact-result').innerText = "Masukkan jumlah donasi yang valid.";
    }
});
