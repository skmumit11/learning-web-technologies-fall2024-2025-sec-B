// Full cleaned version — paste into your page
function jsform() {
    let start = document.getElementById('start');
    if (start) start.remove();

    let container = document.createElement('div');

    let brkline = document.createElement('br');
    brkline.style.display = "block";
    brkline.style.marginBottom = "10px";

    let header = document.createElement('h1');
    header.textContent = "Registration form using Java Script";

    let header3 = document.createElement('h3');
    header3.textContent = "View Entered Information: ";

    let addfieldbtn = document.createElement('button');
    addfieldbtn.textContent = "Add Field";
    addfieldbtn.value = "add";
    addfieldbtn.style.marginLeft = "10px";

    let submitbtn = document.createElement('button');
    submitbtn.textContent = 'Submit';
    submitbtn.value = 'submit';

    let label1 = document.createElement('label');
    label1.textContent = 'Choose field: ';

    
    let field = document.createElement('select');
    let placeholderOption = document.createElement('option');
    placeholderOption.textContent = "SELECT OPTIONS";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.value = "";  
    field.appendChild(placeholderOption);

    let inputOptions = ["username", "password", "email", "dateofbirth", "gender", "bloodgroup"];
    for (let i = 0; i < inputOptions.length; i++) {
        let options = document.createElement('option');
        options.value = inputOptions[i];
        options.textContent = inputOptions[i].toUpperCase();
        field.appendChild(options);
    }

    
    container.appendChild(header);
    container.appendChild(label1);
    container.appendChild(field);
    container.appendChild(addfieldbtn);
    container.appendChild(brkline);

    document.body.appendChild(container);

    let inputDiv = document.createElement('div');
    container.appendChild(inputDiv);

    let addInfobtn = document.createElement('button');
    addInfobtn.textContent = "Add Info";
    container.appendChild(addInfobtn);

    let addedFields = [];
    let rowCounter = 0;

    addfieldbtn.addEventListener('click', function () {
        let selected = field.value;
        if (!selected || selected === "SELECT OPTIONS") {
            alert("PLEASE CHOOSE FIELD!!!");
            return;
        }
        if (addedFields.includes(selected)) {
            alert("FIELD ALREADY ADDED!!!");
            return;
        }
        addedFields.push(selected);
        showInputField(selected, inputDiv);
    });

    let displayInfo = document.createElement('div');

    // Add Info button
    addInfobtn.addEventListener('click', function () {
        displayInfo.innerHTML = "";
        const displayrows = inputDiv.children;

        let allValid = true; 
        const requiredFields = ["username", "password", "email", "dateofbirth", "gender", "bloodgroup"];

        for (let i = 0; i < displayrows.length; i++) {
            const row = displayrows[i];
            const label = row.querySelector('label');
            if (!label) continue; 
            const inputs = row.querySelectorAll('input, select');

            let fieldPrinted = false;
            let fieldValid = true;
            let valueToShow = "";

            
            const fieldName = label.textContent.toLowerCase().replace(":", "").trim().replace(/\s+/g, "");

            
            if (fieldName === "gender") {
                
                fieldValid = validateGender(inputs);
                
                const checked = row.querySelector('input[type="radio"]:checked');

                if (checked) valueToShow = checked.value;
            } else {
            
                for (let j = 0; j < inputs.length; j++) {
                    const input = inputs[j];
                    const rawVal = input.type === "radio" ? (input.checked ? input.value : "") : (input.value || "").trim();

                    
                    switch (fieldName) {
                        case "username":
                            fieldValid = validateUsername(input) && fieldValid;
                            break;
                        case "password":
                            fieldValid = validatePassword(input) && fieldValid;
                            break;
                        case "email":
                            fieldValid = validateEmail(input) && fieldValid;
                            break;
                        case "dateofbirth":
                            fieldValid = validateDOB(input) && fieldValid;
                            break;
                        case "bloodgroup":
                            fieldValid = validateBloodgroup(input) && fieldValid;
                            break;
                        default:
                            break;
                    }

                    if (!valueToShow && rawVal) valueToShow = rawVal;
                }
            }

            if (valueToShow && fieldValid) {
                const infoLine = document.createElement('div');
                infoLine.innerHTML = `<strong>${label.textContent}</strong> ${valueToShow}`;
                displayInfo.appendChild(infoLine);
                fieldPrinted = true;
            }

            if (!fieldValid) allValid = false;
        }

        if (!allValid) {
            alert("Fix the errors before displaying info.");
           
        } else {
            //
        }
    });

    container.appendChild(header3);
    container.appendChild(displayInfo);
    container.appendChild(submitbtn);

    // Submit Button Logic
    submitbtn.addEventListener('click', function () {
        const requiredFields = ["username", "password", "email", "dateofbirth", "gender", "bloodgroup"];
        const missingFields = requiredFields.filter(f => !addedFields.includes(f));
        if (missingFields.length > 0) {
            alert("Please add all required fields before submitting.");
            return;
        }

        const rows = inputDiv.children;
        let emptyFieldFound = false;
        let allValid = true;

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const label = row.querySelector('label');
            if (!label) continue;
            const inputs = row.querySelectorAll('input, select');
            const fieldName = label.textContent.toLowerCase().replace(":", "").trim().replace(/\s+/g, "");

            // check filled
            let hasValue = false;
            if (fieldName === "gender") {
                hasValue = row.querySelector('input[type="radio"]:checked') !== null;
                const valid = validateGender(inputs);
                if (!valid) allValid = false;
            } else {
                for (let j = 0; j < inputs.length; j++) {
                    const input = inputs[j];
                    const val = (input.value || "").trim();
                    if (val !== "") hasValue = true;

                    // run validator for each
                    switch (fieldName) {
                        case "username":
                            if (!validateUsername(input)) allValid = false;
                            break;
                        case "password":
                            if (!validatePassword(input)) allValid = false;
                            break;
                        case "email":
                            if (!validateEmail(input)) allValid = false;
                            break;
                        case "dateofbirth":
                            if (!validateDOB(input)) allValid = false;
                            break;
                        case "bloodgroup":
                            if (!validateBloodgroup(input)) allValid = false;
                            break;
                        default:
                            break;
                    }
                }
            }

            if (!hasValue) emptyFieldFound = true;
        }

        if (emptyFieldFound) {
            alert("Please fill all the fields before submitting.");
            return;
        }

        if (!allValid) {
            alert("Please fix the errors before submitting.");
            return;
        }

        alert("Form submitted successfully!");
      
    });


    
    function showInputField(selected, inputDiv) {
        let row = document.createElement('div');
        row.classList.add('form-row');
        let brk = document.createElement('br');
        brk.style.display = "block";
        brk.style.marginBottom = "10px";

        switch (selected) {
            case "username": {
                const labelUsername = document.createElement('label');
                labelUsername.textContent = 'Username: ';
                const inputUsername = document.createElement('input');
                inputUsername.type = 'text';
                inputUsername.placeholder = 'Enter Your Username';
                inputUsername.addEventListener('input', function () { validateUsername(inputUsername); });
                row.appendChild(labelUsername);
                row.appendChild(inputUsername);
                row.appendChild(brk);
                break;
            }

            case "password": {
                const labelPassword = document.createElement('label');
                labelPassword.textContent = 'Password: ';
                const inputPassword = document.createElement('input');
                inputPassword.type = 'password';
                inputPassword.placeholder = 'Enter Your Password';
                inputPassword.addEventListener('input', function () { validatePassword(inputPassword); });
                row.appendChild(labelPassword);
                row.appendChild(inputPassword);
                row.appendChild(brk);
                break;
            }

            case "email": {
                const labelEmail = document.createElement('label');
                labelEmail.textContent = 'Email: ';
                const inputEmail = document.createElement('input');
                inputEmail.type = 'email';
                inputEmail.placeholder = 'Enter Your Email';
                inputEmail.addEventListener('input', function () { validateEmail(inputEmail); });
                row.appendChild(labelEmail);
                row.appendChild(inputEmail);
                row.appendChild(brk);
                break;
            }

            case "dateofbirth": {
                const labelDOB = document.createElement('label');
                labelDOB.textContent = 'Date of Birth: ';
                const inputDOB = document.createElement('input');
                inputDOB.type = 'date';
                inputDOB.addEventListener('change', function () { validateDOB(inputDOB); });
                row.appendChild(labelDOB);
                row.appendChild(inputDOB);
                row.appendChild(brk);
                break;
            }

            case "gender": {
                const labelGender = document.createElement('label');
                labelGender.textContent = 'Gender: ';
                row.appendChild(labelGender);

                const genders = ["male", "female"];
                const radioInputs = [];
                const uniqueName = 'gender_' + (rowCounter++);

                genders.forEach(g => {
                    const radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = uniqueName;
                    radio.value = g;
                    radio.id = uniqueName + '_' + g;
                    radioInputs.push(radio);

                    const radioLabel = document.createElement('label');
                    radioLabel.textContent = g.toUpperCase();
                    radioLabel.setAttribute('for', radio.id);

                    const radioDiv = document.createElement('div');
                    radioDiv.appendChild(radio);
                    radioDiv.appendChild(radioLabel);

                    row.appendChild(radioDiv);
                });

                // Attach change to all radios in this row
                radioInputs.forEach(r => r.addEventListener('change', function () {
                    validateGender(radioInputs);
                }));

                row.appendChild(brk);
                break;
            }

            case "bloodgroup": {
                const labelBG = document.createElement('label');
                labelBG.textContent = 'Blood Group: ';
                const selectBG = document.createElement('select');

                const bgPlaceholder = document.createElement('option');
                bgPlaceholder.textContent = "SELECT BLOOD GROUP";
                bgPlaceholder.disabled = true;
                bgPlaceholder.selected = true;
                bgPlaceholder.value = ""; // FIX ADDED
                selectBG.appendChild(bgPlaceholder);

                const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
                bloodGroups.forEach(bg => {
                    const option = document.createElement('option');
                    option.value = bg;
                    option.textContent = bg;
                    selectBG.appendChild(option);
                });

                selectBG.addEventListener('change', function () { validateBloodgroup(selectBG); });
                row.appendChild(labelBG);
                row.appendChild(selectBG);
                row.appendChild(brk);
                break;
            }
        }

        inputDiv.appendChild(row);
    }

    
    function getMessageBoxForRow(row) {
        if (!row) return null;
        let msg = row.querySelector('.validation-msg');
        if (!msg) {
            msg = document.createElement('div');
            msg.className = 'validation-msg';
            row.appendChild(msg);
        }
        return msg;
    }

    
    function getRowForInput(input) {
        return input ? input.closest('.form-row') : null;
    }

    function getMessageBox(inputOrRow) {
        let row = inputOrRow;
        if (row && row.nodeType === 1 && row.tagName !== 'DIV') {
            
            row = getRowForInput(inputOrRow);
        }
        return getMessageBoxForRow(row);
    }

    // Validation functions

    // Username
    function validateUsername(input) {
        const val = (input.value || "").trim();
        const row = getRowForInput(input);
        const msg = getMessageBox(row);

        if (val === "") {
            msg.textContent = "Username cannot be empty.";
            msg.style.color = "red";
            return false;
        }
        if (val.length < 3) {
            msg.textContent = "Username must be at least 3 characters.";
            msg.style.color = "red";
            return false;
        }

        msg.textContent = "Username is valid!";
        msg.style.color = "green";
        return true;
    }

    //Password
    function validatePassword(input) {
        const val = (input.value || "").trim();
        const row = getRowForInput(input);
        const msg = getMessageBox(row);

        if (val === "") {
            msg.textContent = "Password cannot be empty.";
            msg.style.color = "red";
            return false;
        }
        if (val.length < 6) {
            msg.textContent = "Password must be at least 6 characters.";
            msg.style.color = "red";
            return false;
        }

        msg.textContent = "Password is valid!";
        msg.style.color = "green";
        return true;
    }
    //email
    function validateEmail(input) {
        const email = (input.value || "").trim();
        const row = getRowForInput(input);
        const msg = getMessageBox(row);

        if (email === "") {
            msg.textContent = "Email cannot be empty.";
            msg.style.color = "red";
            return false;
        }

        const atPos = email.indexOf("@");
        const dotPos = email.lastIndexOf(".");

        if (atPos < 1) {
            msg.textContent = "Invalid email: missing '@' before domain.";
            msg.style.color = "red";
            return false;
        }

        if (dotPos < atPos + 2) {
            msg.textContent = "Invalid email: '.' must come after '@'.";
            msg.style.color = "red";
            return false;
        }

        if (dotPos === email.length - 1) {
            msg.textContent = "Email cannot end with a '.'.";
            msg.style.color = "red";
            return false;
        }

        msg.textContent = "Valid email address!";
        msg.style.color = "green";
        return true;
    }

    //Date of Birth
    function validateDOB(input) {
        const val = input.value;
        const row = getRowForInput(input);
        const msg = getMessageBox(row);

        if (!val) {
            msg.textContent = "Date of Birth cannot be empty.";
            msg.style.color = "red";
            return false;
        }

        msg.textContent = "Date of Birth is valid!";
        msg.style.color = "green";
        return true;
    }

    //gender
    function validateGender(inputs) {
        
        let radioList = Array.isArray(inputs) ? inputs : Array.from(inputs || []);
        const sampleInput = radioList[0];
        const row = sampleInput ? getRowForInput(sampleInput) : null;
        const msg = getMessageBox(row);

        const selected = radioList.some(i => i.type === "radio" && i.checked);

        if (!selected) {
            msg.textContent = "Please select a gender.";
            msg.style.color = "red";
            return false;
        }

        msg.textContent = "Gender selected!";
        msg.style.color = "green";
        return true;
    }

    function validateBloodgroup(input) {
        const val = (input.value || "").trim();
        const row = getRowForInput(input);
        const msg = getMessageBox(row);

        if (!val) {
            msg.textContent = "Please select a blood group.";
            msg.style.color = "red";
            return false;
        }

        msg.textContent = "Blood group selected!";
        msg.style.color = "green";
        return true;
    }
}


