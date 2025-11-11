function validateEmail() {
    var email = document.getElementById("email").value.trim();
    var msg = document.getElementById("msg");

    console.log("User entered:", email);

    // Rule 1: Cannot be empty
    if (email === "") {
        console.log("Email is empty");
        msg.textContent = "Email cannot be empty.";
        msg.style.color = "red";
        return;
    }

    // Rule 2: Must contain '@' and '.'
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");

    if (atPos < 1) {
        console.log("Missing or invalid '@' position");
        msg.textContent = "Invalid email: missing '@' before domain.";
        msg.style.color = "red";
        return;
    }

    if (dotPos < atPos + 2) {
        console.log("Dot position invalid");
        msg.textContent = "Invalid email: '.' must come after '@'.";
        msg.style.color = "red";
        return;
    }

    if (dotPos === email.length - 1) {
        console.log("Email ends with dot");
        msg.textContent = "Email cannot end with a '.'.";
        msg.style.color = "red";
        return;
    }

    // If passes all checks
    console.log("Email is valid");
    msg.textContent = "Valid email address!";
    msg.style.color = "green";
}
