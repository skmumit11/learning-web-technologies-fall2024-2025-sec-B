function validateDOB() {
    var day = document.getElementById("day").value.trim();
    var month = document.getElementById("month").value.trim();
    var year = document.getElementById("year").value.trim();
    var msg = document.getElementById("msg");

    console.log("Day:", day, "Month:", month, "Year:", year);

    // Rule 1: Cannot be empty
    if (day === "" || month === "" || year === "") {
        console.log("One or more fields are empty");
        msg.textContent = "All fields are required.";
        msg.style.color = "red";
        return;
    }

    // Convert to numbers
    day = parseInt(day, 10);
    month = parseInt(month, 10);
    year = parseInt(year, 10);

    // Rule 2: Validate ranges
    if (day < 1 || day > 31) {
        console.log("Invalid day");
        msg.textContent = "Day must be between 1 and 31.";
        msg.style.color = "red";
        return;
    }

    if (month < 1 || month > 12) {
        console.log("Invalid month");
        msg.textContent = "Month must be between 1 and 12.";
        msg.style.color = "red";
        return;
    }

    if (year < 1900 || year > 2016) {
        console.log("Invalid year");
        msg.textContent = "Year must be between 1900 and 2016.";
        msg.style.color = "red";
        return;
    }

    // Optional: Check day validity for specific months
    if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
        msg.textContent = "The selected month has only 30 days.";
        msg.style.color = "red";
        console.log("Invalid day for month");
        return;
    }

    if (month === 2) { // February
        var isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
        if ((isLeap && day > 29) || (!isLeap && day > 28)) {
            msg.textContent = "February has only " + (isLeap ? 29 : 28) + " days.";
            msg.style.color = "red";
            console.log("Invalid day for February");
            return;
        }
    }

    // Passed all checks
    msg.textContent = "Valid Date of Birth!";
    msg.style.color = "green";
    console.log("Date of Birth is valid:", day, month, year);
}
