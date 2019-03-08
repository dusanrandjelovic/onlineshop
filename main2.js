const ispisivanjeUkupno = document.getElementById("iznos");
const naruceno = document.getElementById("naruceno");
const ukupnacena = document.getElementById("ukupnacena");

ispisivanjeUkupno.innerText = localStorage.nesto;
ukupnacena.value = localStorage.nesto;

const prostor1n = document.getElementById("ispis1n");
const prostor2n = document.getElementById("ispis2n");
const prostor3n = document.getElementById("ispis3n");
const prostor4n = document.getElementById("ispis4n");
const prostor5n = document.getElementById("ispis5n");
const prostor6n = document.getElementById("ispis6n");
const prostor7n = document.getElementById("ispis7n");
const prostor8n = document.getElementById("ispis8n");

prostor1n.innerHTML = localStorage.novo;
prostor2n.innerHTML = localStorage.drugo;
prostor3n.innerHTML = localStorage.trece;
prostor4n.innerHTML = localStorage.cetvrto;
prostor5n.innerHTML = localStorage.peto;
prostor6n.innerHTML = localStorage.sesto;
prostor7n.innerHTML = localStorage.sedmo;
prostor8n.innerHTML = localStorage.osmo;
naruceno.value = localStorage.novo + localStorage.drugo + localStorage.trece + localStorage.cetvrto + localStorage.peto + localStorage.sesto + localStorage.sedmo + localStorage.osmo;
