function tabSwap(tabName, contentSet) {
    $('#'+contentSet).children().hide();
    $('#'+tabName).show();
}

function test() {
    document.getElementById('part-c').innerHTML = "Potato";
}