<?php

if(isset($_POST['send'])) {
    $textColor = $_POST['select_text_color'];
    $fontFamily = $_POST['select_font_family'];
    $fontSize = $_POST['fontSize'];
    $content = $_POST['content'];
}

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

echo "<style>body { color: ".$textColor."; font-family: ".$fontFamily."; font-size: ".$fontSize."; } </style>";

echo "<div id=\"content\">"
foreach ($_POST['fontStyle'] as $style) {
    if ($style == 0) {
        echo "<b>";
    } else if ($style == 1) {
        echo "<u>";
    } else if ($style == 2) {
        echo "<i>";
    }
}
echo $content;
foreach ($_POST['fontStyle'] as $style) {
    if ($style == 0) {
        echo "</b>";
    } else if ($style == 1) {
        echo "</u>";
    } else if ($style == 2) {
        echo "</i>";
    }
}
echo "</div>"
?>