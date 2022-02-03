var count = 0;
function mehr() {
    const divi = document.createElement('div');
    divi.setAttribute("id", "fundu" + count)
    const h2 = document.createElement('p');
    const but = "<button onclick=delet(this) id=bu" + count + ">delete</button>";
    const haxt =  document.getElementById("text").value;
    const text = document.createTextNode(haxt);
    const print = document.getElementById('screen');
    divi.insertAdjacentHTML("beforeend", but);
    h2.appendChild(text);
    divi.appendChild(h2);
    print.appendChild(divi);
    count ++;
}

function delet() {
    console.log(this)
    /*close = closest()
    var parentDiv = this.parentNode;
    var id = parentDiv.getAttribute("id");
    console.log(id); */
}