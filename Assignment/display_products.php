<?php
require_once 'db_connect.php';

$sql = "SELECT * FROM products WHERE display = 1";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Display Products</title>
    <style>
        body { font-family: sans-serif; }
        .container { width: 400px; margin: 50px auto; } 
        fieldset { border: 1px solid #ccc; padding: 10px; margin: 0; }
        legend { font-weight: bold; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #000; padding: 8px; text-align: left; }
        th { background-color: #fff; } /* Match screenshot simple look */
        a { text-decoration: none; color: blue; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>

<div class="container">
    <fieldset>
        <legend>DISPLAY</legend>
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PROFIT</th>
                    <th style="border: none; border-bottom: 1px solid #000; border-top: 1px solid #000;"></th> <!-- Empty header for actions -->
                </tr>
            </thead>
            <tbody>
                <?php
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
                    echo "<tr><td colspan='3'>No products to display</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </fieldset>
</div>

</body>
</html>
<?php
$conn->close();
?>
