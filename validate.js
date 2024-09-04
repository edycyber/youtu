function validate() {
    const email = document.getElementById('emailInput').value;
    const code = document.getElementById('codeInput').value;
    
    if (!email || !code) {
        alert('Please enter both your email and code.');
        return;
    }

    const validCodes = ['AI1532', 'AI1234', 'AI9876'];

    if (validCodes.includes(code)) {
        window.location.href = 'https://edycyber.github.io/landingcreator/create.html';
    } else {
        window.location.href = 'https://foodiverse0.gumroad.com/l/ppu';
    }
}
