function validateDegree() {

    let checkbox = document.getElementsByName("degree");
    let msg = document.getElementById("msg");
    let selected = false;

    for (let i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked){
            selected=true;
            console.log("Selected degree:", checkbox[i].value)
        }
    }
    if (!selected) {
        console.log("No degree selected");
        msg.textContent = "Please select a degree.";
        msg.style.color = "red";
    } else {
        console.log("Gender selection valid");
        msg.textContent = "Degree selected!";
        msg.style.color = "green";
    }

}
