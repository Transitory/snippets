function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
}
function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th><th>Artist</th></tr>";
    var y = xmlDoc.getElementsByTagName("CD");
    [...y].forEach(current => {
        table += "<tr><td>" +
        current.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        current.getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td></tr>";
    });
    document.getElementById("demo").innerHTML = table;
}
loadDoc();