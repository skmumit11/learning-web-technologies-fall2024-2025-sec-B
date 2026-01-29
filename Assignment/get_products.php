<?php
require_once 'db_connect.php';

$name = "";
if (isset($_POST['name'])) {
    $name = $_POST['name'];
}

$sql = "SELECT * FROM products WHERE name LIKE '%$name%' AND display = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $profit = $row['selling_price'] - $row['buying_price'];
        echo "<tr>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $profit . "</td>";
        echo "<td>";
        echo "<a href='edit_product.php?id=" . $row['id'] . "'>edit</a> | ";
        echo "<a href='delete_product.php?id=" . $row['id'] . "'>delete</a>";
        echo "</td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='3'>No products found</td></tr>";
}

$conn->close();
?>
