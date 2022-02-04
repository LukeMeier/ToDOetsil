var count = 0;

function mehr() {
    const divi = document.createElement('div');
    const h2 = document.createElement('p');
    const but = "<button onclick=delet(this)>delete</button>";
    const butter = "<button onclick=edit(this)>edit</button>";
    const haxt =  document.getElementById("text").value;
    const text = document.createTextNode(haxt);
    const print = document.getElementById('screen');
    divi.insertAdjacentHTML("beforeend", but);
    divi.insertAdjacentHTML("beforeend", butter);
    h2.appendChild(text);
    divi.appendChild(h2);
    print.appendChild(divi);
}

function delet(element) {
    console.log(element);
    let parent = element.parentElement;
    console.log(parent);
    parent.remove();
}

function edit(element) {
    let parent = element.parentElement;
    console.log(parent)
    let child = parent.children;
    let chili = parent.getElementsByTagName('p')[0].innerHTML;
    console.log(chili);
    let puting = "<input type=text placeholder=" + chili + ">";
    let bubier = "<button onclick=save(this)>save</button>";
    console.log(child[2]);
    child[2].remove();
    child[1].remove();
    parent.insertAdjacentHTML("beforeend", bubier);
    parent.insertAdjacentHTML("beforeend", puting);
}

function save(element) {
    let papa = element.parentElement;
    console.log(papa)
    let child = papa.children;
    let ptag = document.createElement('p');
    let bedit = "<button onclick=edit(this)>edit</button>";
    let haxe = child[2].value;
    console.log(haxe);
    let texto = document.createTextNode(haxe);
    child[2].remove();
    child[1].remove();
    papa.insertAdjacentHTML("beforeend", bedit);
    ptag.appendChild(texto);
    papa.appendChild(ptag);
}

function anmelden() {
    let Mail = "<input type=text placeholder=EMAIL id=mail>";
    let psw = "<input type=password placeholder=Passwort id=psw>";
    let abut = document.getElementById('anu');
    let nabut = "<button onclick=melden() id=meldo>Anmelden</button>";
    let screeno = document.getElementById('Menu');
    screeno.insertAdjacentHTML("beforeend", Mail);
    screeno.insertAdjacentHTML("beforeend", psw);
    abut.remove();
    screeno.insertAdjacentHTML("beforeend", nabut);
}
function melden() {
    let Mail =document.getElementById('mail');
    let mill = Mail.value;
    let psw = document.getElementById('psw');
    let pass = psw.value;
    let screeno = document.getElementById('Menu');
    let nabut = document.getElementById('meldo');
    let loguhrt = "<button onclick=logout() id=logout>Logout</button>";
    let pnam = document.createElement('p');
    pnam.setAttribute("id", "malus")
    let texti = document.createTextNode(mill);
    let falsch = document.createElement('p');
    falsch.setAttribute("id", "falsch");
    let faltsch = document.getElementById('falsch');
    let falschi = document.createTextNode("falsch");
    if (pass == "akku" && mill == "zigel@zigel.zig") {
        Mail.remove();
        psw.remove();
        nabut.remove();
        screeno.insertAdjacentHTML("beforeend", loguhrt);
        pnam.appendChild(texti);
        screeno.appendChild(pnam);
        faltsch.remove();
    } else {
        falsch.appendChild(falschi);
        screeno.appendChild(falsch);
    }
}

function logout() {
    let abut = "<button onclick=anmelden() id=anu>Anmelden</button>";
    let loguhrt = document.getElementById("logout");
    let pnam = document.getElementById("malus");
    let screeno = document.getElementById("Menu");
    loguhrt.remove();
    pnam.remove();
    screeno.insertAdjacentHTML("beforeend", abut);
}