function validateGender() {
    let radios = document.getElementsByName("gender");
    let msg = document.getElementById("msg");
    let selected = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = true;
            console.log("Selected gender:", radios[i].value);
            break;
        }
    }

    if (!selected) {
        console.log("No gender selected");
        msg.textContent = "Please select a gender.";
        msg.style.color = "red";
    } else {
        console.log("Gender selection valid");
        msg.textContent = "Gender selected!";
        msg.style.color = "green";
    }
}
