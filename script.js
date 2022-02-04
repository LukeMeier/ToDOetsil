const defaultHeaders = {"Content-Type": "application/json; charset=utf-8"}
const baseUrl = "http://localhost:3000"


function mehr() {
    const divi = document.createElement('div');
    const h2 = document.createElement('p');
    const but = "<button onclick=delet(this) class=del>delete</button>";
    const butter = "<button onclick=edit(this) class=edit>edit</button>";
    const haxt =  document.getElementById("text").value;
    const text = document.createTextNode(haxt);
    const print = document.getElementById('screen');
    h2.appendChild(text);
    divi.appendChild(h2);
    divi.insertAdjacentHTML("beforeend", but);
    divi.insertAdjacentHTML("beforeend", butter);
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
    let puting = "<input type=text placeholder=" + chili + " class=input>";
    let bubier = "<button onclick=save(this) class=save>save</button>";
    let del = child[1];
    console.log(child[2]);
    child[2].remove();
    child[0].remove();
    parent.insertAdjacentHTML("beforeend", puting);
    parent.appendChild(del);
    parent.insertAdjacentHTML("beforeend", bubier);
}

function save(element) {
    let papa = element.parentElement;
    console.log(papa)
    let child = papa.children;
    let ptag = document.createElement('p');
    let bedit = "<button onclick=edit(this) class=edit>edit</button>";
    let haxe = child[0].value;
    console.log(haxe);
    let texto = document.createTextNode(haxe);
    let del = child[1];
    child[2].remove();
    child[1].remove();
    child[0].remove();
    ptag.appendChild(texto);
    papa.appendChild(ptag);
    papa.appendChild(del);
    papa.insertAdjacentHTML("beforeend", bedit);

}
/* 
async function register() {
    const email = document.getElementById("input-email")
    const password = document.getElementById("input-password")
	try {
		const response = await fetch(`${baseUrl}/users`, {
			method: "POST",
			headers: defaultHeaders,
			body: JSON.stringify({ email: email.value, password: password.value })
		})
		if (response.ok) {
			console.log(await response.json())
		} else {
			throw new Error(await response.json())
		}
	} catch (error) {
		console.error(error)
	}
}

async function login() {
    const email = document.getElementById("input-email")
    const password = document.getElementById("input-password")
    console.log(email.value)
    console.log(password.value);
	try {
		const response = await fetch(`${baseUrl}/login`, {
			method: "POST",
			headers: defaultHeaders,
			body: JSON.stringify({ email: email.value, password: password.value })
		})
		if (response.ok) {
			setUser(await response.json())
		} else {
			throw new Error(await response.json())
		}
	}
	catch (error) {
		console.error(error)
	}
}
function setUser(auth) {
    console.log(auth);
    currentUser = auth.user
    currentUser.token = auth.accessToken;
    console.log(currentUser);
      // sessionStorage.setItem('currentUser', user ? JSON.stringify(currentUser) : null);
    if (currentUser) {
        document.body.classList.add('is-authenticated')
        document.body.classList.remove('is-unauthenticated')
        welcomeElement.innerText = `Hallo ${currentUser.email}`
    } else {
        document.body.classList.remove('is-authenticated')
        document.body.classList.add('is-unauthenticated')
        welcomeElement.innerText = ""
    }
}
*/
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
    if (pass == "akku" && mill == "zigel@zigel.zig") {
        Mail.remove();
        psw.remove();
        nabut.remove();
        screeno.insertAdjacentHTML("beforeend", loguhrt);
        pnam.appendChild(texti);
        screeno.appendChild(pnam);
    } else {
        alert("Falsch");
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