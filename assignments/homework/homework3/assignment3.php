<?php
$name = array("pete", "QQ or GG", "JJ");

function isBitten() {
    $random = rand(0, 100);
    if ($random > 50) {
        echo "Charlie ate my lunch!<br>";
    } else {
        echo "Charlie did not eat my lunch!<br>";
    }
}

isBitten();

echo "<table width=300px border=1>";
for ($i = 0; $i < 8; $i++) {
    echo "<tr>";
    $starter = 0;
    $toggle = 0;
    for ($j = 0; $j < 8; $j++) {
        if ($toggle%2==0) {
            echo "<td style='background-color: black'>Yes</td>";
        } else {
            echo "<td style='background-color: red'>Yes</td>";
        }
        $toggle++;
    }
    echo "</tr>";
}
echo "</table>";

echo $name[0]."This is cancer";

?>