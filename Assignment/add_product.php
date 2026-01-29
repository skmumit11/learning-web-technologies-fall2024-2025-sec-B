<!DOCTYPE html>
<html>
<head>
    <title>Add Product</title>
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
    <form method="post" action="product_controller.php">
        <fieldset>
            <legend>ADD PRODUCT</legend>
            <input type="hidden" name="action" value="add">
            
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>

            <label for="buying_price">Buying Price</label>
            <input type="text" id="buying_price" name="buying_price" required>

            <label for="selling_price">Selling Price</label>
            <input type="text" id="selling_price" name="selling_price" required>

            <div class="checkbox-container">
                <input type="checkbox" id="display" name="display">
                <label for="display" style="display:inline;">Display</label>
            </div>

            <button type="submit">SAVE</button>
            <!-- Add an extra button to go to display_products.php -->
            <button type="button" onclick="window.location.href='display_products.php'">Display</button>
        </fieldset>
    </form>
</div>

</body>
</html>
