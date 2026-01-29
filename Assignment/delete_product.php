<?php
require_once 'db_connect.php';

$message = "";
$id = "";
$name = "";
$buying_price = "";
$selling_price = "";
$displayable = "";

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    // Direct Query
    $sql = "SELECT * FROM products WHERE id = '$id'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $name = $row['name'];
        $buying_price = $row['buying_price'];
        $selling_price = $row['selling_price'];
        $displayable = ($row['display'] == 1) ? "Yes" : "No";
    } else {
        echo "Product not found";
        exit;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Logic moved to product_controller.php
}
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Delete Product</title>
    <style>
        body { font-family: sans-serif; }
        .container { width: 300px; border: 1px solid #ccc; padding: 20px; margin: 50px auto; }
        fieldset { border: 1px solid #ccc; padding: 10px; margin: 0; }
        legend { font-weight: bold; }
        .label { font-weight: normal; } /* Mimic the look in screenshot */
        button { margin-top: 10px; }
    </style>
</head>
<body>

<div class="container">
    <?php if ($name): ?>
        <form method="post" action="product_controller.php">
            <fieldset>
                <legend>DELETE PRODUCT</legend>
                <input type="hidden" name="action" value="delete">
                
                <input type="hidden" name="id" value="<?php echo $id; ?>">

                <div style="margin-bottom: 5px;">Name: <?php echo $name; ?></div>
                <div style="margin-bottom: 5px;">Buying Price: <?php echo $buying_price; ?></div>
                <div style="margin-bottom: 5px;">Selling Price: <?php echo $selling_price; ?></div>
                <div style="margin-bottom: 15px;">Displayable: <?php echo $displayable; ?></div>
                
                <hr style="border: 0; border-top: 1px solid #ccc; margin-bottom: 10px;">

                <button type="submit">Delete</button>
            </fieldset>
        </form>
    <?php endif; ?>
</div>

</body>
</html>
