<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = file_get_contents('setup.sql');

if ($conn->multi_query($sql)) {
    echo "Database setup completed successfully.";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
?>
