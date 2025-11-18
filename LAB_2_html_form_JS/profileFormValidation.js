function validateProfileForm() {
    let msg = document.getElementById("msg");
    msg.textContent = ""; 

    // 1. Name validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        msg.textContent = "Name cannot be empty.";
        return;
    }

    let words = name.split(" ");
    if (words.length < 2) {
        msg.textContent = "Name must contain at least two words.";
        return;
    }

    // Check allowed characters and start with letter
    let firstChar = name.charAt(0).toUpperCase();
    if (!(firstChar >= "A" && firstChar <= "Z")) {
        msg.textContent = "Name must start with a letter.";
        return;
    }

    for (let i = 0; i < name.length; i++) {
        let c = name[i];
        if (!((c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || c === "." || c === "-" || c === " ")) {
            msg.textContent = "Name can only contain letters, dot(.) or dash(-).";
            return;
        }
    }

    // 2. Email validation
    let email = document.getElementById("email").value.trim();
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        msg.textContent = "Please enter a valid email address.";
        return;
    }

    // 3. Gender validation
    let genders = document.getElementsByName("gender");
    let genderSelected = false;
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) genderSelected = true;
    }
    if (!genderSelected) {
        msg.textContent = "Please select a gender.";
        return;
    }

    // 4. DOB validation
    let dob = document.getElementById("dob").value;
    if (dob === "") {
        msg.textContent = "Please select a date of birth.";
        return;
    }
    let dobDate = new Date(dob);
    if (dobDate.getFullYear() < 1900 || dobDate.getFullYear() > 2016) {
        msg.textContent = "Year of birth must be between 1900 and 2016.";
        return;
    }

    // 5. Blood group validation
    let blood = document.getElementById("blood").value;
    if (blood === "") {
        msg.textContent = "Please select a blood group.";
        return;
    }

    // 6. Degree validation
    let degrees = document.getElementsByName("degree");
    let degreeSelected = false;
    for (let i = 0; i < degrees.length; i++) {
        if (degrees[i].checked) degreeSelected = true;
    }
    if (!degreeSelected) {
        msg.textContent = "Please select at least one degree.";
        return;
    }

    // 7. Photo validation
    let photoInput = document.getElementById("photo");
    if (photoInput.files.length === 0) {
        msg.textContent = "Please upload a photo.";
        return;
    }

    // Preview the photo
    let previewContainer = document.getElementById("preview");
    previewContainer.innerHTML = ""; // clear previous preview

    let file = photoInput.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        let img = document.createElement("img");
        img.src = e.target.result;
        img.style.maxWidth = "200px";
        img.style.maxHeight = "200px";
        img.style.border = "1px solid #000";
        previewContainer.appendChild(img);
    }
    reader.readAsDataURL(file);

    msg.style.color = "green";
    msg.textContent = "All validations passed!";
}

// Optional: clear image preview when form is reset
function clearPreview() {
    document.getElementById("preview").innerHTML = "";
    document.getElementById("msg").textContent = "";
}
