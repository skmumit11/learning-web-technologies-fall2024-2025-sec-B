function validateProfile() {
    let userId = document.getElementById("userid").value;
    let photo = document.getElementById("photo").value;
    let msg = document.getElementById("msg");

    msg.textContent = "";
    msg.style.color = "red";

    
    if (userId === "") {
        msg.textContent = "User ID cannot be empty.";
        return;
    }

    if (isNaN(userId)){
        msg.textContent="User ID must be in numbers";
        return;
    }

    
    if (userId <= 0) {
        msg.textContent = "User ID must be a positive number.";
        return;
    }

    if (photo === "") {
        msg.textContent = "Please upload a picture.";
        return;
    }

    // Success message
    msg.textContent = "Profile validated successfully!";
    msg.style.color = "green";
}
