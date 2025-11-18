// Define the field types for each name
const fieldTypes = {
    username: 'text',
    password: 'password',
    email: 'email',
    dob: 'date',
    gender: 'radio', // Change gender to radio type
    bloodGroup: 'select' // Keep blood group as select type
};

// This array will hold the field names that the user adds
let fieldsToAdd = [];

// Event listener to add field names to the form
document.getElementById('addFieldBtn').addEventListener('click', function() {
    const fieldName = document.getElementById('fieldName').value.trim().toLowerCase();
    
    // Check if the field name is valid and not already added
    if (fieldName && fieldTypes[fieldName] && !fieldsToAdd.includes(fieldName)) {
        fieldsToAdd.push(fieldName);
        renderDynamicForm();
        document.getElementById('fieldName').value = ''; // Clear the input field after adding
    } else {
        alert('Please enter a valid field name (or the field already exists).');
    }
});

// Function to render the dynamic form
function renderDynamicForm() {
    const dynamicForm = document.getElementById('dynamicForm');
    dynamicForm.innerHTML = ''; // Clear the form before re-rendering
    
    fieldsToAdd.forEach(field => {
        const fieldDiv = document.createElement('div');
        
        let inputElement;
        
        // Check if the field name exists in the fieldTypes object
        if (fieldTypes[field]) {
            const label = document.createElement('label');
            label.innerText = field.charAt(0).toUpperCase() + field.slice(1);
            
            if (fieldTypes[field] === 'select') {
                // Handle select fields (blood group)
                inputElement = document.createElement('select');
                inputElement.id = field;
                
                // Populate options for blood group
                const options = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
                options.forEach(optionText => {
                    const option = document.createElement('option');
                    option.value = optionText;
                    option.innerText = optionText;
                    inputElement.appendChild(option);
                });
            } else if (fieldTypes[field] === 'radio') {
                // Handle radio buttons for gender
                inputElement = document.createElement('div');
                inputElement.id = field;
                
                const genders = ['Male', 'Female', 'Other'];
                genders.forEach(gender => {
                    const radioDiv = document.createElement('div');
                    const radioInput = document.createElement('input');
                    radioInput.type = 'radio';
                    radioInput.name = field;
                    radioInput.value = gender;
                    radioInput.id = field + gender;
                    
                    const radioLabel = document.createElement('label');
                    radioLabel.setAttribute('for', field + gender);
                    radioLabel.innerText = gender;

                    radioDiv.appendChild(radioInput);
                    radioDiv.appendChild(radioLabel);
                    inputElement.appendChild(radioDiv);
                });
            } else {
                // Handle regular input fields (text, password, email, date)
                inputElement = document.createElement('input');
                inputElement.type = fieldTypes[field];
                inputElement.id = field;
            }

            // Append the label and input element to the div
            fieldDiv.appendChild(label);
            fieldDiv.appendChild(inputElement);
            dynamicForm.appendChild(fieldDiv);
        }
    });
}

// Event listener to submit the form and display the entered data
document.getElementById('submitBtn').addEventListener('click', function() {
    const userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = ''; // Clear previous info

    // Collect the values from the dynamic form
    fieldsToAdd.forEach(field => {
        const inputElement = document.getElementById(field);
        
        let value;
        if (field === 'gender') {
            // For gender, collect the selected radio button value
            const selectedGender = document.querySelector(`input[name="${field}"]:checked`);
            value = selectedGender ? selectedGender.value : 'Not selected';
        } else if (field === 'bloodGroup') {
            // For blood group, get the selected option from the dropdown
            value = inputElement.value;
        } else {
            // For other fields, just get the value from the input element
            value = inputElement.value;
        }

        const label = field.charAt(0).toUpperCase() + field.slice(1);
        userInfo.innerHTML += `<p><strong>${label}:</strong> ${value}</p>`;
    });
});
