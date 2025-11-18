function generateform() {
    let fieldSelect = document.getElementById("fieldSelect");
    let fieldType = fieldSelect.value; // Get the selected field type
    
    // Object to define input types based on field names
    let fieldTypes = {
        username: 'text',
        password: 'password',
        email: 'email',
        dob: 'date',
        gender: 'radio',
        bloodGroup: 'select'
    };


    document.getElementById('addFieldBtn').addEventListener('click'), addusernamefield);

}

function addusernamefield(){

}


function validatename(){
let name= 

        if (name === "") {
        msg.textContent = "Name cannot be empty.";
        msg.style.color = "red";
        return false;
    }

    // Rule 2: Must contain at least two words
    let words = name.split(" ").filter(w => w.length > 0);
    if (words.length < 2) {
        msg.textContent = "Name must contain at least two words.";
        msg.style.color = "red";
        return false;
    }

    // Rule 3: Must start with a letter (A–Z or a–z)
    let firstChar = name[0];
    if (!((firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z'))) {
        msg.textContent = "Name must start with a letter.";
        msg.style.color = "red";
        return false;
    }

    // Rule 4: All characters must be valid (A–Z, a–z, dot, dash, space)
    for (let i = 0; i < name.length; i++) {
        let ch = name[i];
        let isLetter = (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z');
        let isAllowedSymbol = (ch === '.' || ch === '-' || ch === ' ');
        if (!(isLetter || isAllowedSymbol)) {
            msg.textContent = "Only letters, dots (.), dashes (-), and spaces are allowed.";
            msg.style.color = "red";
            return false;
        }
    }

    // Passed all checks
    msg.textContent = "Name is valid!";
    msg.style.color = "green";
    return true;
}

//password
function addpasswordfield(){

}

function validatepassword(){

}


//email
function addemailfield(){

}

function validateemail(){

}

//gender
function addgenderfield(){

}

function validategender(){

}


//DOB
function addBOBfield(){

}

function validateDOB(){

}

//Blood group
function addbloodGroupfield(){

}

function validatepbloodGroup(){

}

