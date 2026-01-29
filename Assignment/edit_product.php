<?php
require_once 'db_connect.php';

$message = "";
$id = "";
$name = "";
$buying_price = "";
$selling_price = "";
$display = 0;

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
        $display = $row['display'];
    } else {
        echo "Product not found";
        exit;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $buying_price = $_POST['buying_price'];
    $selling_price = $_POST['selling_price'];
    $display = isset($_POST['display']) ? 1 : 0;

    // Direct Query (Update)
    $sql = "UPDATE products SET name='$name', buying_price='$buying_price', selling_price='$selling_price', display='$display' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        $message = "Record updated successfully";
        // Update local variables to reflect changes in form
        // (Optional, or could redirect)
    } else {
        $message = "Error updating record: " . $conn->error;
    }
}
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Product</title>
    <style>
        body { font-family: sans-serif; }
        .container { width: 300px; border: 1px solid #ccc; padding: 20px; margin: 50px auto; }
        fieldset { border: 1px solid #ccc; padding: 10px; margin: 0; }
        legend { font-weight: bold; }
        label { display: block; margin-top: 10px; }
        input[type="text"] { width: 100%; box-sizing: border-box; }
        .checkbox-container { margin-top: 15px; border-top: 1px solid #ccc; padding-top: 10px; border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 10px;} 
        button { margin-top: 10px; }
    </style>
</head>
<body>

<div class="container">
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <fieldset>
            <legend>EDIT PRODUCT</legend>
            
            <input type="hidden" name="id" value="<?php echo $id; ?>">

            <label for="name">Name</label>
            <input type="text" id="name" name="name" value="<?php echo $name; ?>" required>

            <label for="buying_price">Buying Price</label>
            <input type="text" id="buying_price" name="buying_price" value="<?php echo $buying_price; ?>" required>

            <label for="selling_price">Selling Price</label>
            <input type="text" id="selling_price" name="selling_price" value="<?php echo $selling_price; ?>" required>

            <div class="checkbox-container">
                <input type="checkbox" id="display" name="display" <?php if($display == 1) echo "checked"; ?>>
                <label for="display" style="display:inline;">Display</label>
            </div>

            <button type="submit">SAVE</button>
        </fieldset>
    </form>
    <?php if ($message): ?>
        <p><?php echo $message; ?></p>
        <p><a href="display_products.php">Back to Display</a></p>
    <?php endif; ?>
</div>

</body>
</html>
