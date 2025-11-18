function validateDOB() {
    let day = document.getElementById("day").value.trim();
    let month = document.getElementById("month").value.trim();
    let year = document.getElementById("year").value.trim();
    let msg = document.getElementById("msg");

    // Empty check
    if (!day || !month || !year) {
        msg.textContent = "All fields are required.";
        msg.style.color = "red";
        return;
    }

    // Convert to number
    day = Number(day);
    month = Number(month);
    year = Number(year);

    // Range check
    if (day < 1 || day > 31) {
        msg.textContent = "Day must be between 1 and 31.";
        msg.style.color = "red";
        return;
    }

    if (month < 1 || month > 12) {
        msg.textContent = "Month must be between 1 and 12.";
        msg.style.color = "red";
        return;
    }

    if (year < 1900 || year > 2016) {
        msg.textContent = "Year must be between 1900 and 2016.";
        msg.style.color = "red";
        return;
    }

    // Check days per month
    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day > daysInMonth[month - 1]) {
        msg.textContent = `This month has only ${daysInMonth[month - 1]} days.`;
        msg.style.color = "red";
        return;
    }

    // Valid date
    msg.textContent = "Valid Date of Birth!";
    msg.style.color = "green";
}

// Helper function
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
