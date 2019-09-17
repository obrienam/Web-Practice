document.body.onload = addElement;
function addElement () {
    let b = document.getElementById("body")
    let x = document.createElement("footer");
    x.setAttribute("id", "foot");
    let y = document.getElementById("title")
    let t = document.createTextNode("Website For Testing Javascript");
    y.appendChild(t)
    document.body.insertBefore(x,b);
    document.body.insertBefore(y,b);
    let footext1="Link To Github\t";
    let footext2="Facebook\t";
    let footext3="Twitter\t";
    let flink1 = footext1.link("https://github.com/obrienam/Web-Practice")
    let flink2 = footext2.link("https://www.facebook.com/aidan.obrien.77?ref=bookmarks")
    let flink3 = footext3.link("https://twitter.com/Aidan_OBrien325")
    document.getElementById("column1").innerHTML = `${flink1}`;
    document.getElementById("column2").innerHTML = `${flink2}`;
    document.getElementById("column3").innerHTML = `${flink3}`;
    document.getElementsByTagName("h1").innerHTML = "<div>" + "Body!" + "</div>";
    let cont = document.innerHTML;
    console.log(cont)
}
function buttFunction() {
    let x = document.getElementById("pic");
    x.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/000/090/513/non_2x/vector-comic-style-surprise-illustration.jpg")
}
