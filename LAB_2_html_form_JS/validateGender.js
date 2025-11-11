function validateGender() {
    var radios = document.getElementsByName("gender");
    var msg = document.getElementById("msg");
    var selected = false;

    for (var i = 0; i < radios.length; i++) {
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
