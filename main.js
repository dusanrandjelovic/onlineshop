/*const kol1 = Number(document.getElementById("kol1").value);
const kol2 = Number(document.getElementById("kol2").value);
const kol3 = Number(document.getElementById("kol3").value);
const kol4 = Number(document.getElementById("kol4").value);*/

//const cene = document.querySelectorAll(".cena");


//const kolicine = document.querySelectorAll("td:nth-child(4)");

//let ukupno = document.getElementById("ukupno");



//ukupno = kol1.value * cena1 + kol2.value * cena2 + kol3.value * cena3 + kol4.value * cena4;


/*function mnozenje(){
  let zbir1 = 1;
  const kolic = Number(document.getElementById("kol1").value);
  const cenat = Number(document.getElementById("cena1").innerText);
  const dugme = document.getElementById("dugme");
  const prostori = document.getElementById("prostor");
  zbir1 = kolic * cenat;
  prostor.innerHTML = "Racun je: " + zbir;
}*/

  /*function mnozenje(){
    let zbir2 = 1;
    const kolici = Number(document.getElementById("kol2").value);
    const cenata = Number(document.getElementById("cena2").innerText);
    zbir2 = kolici * cenata;
  }*/

  function sabiranje(){
    let cena = 0;
    const kolic = Number(document.getElementById("kol1").value);
    const cenat = Number(document.getElementById("cena1").innerText);
    const kolici = Number(document.getElementById("kol2").value);
    const cenata = Number(document.getElementById("cena2").innerText);
    const kolicin = Number(document.getElementById("kol3").value);
    const cenatar = Number(document.getElementById("cena3").innerText);
    const kolicina = Number(document.getElementById("kol4").value);
    const cenatara = Number(document.getElementById("cena4").innerText);
    const dugme = document.getElementById("dugme");
    const prostor = document.getElementById("prostor");

    cena = (kolic * cenat) + (kolici * cenata) + (kolicin * cenatar) + (kolicina * cenatara);
    prostor.innerHTML = cena + " RSD";
    localStorage.nesto = "Vaš račun je: " + cena + " RSD";
  }

  function nar1(){
    const kolic = Number(document.getElementById("kol1").value);
    const cenat = Number(document.getElementById("cena1").innerText);
    if(kolic > 0){
      const poruka1 = `Naručeno: Majica po ceni od ${cenat} RSD, komada ${kolic}.`
      localStorage.novo = poruka1;
    }
    else {
        const poruka2 = "";
        localStorage.novo = poruka2;
    }
  }


  function nar2(){
    const kolici = Number(document.getElementById("kol2").value);
    const cenata = Number(document.getElementById("cena2").innerText);
    if(kolici > 0){
      const poruka1 = `<br>Naručeno: Džemper po ceni od ${cenata} RSD, komada ${kolici}.`
      localStorage.drugo = poruka1;
    }
    else {
        const poruka2 = "";
        localStorage.drugo = poruka2;
    }
  }

  function nar3(){
    const kolicin = Number(document.getElementById("kol3").value);
    const cenatar = Number(document.getElementById("cena3").innerText);
    if(kolicin > 0){
      const poruka1 = `<br>Naručeno: Košulja po ceni od ${cenatar} RSD, komada ${kolicin}.`
      localStorage.trece = poruka1;
    }
    else {
      const poruka2 = "";
      localStorage.trece = poruka2;
    }
  }

  function nar4(){
    const kolicina = Number(document.getElementById("kol4").value);
    const cenatara = Number(document.getElementById("cena4").innerText);
    if(kolicina > 0){
      const poruka1 = `<br>Naručeno: Farmerice po ceni od ${cenatara} RSD, komada ${kolicina}.`
      localStorage.cetvrto = poruka1;
    }
    else {
      const poruka2 = "";
      localStorage.cetvrto = poruka2;
    }
  }

  function korpa(){
    const kolic = Number(document.getElementById("kol1").value);
    const cenat = Number(document.getElementById("cena1").innerText);
    const kolici = Number(document.getElementById("kol2").value);
    const cenata = Number(document.getElementById("cena2").innerText);
    const kolicin = Number(document.getElementById("kol3").value);
    const cenatar = Number(document.getElementById("cena3").innerText);
    const kolicina = Number(document.getElementById("kol4").value);
    const cenatara = Number(document.getElementById("cena4").innerText);
    const proizvodi = document.getElementById("proizvodi");
    proizvodi.innerHTML = kolic + kolici + kolicin + kolicina;
  }
  //dugme.addEventListener("click", sabiranje);  na dugme racun, ovde dole mora sam id, a ne naziv konstante za input

  kol1.addEventListener("input", sabiranje)
  kol2.addEventListener("input", sabiranje)
  kol3.addEventListener("input", sabiranje)
  kol4.addEventListener("input", sabiranje)

  kol1.addEventListener("input", nar1)
  kol2.addEventListener("input", nar2)
  kol3.addEventListener("input", nar3)
  kol4.addEventListener("input", nar4)

  kol1.addEventListener("input", korpa)
  kol2.addEventListener("input", korpa)
  kol3.addEventListener("input", korpa)
  kol4.addEventListener("input", korpa)

  sabiranje()
  korpa()
  nar1()
  nar2()
  nar3()
  nar4()
  //sredjivanje forme

  /*function e(){

  }*/
