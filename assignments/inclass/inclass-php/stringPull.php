<?php

    $string="lhenry@gsu.edu.com<br>";
    echo "String is ".$string;
    $pos = strpos($string, "@");
    echo "Username is: ".substr($string, 0, $pos);

?>