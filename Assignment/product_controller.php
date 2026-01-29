<?php
require_once 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST['action'];

    if ($action == 'add') {
        $name = $_POST['name'];
        $buying_price = $_POST['buying_price'];
        $selling_price = $_POST['selling_price'];
        $display = isset($_POST['display']) ? 1 : 0;

        $sql = "INSERT INTO products (name, buying_price, selling_price, display) VALUES ('$name', '$buying_price', '$selling_price', '$display')";

        if ($conn->query($sql) === TRUE) {
            header("Location: display_products.php");
            exit();
        } else {
            echo "Error: " . $conn->error;
        }

    } elseif ($action == 'edit') {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $buying_price = $_POST['buying_price'];
        $selling_price = $_POST['selling_price'];
        $display = isset($_POST['display']) ? 1 : 0;

        $sql = "UPDATE products SET name='$name', buying_price='$buying_price', selling_price='$selling_price', display='$display' WHERE id='$id'";

        if ($conn->query($sql) === TRUE) {
             header("Location: display_products.php");
             exit();
        } else {
            echo "Error updating record: " . $conn->error;
        }

    } elseif ($action == 'delete') {
        $id = $_POST['id'];

        $sql = "DELETE FROM products WHERE id='$id'";

        if ($conn->query($sql) === TRUE) {
             header("Location: display_products.php");
             exit();
        } else {
            echo "Error deleting record: " . $conn->error;
        }
    }
}
$conn->close();
?>
