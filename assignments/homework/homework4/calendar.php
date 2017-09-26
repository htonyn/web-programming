<html>
<head>
    <link rel="stylesheet" href="calendar.css">
</head>
<body>
    <h1>Calendar</h1>
    <div class="container">
        <div class="date">
            <?php
                $date = date('m/d/Y h:i:s a', time());
                echo "<h2>".$date."</h2>";
            ?>
        </div>
        <form method="POST" action="calendar.php">
            Hours to Display: 
            <select id="hoursShown" name="select_hours">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12" selected>12</option>
            </select>
            <input type="submit" name="send" value="Submit"/>
        </form>
        <br>
        <?php
        if(isset($_POST['send'])) {
            $hours_to_show = $_POST['select_hours'];
        }
        $people = array("John", "Not John", "Also John");

        echo "<table id=\"event_table\" border=\"1px solid black\"><tr class=\"table_header\"><th></th>";
        for($i = 0; $i < sizeof($people); $i++) {
            echo "<th>".$people[$i]."</th>";
        }
        if (is_null($hours_to_show)) {
            $hours_to_show = 12;
        }
        echo "</tr>";
        for($i = 0; $i <= $hours_to_show; $i++) {
            echo "<tr><td>";
            $hour = date("H");
            $a = date("A");
            if ($hour+$i>12) {
                $hour-=12;
                if ($a=="AM") {
                    $a = "PM";
                } else {
                    $a = "AM";
                }
            }
            echo ($hour+$i).":00".$a;
            echo "</td>";
            for($j = 0; $j < sizeof($people); $j++) {
                echo "<td></td>";
            }
            echo "</tr>";
        }
        echo "</table>";
        ?>
    </div>
    <a href="calendar.txt">Source Code</a>
</body>