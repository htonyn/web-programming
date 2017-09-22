<?php
echo "<title>PHP Exercise - Tony Nguyen</title>";
echo "<h1>Inclass Exercise - PHP</h1><hr>";
echo "<h2>Q1</h2>";

echo "<p><i>\"Good morning, Dave,\" said HAL.</i>";

echo "<h2>Q2</h2>";

$radius = 3;
$area = pi() * $radius * $radius;
echo "The area of a circle of radius ".$radius." is: ".$area;

echo "<h2>Q3</h2>";

$celFahr = 75.8;
function convertFahrToCelsius($fahr) {
    return (5/9)*($fahr-32);
}
echo "Temp on Sept 20th: ".$celFahr."°F or ".convertFahrToCelsius($celFahr);

echo "<h2>Q4</h2>";

$inputStr = "  PHP is fun  ";
$inputStr = trim($inputStr);
echo "String has ".strlen($inputStr)." characters.";

echo "<h2>Q5</h2>";

$input = "WDWWLWWWLDDWDLL";
// My user defined function
function stringOccurrence($stringInput, $pattern) {
    $pos = strpos($stringInput, $pattern);
    echo $pos;
    if ($pos) {
        return substr($stringInput, $pos+strlen($pattern),1);
    } else {
        return "N/A";
    }
}

echo "The first letter after WWW in ".$input." is ".stringOccurrence($input, "WWW");

// Without Function
$string = "SLKJFDSJLKFSDLKFSDLKJFWWWLSKDJGH";
$search = "WWW";
$letter = "N/A";
$www = strpos($string, $search);
if ($www) {
    $letter = substr($string, $www+strlen($search),1);
    $letter = substr($string, strlen($search)+1,1);
}
echo $letter;



echo "<h2>Q6</h2>";

function palindromeCheck($input) {
    $lower = strtolower($input);

    if($lower == strrev($lower)) {
        echo $input." is a palindrome.<br>";
    } else {
        echo $input." is NOT a palindrome.<br>";
    }
}
palindromeCheck("kayak");
palindromeCheck("Hannah");
palindromeCheck("Able was I ere I saw Elba");
palindromeCheck("Tacocat");
echo "<img height=250 width=250 alt=tacocat src=tacocat.png><br>";
palindromeCheck("racecar");
palindromeCheck("potato");


echo "<h2>Q7</h2>";

$num = 7;
if ($num%2==0) {
    echo $num." is even.";
} else {
    echo $num." is odd.";
}

echo "<h2>Q8</h2>";

$currYear = date("Y");
function leapYear($year) {
    echo "Current Year: ".$year."<br>";
    if ($year%100!=0 && $year%4==0 || $year%400==0) {
        return true;
    } else {
        return false;
    }
}
if (date("L")) {
    echo "<b>It is</b><br>";
} else {
    echo "<b>It isn't</b><br>";
}
// function is there if using the date's leap year isn't allowed
?>