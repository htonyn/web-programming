<html>
<head>
    
</head>
<body>
    <div class="who-am-i">
        
        <form action="inclass2.php" method="post">            
            <select id="prefix" name="select_prefix">
                <option value="0">Mr.</option>
                <option value="1">Mrs.</option>
                <option value="2">Ms.</option>
                <option value="3">Prof.</option>
                <option value="4">Dr.</option>
            </select><br><br>

            First Name: <input type="text" name="input_first_name"><br>
            Last Name: <input type="text" name="input_last_name"><br>
            Address: <input type="text" name="input_address"><br>
            Year of Birth: <input type="text" name="input_year"><br>
            <input type="submit" name="send" value="Submit"/><br>
            
        </form>

        <?php
        if(isset($_POST['send'])) {
            $first_name = $_POST['input_first_name'];
            $last_name = $_POST['input_last_name'];
            $address = $_POST['input_address'];
            $prefix = $_POST['select_prefix'];
            $yob = $_POST['input_year'];

            switch ($prefix) {
                case 0:
                    $prefix = "Mr.";
                    break;
                case 1:
                    $prefix = "Mrs.";
                    break;
                case 2:
                    $prefix = "Ms.";
                    break;
                case 3:
                    $prefix = "Prof.";
                    break;
                case 4:
                    $prefix = "Dr.";
                    break;
                default:
                    $prefix = "non-human";
                    break;
            }
    
            $year = date("Y") - $yob;
            
    
            echo "Hello, ".$prefix." ".$first_name." ".$last_name." of ".$address."<br>";
    
            echo "You are ".$year." years old this year.";
        }
        ?>
    </div>
</body>
</html>


