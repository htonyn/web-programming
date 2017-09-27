<!DOCTYPE html>
<html lang="en">
<head>
    <title>PHP Forms - Tony Nguyen</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            text-align: center;
        }
        body {
            background-color: #5B81D4;
        }
        h1 {
            margin: 0;
        }
        .center {
            width: 80%;
            margin: 0 auto;
            height: 100%;
            background-color: #747474;
        }
        table {
            width: 50%;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="center">
        <h1>Homework 4</h1><hr>
        <div class="form">
            <form method="POST" action="assignment4.php">
                <table>
                    <tr>
                        <td>Text Color: </td>
                        <td>
                            <select id="textColor" name="select_text_color">
                                <option value="0">Black</option>
                                <option value="1">Red</option>
                                <option value="2">Green</option>
                                <option value="3">Blue</option>
                            </select>
                        </td>
                        <td>Font Family: </td>
                        <td>
                            <label for="font_family"></label>
                            <select id="fontFamily" name="select_font_family">
                                <option value="0">Times New Roman</option>
                                <option value="1">Georgia</option>
                                <option value="2">Impact</option>
                                <option value="3">Arial</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Font Size: </td>
                        <td>
                            <input type="text" name="fontSize"><br>
                        </td>
                        <td>Font Style: </td>
                        <td>
                            <select name="fontStyle[]" size="3" multiple> 
                                <option value="0">Bold
                                <option value="1">Underline 
                                <option value="2">Italics 
                            </select> 
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <textarea name="content" rows="4" cols="100%"></textarea>
                        </td>
                    </tr>
                </table>
                <input type="submit" name="send" value="Submit"/>
            </form>
            <hr>
        </div>
    
        <h1>Output Result</h1>
        <hr>

    <?php
    if(isset($_POST['send'])) {
        $textColor = $_POST['select_text_color'];
        $fontFamily = $_POST['select_font_family'];
        $fontSize = $_POST['fontSize'];
        $content = $_POST['content'];

        switch ($textColor) {
            case 0:
                $textColor = "black";
                break;
            case 1:
                $textColor = "red";
                break;
            case 2:
                $textColor = "green";
                break;
            case 3:
                $textColor = "blue";
                break;
            default:
                $textColor = "white";
                break;
        }
    
        switch ($fontFamily) {
            case 0:
                $fontFamily = "\"Times New Roman\", Times, serif";
                break;
            case 1:
                $fontFamily = "Georgia, serif";
                break;
            case 2:
                $fontFamily = "Impact, Charcoal, sans-serif";
                break;
            case 3:
                $fontFamily = "Arial, Helvetica, sans-serif";
                break;
            default:
                $fontFamily = "Tahoma, Geneva, sans-serif";
                break;
        }
     
        echo "<div id=\"content\" style=\"color: ".$textColor."; font-family: ".$fontFamily."; font-size: ".$fontSize."px\">";
        foreach ($_POST['fontStyle'] as $style) {
            if ($style == 0) {
                echo "<b>";
            } else if ($style == 1) {
                echo "<u>";
            } else if ($style == 2) {
                echo "<i>";
            }
        }
        if (is_null($content)) {
            echo "Output will be printed here...";
        } else {
            echo $content;
        }
        foreach ($_POST['fontStyle'] as $style) {
            if ($style == 0) {
                echo "</b>";
            } else if ($style == 1) {
                echo "</u>";
            } else if ($style == 2) {
                echo "</i>";
            }
        }
        echo "</div>";
    }

    
    ?>
    <hr>
    <a href="assignment4.txt">PHP Source Code - Assignment 4 Part 1</a>
    </div>
</body>
</html>