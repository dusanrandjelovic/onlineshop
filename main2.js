const ispisivanjeUkupno = document.getElementById("iznos");
const naruceno = document.getElementById("naruceno");
const ukupnacena = document.getElementById("ukupnacena");

ispisivanjeUkupno.innerText = localStorage.nesto;
ukupnacena.value = localStorage.nesto;

const prostor1n = document.getElementById("ispis1n");
const prostor2n = document.getElementById("ispis2n");
const prostor3n = document.getElementById("ispis3n");
const prostor4n = document.getElementById("ispis4n");

prostor1n.innerHTML = localStorage.novo;
prostor2n.innerHTML = localStorage.drugo;
prostor3n.innerHTML = localStorage.trece;
prostor4n.innerHTML = localStorage.cetvrto;
naruceno.value = localStorage.novo + localStorage.drugo + localStorage.trece + localStorage.cetvrto;
