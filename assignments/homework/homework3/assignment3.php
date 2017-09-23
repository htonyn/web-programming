<html>
<head>
<style>
    .checkerboard {
        height: 35px;
        width: 35px;
    }
</style>
</head>

<?php
echo "<h1>Part 1</h1>";
function isBitten() {
    $random = rand(0, 100);
    if ($random > 50) {
        echo "Charlie ate my lunch!<br>";
    } else {
        echo "Charlie did not eat my lunch!<br>";
    }
}
isBitten();

echo "<h1>Part 2</h1>";
echo "<table width=\"300px\" border=\"1\" cellspacing=\"1px\" cellpadding=\"1px\">";
$toggle = 0;
for ($i = 0; $i < 8; $i++) {
    echo "<tr>";
    for ($j = 0; $j < 8; $j++) {
        if ($toggle%2==0) {
            echo "<td class=\"checkerboard\" bgcolor=\"black\"></td>";
        } else {
            echo "<td class=\"checkerboard\" bgcolor=\"red\"></td>";
        }
        $toggle++;
    }
    $toggle--;
    echo "</tr>";
}
echo "</table>";

echo "<h1>Part 3</h1>";
$month = array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
$sortedMonth = $month;
echo "Chronological<hr>";
for ($i = 0; $i < sizeof($month); $i++) {
    echo $month[$i]."<br>";
}
sort($sortedMonth, SORT_REGULAR);
echo "<br>Alphabetical<hr>";
for ($i = 0; $i < sizeof($sortedMonth); $i++) {
    echo $sortedMonth[$i]."<br>";
}
echo "<br>Foreach<hr>";
foreach ($month as $entry) {
    echo $entry."<br>";
}
echo "<br>Foreach Sorted<hr>";
foreach ($sortedMonth as $entry) {
    echo $entry."<br>";
}

echo "<h1>Part 4</h1>";

$restaurants = array(
    array('place' => 'Chama Gaucha', 'price' => '40.50'),
    array('place' => 'Aviva by Kameel', 'price' => '15.00'),
    array('place' => 'Bone\'s Restaurant', 'price' => '65.00'),
    array('place' => 'Umi Sushi Buckhead', 'price' => '40.50'),
    array('place' => 'Fandangles', 'price' => '30.00'),
    array('place' => 'Capital Grille', 'price' => '60.50'),
    array('place' => 'Canoe', 'price' => '35.50'),
    array('place' => 'One Flew South', 'price' => '21.00'),
    array('place' => 'Fox Bros. BBQ', 'price' => '15.00'),
    array('place' => 'South City Kitchen Midtown', 'price' => '29.00'),
);

function printMultiDimensional($multiDimensional) {
    echo "<table border=\"1\" cellspacing=\"1\">";
    foreach ($multiDimensional as $array) {
        echo "<tr>";
        foreach ($array as $entry) {
            echo "<td>".$entry."</td>";
        }
        echo "</tr>";
    }
    echo "</table><br>";
}

printMultiDimensional($restaurants);

function printSorted($multiArray, $type) {
    $sort = array();
    foreach ($multiArray as $key => $row) {
        $sort['place'][$key] = $row['place'];
        $sort['price'][$key] = $row['price'];
    }
    if ($type==1) {
        echo "Printing Alphabetically<hr>";
        sort($multiArray);
    } else if (!$type){
        echo "Printing By Lowest Price<hr>";
        array_multisort($sort['price'], SORT_ASC, $sort['place'], SORT_ASC, $multiArray);
    } else {
        echo "Invalid sort value.<hr>";
    }
    echo "<table border=\"1\" cellspacing=\"1\">";
    foreach ($multiArray as $key => $row) {
        echo "<tr>";
        foreach ($row as $item) {
            echo "<td>".$item."</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
    echo "<br>";
}
printSorted($restaurants, 0);
printSorted($restaurants, 1);
?>
</body>
</html>