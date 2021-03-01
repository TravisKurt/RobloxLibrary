var button = document.getElementById("btnSearch");

button.onclick = function () {
    var text = document.getElementById("textBoxEl").value;
    window.open("http://monkey=" + text + "&red");
}