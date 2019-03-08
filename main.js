

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

    const kol5Input = Number(document.getElementById("kol5").value);
    const cena5Input = Number(document.getElementById("cena5").innerText);
    const kol6Input  = Number(document.getElementById("kol6").value);
    const cena6Input = Number(document.getElementById("cena6").innerText);
    const kol7Input  = Number(document.getElementById("kol7").value);
    const cena7Input  = Number(document.getElementById("cena7").innerText);
    const kol8Input  = Number(document.getElementById("kol8").value);
    const cena8Input  = Number(document.getElementById("cena8").innerText);

    const dugme = document.getElementById("dugme");
    const prostor = document.getElementById("prostor");

    cena = (kolic * cenat) + (kolici * cenata) + (kolicin * cenatar) + (kolicina * cenatara) +
     (kol5Input * cena5Input) + (kol6Input * cena6Input) + (kol7Input * cena7Input) + (kol8Input * cena8Input);
    prostor.innerHTML = cena + " RSD";
    localStorage.nesto = "Vaš račun je: " + cena + " RSD";
  }

  function nar1(){
    const kolic = Number(document.getElementById("kol1").value);
    const cenat = Number(document.getElementById("cena1").innerText);
    if(kolic > 0){
      const poruka1 = `Naručeno: Ženske farmerke, komada ${kolic}.<br>`
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
      const poruka1 = `Naručeno: Muške farmerke, komada ${kolici}.<br>`
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
      const poruka1 = `Naručeno: Sive patike, komada ${kolicin}.<br>`
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
      const poruka1 = `Naručeno: Plave patike, komada ${kolicina}.<br>`
      localStorage.cetvrto = poruka1;
    }
    else {
      const poruka2 = "";
      localStorage.cetvrto = poruka2;
    }
  }

  function nar5(){
    const kol5Input = Number(document.getElementById("kol5").value);
    const cena5Input = Number(document.getElementById("cena5").innerText);
    if(kol5Input > 0){
      const poruka1 = `Naručeno: Crna majica, komada ${kol5Input}.<br>`
      localStorage.peto = poruka1;
    }
    else {
      const poruka2 = "";
      localStorage.peto = poruka2;
    }
  }

  function nar6(){
    const kol6Input = Number(document.getElementById("kol6").value);
    const cena6Input = Number(document.getElementById("cena6").innerText);
    if(kol6Input > 0){
      const poruka1 = `Naručeno: Narukvica, komada ${kol6Input}.<br>`
      localStorage.sesto = poruka1;
    }
    else {
      const poruka2 = "";
      localStorage.sesto = poruka2;
    }
  }

  function nar7(){
    const kol7Input = Number(document.getElementById("kol7").value);
    const cena7Input = Number(document.getElementById("cena7").innerText);
    if(kol7Input > 0){
      const poruka1 = `Naručeno: Braon torba, komada ${kol7Input}.<br>`
      localStorage.sedmo = poruka1;
    }
    else {
      const poruka2 = "";
      localStorage.sedmo = poruka2;
    }
  }

  function nar8(){
    const kol8Input = Number(document.getElementById("kol8").value);
    const cena8Input = Number(document.getElementById("cena8").innerText);
    if(kol8Input > 0){
      const poruka1 = `Naručeno: Plave farmerice, komada ${kol8Input}.<br>`
      localStorage.osmo = poruka1;
    }
    else {
      const poruka2 = "";
      localStorage.osmo = poruka2;
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

    const kol5Input = Number(document.getElementById("kol5").value);
    const cena5Input = Number(document.getElementById("cena5").innerText);
    const kol6Input  = Number(document.getElementById("kol6").value);
    const cena6Input = Number(document.getElementById("cena6").innerText);
    const kol7Input  = Number(document.getElementById("kol7").value);
    const cena7Input  = Number(document.getElementById("cena7").innerText);
    const kol8Input  = Number(document.getElementById("kol8").value);
    const cena8Input  = Number(document.getElementById("cena8").innerText);

    const proizvodi = document.getElementById("proizvodi");
    proizvodi.innerHTML = kolic + kolici + kolicin + kolicina + kol5Input + kol6Input +
     kol7Input + kol8Input;
  }
  //dugme.addEventListener("click", sabiranje);  na dugme racun, ovde dole mora sam id, a ne naziv konstante za input

  kol1.addEventListener("input", sabiranje)
  kol2.addEventListener("input", sabiranje)
  kol3.addEventListener("input", sabiranje)
  kol4.addEventListener("input", sabiranje)
  kol5.addEventListener("input", sabiranje)
  kol6.addEventListener("input", sabiranje)
  kol7.addEventListener("input", sabiranje)
  kol8.addEventListener("input", sabiranje)

  kol1.addEventListener("input", nar1)
  kol2.addEventListener("input", nar2)
  kol3.addEventListener("input", nar3)
  kol4.addEventListener("input", nar4)
  kol5.addEventListener("input", nar5)
  kol6.addEventListener("input", nar6)
  kol7.addEventListener("input", nar7)
  kol8.addEventListener("input", nar8)

  kol1.addEventListener("input", korpa)
  kol2.addEventListener("input", korpa)
  kol3.addEventListener("input", korpa)
  kol4.addEventListener("input", korpa)
  kol5.addEventListener("input", korpa)
  kol6.addEventListener("input", korpa)
  kol7.addEventListener("input", korpa)
  kol8.addEventListener("input", korpa)

  sabiranje()
  korpa()
  nar1()
  nar2()
  nar3()
  nar4()
  nar5()
  nar6()
  nar7()
  nar8()
  //sredjivanje forme

  /*function e(){

  }*/
