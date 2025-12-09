<?php
//1
// calculate area and perimeter of a rectangle
function calculateRectangle($length, $width) {
    
    $area = $length * $width;
    $perimeter = 2 * ($length + $width);

    echo "Area of the rectangle: " . $area . "<br>";
    echo "Perimeter of the rectangle: " . $perimeter . "<br>";
}
?>
<?php
//2
//calculate VAT (15%) on an amount
function calculateVAT($amount) {
    $vat = $amount * 0.15;
    echo "VAT (15%) over the amount: " . $vat . "<br>";
}
?>
<?php
//3
//check if a number is odd or even
function checkOddEven($number) {
    
    if ($number % 2 == 0) {
        echo $number . " is an Even number.<br>";
    } else {
        echo $number . " is an Odd number.<br>";
    }
}
?>
<?php
//4
//find the largest of three numbers
function findLargestNumber($num1, $num2, $num3) {
    if ($num1 >= $num2 && $num1 >= $num3) {
        echo $num1 . " is the largest number.<br>";
    } elseif ($num2 >= $num1 && $num2 >= $num3) {
        echo $num2 . " is the largest number.<br>";
    } else {
        echo $num3 . " is the largest number.<br>";
    }
}
?>
<?php
//5
//print all odd numbers between 10 and 100
function printOddNumbers($num_1,$num_2) {
    $num_1=10;
    $num_2=100;
    for ($i = $num_1; $i <= $num_2; $i++) {
        if ($i % 2 != 0) {
            echo $i . " ";
        }
    }
    echo "<br>";
}
?>
<?php
//6
// Function to search an element in an array
function searchElement($array, $element) {
    $found = false;
    foreach ($array as $item) {
        if ($item == $element) {
            $found = true;
            break;
        }
    }


    if ($found) {
        echo "Element " . $element . " found in the array.<br>";
    } else {
        echo "Element " . $element . " not found in the array.<br>";
    }
}
?>
<?php
//7
//print various shapes
function printShapes() {
    for ($i = 1; $i <= 3; $i++) {
        for ($j = 1; $j <= $i; $j++) {
            echo "* ";
        }
        echo "<br>";
    }

    for ($i = 1; $i <= 3; $i++) {
        for ($j = 1; $j <= $i; $j++) {
            echo $j . " ";
        }
        echo "<br>";
    }

    $char = 'A';
    for ($i = 1; $i <= 3; $i++) {
        for ($j = 1; $j <= $i; $j++) {
            echo $char . " ";
            $char++;
        }
        echo "<br>";
    }
}
?>
<?php
//8
//print shapes from a 2D array
function print2DArrayShapes() {
    $array = [
        [1, 2, 3, 'A'],
        [1, 2, 'B', 'C'],
        [1, 'D', 'E', 'F']
    ];

    for ($i = 0; $i < count($array); $i++) {
        for ($j = 0; $j < count($array[$i]); $j++) {
            if(is_numeric($array[$i][$j])){
                echo $array[$i][$j];
            }       
        }
        //echo "";
        echo "<br>";
    }
    for ($i = 0; $i < count($array); $i++) {
        for ($j = 0; $j < count($array[$i]); $j++) {
            if(is_string($array[$i][$j])){
                echo $array[$i][$j];
            }       
        }
        //echo "";
        echo "<br>";
    }
}


?>

<?php
//1: Rectangle Area and Perimeter
echo "<h3>Task 1: Calculate Rectangle Area and Perimeter</h3>";
calculateRectangle(10, 5);

//2: Calculate VAT
echo "<h3>Task 2: Calculate VAT</h3>";
calculateVAT(1000);

//3: Odd or Even
echo "<h3>Task 3: Check Odd or Even</h3>";
checkOddEven(25);

//4: Find Largest Number
echo "<h3>Task 4: Find Largest Number</h3>";
findLargestNumber(10, 20, 15);

//5: Print Odd Numbers between 10 and 100
echo "<h3>Task 5: Print Odd Numbers between 10 and 100</h3>";
printOddNumbers(10,100);

//6: Search Element in Array
echo "<h3>Task 6: Search Element in Array</h3>";
$array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
searchElement($array, 5);

//7: Print Shapes
echo "<h3>Task 7: Print Shapes</h3>";
printShapes();

//8: Print Shapes from 2D Array
echo "<h3>Task 8: Print Shapes from 2D Array</h3>";
print2DArrayShapes();
?>


