function validateBlood() {
    let blood = document.getElementById("blood").value;
    let msg = document.getElementById("msg");

    if (blood === "") {
        msg.textContent = "Please select a blood group.";
        msg.style.color = "red";
    } else {
        msg.textContent = "Blood group selected: " + blood;
        msg.style.color = "green";
    }
}
