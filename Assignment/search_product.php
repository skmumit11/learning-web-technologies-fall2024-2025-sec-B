<!DOCTYPE html>
<html>
<head>
    <title>Search Product</title>
    <style>
        body { font-family: sans-serif; }
        .container { width: 400px; margin: 50px auto; } 
        fieldset { border: 1px solid #ccc; padding: 10px; margin: 0; }
        legend { font-weight: bold; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #000; padding: 8px; text-align: left; }
        th { background-color: #fff; }
        a { text-decoration: none; color: blue; }
        a:hover { text-decoration: underline; }
        .search-box { margin-bottom: 15px; border-bottom: 1px solid #ccc; padding-bottom: 15px; }
        input[type="text"] { width: 200px; padding: 5px; }
        button { padding: 5px 10px; cursor: pointer; }
    </style>
    <script>
        function searchProducts() {
            var name = document.getElementById("search_name").value;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("result_body").innerHTML = this.responseText;
                }
            };
            xhttp.open("POST", "get_products.php", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("name=" + name);
        }

        // Initial load
        window.onload = function() {
            searchProducts();
        };
    </script>
</head>
<body>

<div class="container">
    <fieldset>
        <legend>SEARCH</legend>
        
        <div class="search-box">
            <input type="text" id="search_name" onkeyup="searchProducts()" placeholder="Search by Name">
            <button type="button" onclick="searchProducts()">Search By Name</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PROFIT</th>
                    <th style="border: none; border-bottom: 1px solid #000; border-top: 1px solid #000;"></th>
                </tr>
            </thead>
            <tbody id="result_body">
                <!-- Results will be loaded here via AJAX -->
            </tbody>
        </table>
    </fieldset>
</div>

</body>
</html>
