function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            generateHtml(this);
        }
    };
    xhttp.open("GET", "action.xml", true);
    xhttp.send();
}
function generateHtml(xml) {
    var xml = xml.responseXML;
    var titles = `<p>${xml.querySelector("Titre").childNodes[0].nodeValue}</p>`;
    document.getElementById("demo").innerHTML = titles;

    var ref = "6414271";
    var taille = "006";
    var variants = xml.querySelectorAll("Variant");
    [...variants].forEach(current => {
        if(
            current.querySelector('Reference').childNodes[0].nodeValue === ref &&
            current.querySelector('TaillePres').childNodes[0].nodeValue === taille
        ){
            console.log(current.querySelector('TauxDemarque').childNodes[0].nodeValue*1);
        }
    })
}
loadDoc();