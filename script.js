const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("Password").value;
    const confirmPassword = document.getElementById("ConfirmPassword").value;
    const rawPhone = document.getElementById("Phone").value;

    const messageEl = document.getElementById("Message");
    const phoneMessageEl = document.getElementById("PhoneMessage");

    messageEl.textContent = "";
    phoneMessageEl.textContent = "";

    let hasError = false;

    // Passwords check
    if (password !== confirmPassword) {
        messageEl.textContent = "Passwords don't match!";
        hasError = true;
    }

    // Phone check 
    let digits = rawPhone.replace(/\D/g, "");      
    digits = digits.replace(/^(00213|213)/, "");   
    digits = digits.replace(/^0/, "");            

    const phoneValid = /^[567]\d{8}$/.test(digits);

    if (!phoneValid) {
        phoneMessageEl.textContent = "Please enter a valid phone number!";
        hasError = true;
    }

    if (hasError) return;

    document.getElementById("SuccessMessage").style.display = "flex";
    form.reset();
});

function togglePassword(id, button) {
    const input = document.getElementById(id);
    const icon = button.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
}

function closeSuccess() {
    document.getElementById("SuccessMessage").style.display = "none";
}