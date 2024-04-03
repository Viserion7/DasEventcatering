

// aufgrund von inddividualiesirung kein ergebnis aber wir anterote gerne zurück
//alle DOM Elemente
const DOMElemente = {
  //slider
  slider: {
    personen: document.getElementById("personen"),
    dauerDerVeranstaltung: document.getElementById("dauerDerVeranstaltung"),
    sektPersonen: document.getElementById("sektPersonen"),
  },
  bloecke: {
    //ganze blöcke
    sektPersonenBlock: document.getElementById("sektPersonenBlock"),
  },
  //plain inputs
  plainInputs: {
    name: document.getElementById("name"),
    datumDerVeranstaltung: document.getElementById("datumDerVeranstaltung"),
    ortDerVeranstaltung: document.getElementById("ortDerVeranstaltung"), //-2..
    lastSonstNochWuensche: document.getElementById("lastSonstNochWuensche"), //-2..
    buffetIndividuellInput: document.getElementById("buffetIndividuellInput"),
    menueIndividuellInput: document.getElementById("menueIndividuellInput")
  },
  //options
  options: {
    //PAKETE Group
    Paket: document.getElementsByName("Paket"),

    //pakete
    paketBuffet: document.getElementById("paketBuffet-2"), //-2
    paketMenue: document.getElementById("paketMenue-2"), //-2

    //Buffet Group
    Buffet: document.getElementsByName("Buffet"),
    buffetBlock: document.getElementById("buffetBlock"),

    //Buffet
    buffetBasic: document.getElementById("buffetBasic"),
    buffetLunchBuffetOne: document.getElementById("buffetLunchBuffetOne"),
    buffetLunchBuffetTwo: document.getElementById("buffetLunchBuffetTwo"),
    buffetFestBuffetOne: document.getElementById("buffetFestBuffetOne"),
    buffetFestBuffetTwo: document.getElementById("buffetFestBuffetTwo"),
    buffetVegan: document.getElementById("buffetVegan"),
    buffetIndividuell: document.getElementById("buffetIndividuell"),

    //Menue Group
    Menue: document.getElementsByName("Menue"),
    menueBlock: document.getElementById("menueBlock"),

    //Menue
    menue3Gang1: document.getElementById("menue3Gang1"),
    menue3Gang2: document.getElementById("menue3Gang2"),
    menue4Gang1: document.getElementById("menue4Gang1"),
    menue4Gang2: document.getElementById("menue4Gang2"),
    menueFlying1: document.getElementById("menueFlying1"),
    menueFlying2: document.getElementById("menueFlying2"),
    menueFlying3: document.getElementById("menueFlying3"),
    menueIndividuell: document.getElementById("menueIndividuell"),

    //Getränkepauschalen Group
    getraenkepauschale: document.getElementsByName("getraenkepauschale"),

    //Getränkepauschalen
    getraenkepauschaleBasic: document.getElementById(
      "getraenkepauschaleBasic"
    ),
    getraenkepauschaleBasicPlus: document.getElementById(
      "getraenkepauschaleBasicPlus"
    ),
  },
  //checkpoints
  checkboxes: {
    kaffee: document.getElementById("kaffee"),
    energy: document.getElementById("energy"),
    longdrinksUndShots: document.getElementById("longdrinksUndShots"),
    sektEmpfang: document.getElementById("sektEmpfang"),
    kleineHaeppchen: document.getElementById("kleineHaeppchen"),
  },
  sliderKram: {
    //ElementWelcheSlideAnIst: document.querySelector('.w-slider-aria-label'),
    //der geht leider nicht musste ich unten anwenden weil er zu früh ladet
    NextClickButtonImSlider: document.querySelector('.right-arrow-2.w-slider-arrow-right'),
  },
  mehrInfomration: {
    //sind alle unten bei slider in der schleife aufgerufen
  },
  //ergebnisfeld
  resultValuePrintField: document.getElementById("resultValue"),
  EmmailButton: document.getElementById("EmmailButton"),
};
const DOMAnpassungen = {
  //show/hide Buffet
  BuffetOrMenue: function (was) {
    if (was === "Buffet") {
      DOMElemente.options.buffetBlock.style.display = "block";
      DOMElemente.options.menueBlock.style.display = "none";
    } else if (was === "Menue") {
      DOMElemente.options.buffetBlock.style.display = "none";
      DOMElemente.options.menueBlock.style.display = "block";
    } else {
//console.log("nichts ausgewählt vom paket");
    }
  },

  //if selected show das und das
};
//alle werte zum eintragen
const werte = {
  sonsitiges: {
    serviceKraftProWieVielPersonen: 23, //eine Servicekraft Pro 23 Gäste
    kostenDerServicekräfteProperson: 38.1, //stundenPreis pro Stunde Proi Service Kraft
    KöcheProWieVielPersonen: 75, //ein Koch Pro 75 Gäste
    kostenServiceleiterProStunde: 47.6,
    küchenequipmentKosten: 155,
    anlieferung: 180,
    leihgeschierKostenProPerson: 5.5,
  },
  paketBuffet: {},
  paketMenue: {},
  buffetBasic: {
    Preis: 27.5,
    Info: "27,5€ Pro Person",
  },
  buffetLunchBuffetOne: {
    Preis: 31.9,
    Info: "31.9€ Pro Person",
  },
  buffetLunchBuffetTwo: {
    Preis: 31.9,
    Info: "31.9€ Pro Person",
  },
  buffetFestBuffetOne: {
    Preis: 38.5,
    Info: "38.50€ Pro Person",
  },
  buffetFestBuffetTwo: {
    Preis: 38.5,
    Info: "38.50€ Pro Person",
  },
  buffetVegan: {
    Preis: 49.50,
    Info: "49.50€ Pro Person",
  },

  menue3Gang1: {
    Preis: 27.5,
    Info: "27,5€ Pro Person",
  },
  menue3Gang2: { Preis: 34.1, Info: "34.1€ Pro Person" },
  menue4Gang1: { Preis: 34.1, Info: "34.1€ Pro Person" },
  menue4Gang2: { Preis: 49.5, Info: "49.50€ Pro Person" },
  menueFlying1: { Preis: 31.9, Info: "31.9€ Pro Person" },
  menueFlying2: { Preis: 37.4, Info: "37.4€ Pro Person" },
  menueFlying3: { Preis: 42.9, Info: "42.9€ Pro Person" },
  getraenkepauschaleBasic: {
    bisStunden: 4,
    VorPreis: 21.5,
    Preis: 4.5,
    Info: "bis 4 Stunden: € 21,50 pro Person, jede weitere Stunde: € 4,50/Person",
  },
  getraenkepauschaleBasicPlus: {
    bisStunden: 4,
    VorPreis: 25.5,
    Preis: 4.5,
    Info: "bis 4 Stunden: € 25,50 pro Person, jede weitere Stunde: € 4,50/Person",
  },
  kaffee: {
    proWieVielStunden: 1,
    Preis: 1.2,
    Info: "1,2€ pro stunde Pro Person",
  },
  energy: {
    proWieVielStunden: 1,
    Preis: 2.6,
    Info: "2.60€ pro stunde Pro Person",
  },
  longdrinksUndShots: {
    proWieVielStunden: 1,
    Preis: 4.4,
    Info: "4.4€ pro stunde Pro Person inbegriffen energy",
  },

  sektEmpfang: {
    Preis: 4.8,
    Info: "4.8€ pro person",
  },
  kleineHaeppchen: {
    Preis: 3.6,
    Info: "3,6 also zwei stück pro person",
  },
};
//die Static Form Properties Inputs
const staticFormInputs = {
  name: 0,
  datumDerVeranstaltung: 0,
  ortDerVeranstaltung: 0,
  dauerDerVeranstaltung: 0,
  menueIndividuellInput: 0,
  buffetIndividuellInput: 0,
};
// Objekt für die Formularlogik
const formLogic = {
  //die Propertis die variable sind
  personen: 0,
  dauer: 0,
  sektPersonen: 0,
  kaffee: false,
  energy: false,
  longdrinksUndShots: false,
  sektEmpfang: false,
  kleineHaeppchen: false,

  welchesPaket: "",
  welchesBuffet: "",
  welcherMenü: "",
  welcheGetraenkepauschale: "",
  welcheIndividualisierung: "",
  individualisierung: false,

  // Funktion zur Berechnung des Ergebnisses
  calculateResult: function () {
    let result = parseInt(0); //das ergebnis
    //die logic hinter der berechnung
    //helper Function
/*      function mathLogic(durchProVielePersonen, Preis) {
      const dazuZuRechnenVAR =
        Math.ceil(formLogic.personen / durchProVielePersonen) * Preis;
      result += dazuZuRechnenVAR;
    }
    function mathLogicSitzend(durchProVielePersonen, Preis) {
      const dazuZuRechnenVAR =
        Math.ceil(formLogic.sitzendeGäste / durchProVielePersonen) * Preis;
      result += dazuZuRechnenVAR;
    } */

    



    function preisProPerson(Preis) {
      const dazuZuRechnenVAR = formLogic.personen * Preis;
      result += dazuZuRechnenVAR;
    }
    function PreisfürGetraenkePauschale(werlcherWert) {
      
     
      if (werlcherWert.bisStunden > formLogic.dauer) {
        const dazuZuRechnenVAR = werlcherWert.VorPreis * formLogic.personen; //hier eventeul fehler wegen this
        
        result += dazuZuRechnenVAR;
      } else {
        const dazuZuRechnenVAR = (werlcherWert.Preis * formLogic.personen * (formLogic.dauer- werlcherWert.bisStunden)) ;
        const davorRate = werlcherWert.VorPreis * werlcherWert.bisStunden;
        result += (dazuZuRechnenVAR + davorRate);
      }
    }
    function preisMalPersonUndStunde(preisss){
      const dazuZuRechnenVAR = preisss * formLogic.dauer * formLogic.personen; 
        result += dazuZuRechnenVAR;
    }

    /* 
    //ab hier alles individuel
    function alleGedekeDiablenOrNot(trueOrFalse) {
      DOMElemente.options.gedekBasic.disabled = trueOrFalse;
      DOMElemente.options.gedekBasicPlus.disabled = trueOrFalse;
      DOMElemente.options.gedekPremium.disabled = trueOrFalse;
      if (trueOrFalse) {
        DOMElemente.options.gedekBlock.title = "Ist deaktiviert";
        //hier kann man dann auch noch css verndern
      } else {
        DOMElemente.options.gedekBlock.title = "";
      }
    }
    function alleTischserviceDiablenOrNot(trueOrFalse) {
      DOMElemente.options.tischserivceBasic.disabled = trueOrFalse;
      DOMElemente.options.tischserivcePremium.disabled = trueOrFalse;
      if (trueOrFalse) {
        DOMElemente.options.tischserivceBlock.title = "Ist deaktiviert";
        //hier kann man dann auch noch css verndern
      } else {
        DOMElemente.options.tischserivceBlock.title = "";
      }
    } */

    // Optionale Berechnungen basierend auf Optionen
    const GeckecktesPaket = document.querySelector(
      'input[name="Paket"]:checked'
    );
    const GeckecktesBuffet = document.querySelector(
      'input[name="Buffet"]:checked'
    );
    const GeckecktesMenue = document.querySelector(
      'input[name="Menue"]:checked'
    );
    const GeckecktesGetraenkepauschale = document.querySelector(
      'input[name="getraenkepauschale"]:checked'
    );

    //PAKET Radio Group
    if (GeckecktesPaket.value === DOMElemente.options.paketBuffet.value) {
      //chekcen welcher group value an ist und vergleichen mit einem Value von der gruppe.
      //hier rein wenn paketBuffet ausgewällt ist
      this.welchesPaket = "Buffet";
      DOMAnpassungen.BuffetOrMenue("Buffet");
    } else {
      //hier rein wenn Menu ausgewällt ist
      this.welchesPaket = "Menü";
      DOMAnpassungen.BuffetOrMenue("Menue");
    }

    let selectedPersonen = parseInt(this.personen);
    let selectedDauer = parseInt(this.dauer);

    //deaktiviere alle optionen
    /* alleGedekeDiablenOrNot(false);
    alleTischserviceDiablenOrNot(false); */

    //hier alles was slider bezogen ist
    if (selectedPersonen > 1) {
      // Überprüfen, ob Slider auf mindestens 1 gesetzt sind

      if (GeckecktesPaket.value === DOMElemente.options.paketBuffet.value) {
        //wenn Buffet an ist
        const buffetValue = GeckecktesBuffet.value;
        this.individualisierung = false;
        //console.log(buffetValue)
        if (buffetValue === DOMElemente.options.buffetBasic.value) {
          this.welchesBuffet = "Basic Buffet";
          preisProPerson(werte.buffetBasic.Preis)
          
        } else if (
          buffetValue === DOMElemente.options.buffetLunchBuffetOne.value
        ) {
          this.welchesBuffet = "Lunch Buffet 1";
          preisProPerson(werte.buffetLunchBuffetOne.Preis)
        }else if (
          buffetValue === DOMElemente.options.buffetLunchBuffetTwo.value
        ) {
          this.welchesBuffet = "Lunch Buffet 2";
          preisProPerson(werte.buffetLunchBuffetTwo.Preis)
        }else if (
          buffetValue === DOMElemente.options.buffetFestBuffetOne.value
        ) {
          this.welchesBuffet = "Fest Buffet 1";
          preisProPerson(werte.buffetFestBuffetOne.Preis)
        }else if (
          buffetValue === DOMElemente.options.buffetFestBuffetTwo.value
        ) {
          this.welchesBuffet = "Fest Buffet 2";
          preisProPerson(werte.buffetFestBuffetTwo.Preis)
        }else if (
          buffetValue === DOMElemente.options.buffetVegan.value
        ) {
          this.welchesBuffet = "Vegan Buffet";
          preisProPerson(werte.buffetVegan.Preis)
        }else if (
          buffetValue === DOMElemente.options.buffetIndividuell.value
        ) {
          this.welchesBuffet = "Individuelles Buffet";
          this.welcheIndividualisierung = "buffetIndividuell";
          this.individualisierung = true;
          //console.log("indivi an")
          
          
        }
      } else if (GeckecktesPaket.value === DOMElemente.options.paketMenue.value) {
        //wenn Menue an ist
        const MenueValue = GeckecktesMenue.value;
        this.individualisierung = false;

        if (MenueValue === DOMElemente.options.menue3Gang1.value) {
          this.welcherMenü = "3-Gänge Menü 1";
          preisProPerson(werte.menue3Gang1.Preis)
        } else if (MenueValue === DOMElemente.options.menue3Gang2.value) {
          this.welcherMenü = "3-Gänge Menü 2";
          preisProPerson(werte.menue3Gang2.Preis)
        }else if (MenueValue === DOMElemente.options.menue4Gang1.value) {
          this.welcherMenü = "4-Gänge Menü 1";
          preisProPerson(werte.menue4Gang1.Preis)
        }else if (MenueValue === DOMElemente.options.menue4Gang2.value) {
          this.welcherMenü = "4-Gänge Menü 2";
          preisProPerson(werte.menue4Gang2.Preis)
        }else if (MenueValue === DOMElemente.options.menueFlying1.value) {
          this.welcherMenü = "Flying Menü 1";
          preisProPerson(werte.menueFlying1.Preis)
        }else if (MenueValue === DOMElemente.options.menueFlying2.value) {
          this.welcherMenü = "Flying Menü 2";
          preisProPerson(werte.menueFlying2.Preis)
        }else if (MenueValue === DOMElemente.options.menueFlying3.value) {
          this.welcherMenü = "Flying Menü 3";
          preisProPerson(werte.menueFlying3.Preis)
        }else if (MenueValue === DOMElemente.options.menueIndividuell.value) {
          this.welcherMenü = "Individuelles Menü";
          this.welcheIndividualisierung = "menueIndividuell"
          this.individualisierung = true;
          
        }
      }

      if (GeckecktesGetraenkepauschale) {
        
        const buffetGetraenkepauschale = GeckecktesGetraenkepauschale.value;
        if (
          buffetGetraenkepauschale ===
          DOMElemente.options.getraenkepauschaleBasic.value
        ) {
          this.welcheGetraenkepauschale = "Basic";
          PreisfürGetraenkePauschale(werte.getraenkepauschaleBasic);
        } else {
          this.welcheGetraenkepauschale = "Basic +";
          PreisfürGetraenkePauschale(werte.getraenkepauschaleBasicPlus);
        }
      }
    }

    if (this.kaffee) {
      //wenn kaffee ausgeählt ist
      //console.log("kaffee")
      preisMalPersonUndStunde(werte.kaffee.Preis)
    }


    if (this.longdrinksUndShots) {
      DOMElemente.checkboxes.energy.checked = true
         //was immer akutualiesiert werden muss                        
        let vorherigesElementEnergy = DOMElemente.checkboxes.energy.previousElementSibling;
        if (DOMElemente.checkboxes.energy.checked) {
          vorherigesElementEnergy.classList.add("w--redirected-checked");
        } else {
          vorherigesElementEnergy.classList.remove("w--redirected-checked");
        }
      
        preisMalPersonUndStunde(werte.longdrinksUndShots.Preis)
      
    }
    if (this.energy) {
      
      if(this.longdrinksUndShots){
        //wenn beides ausgewählt ist tu nichts
        //console.log("mach nichts")
      }else{
        //wenn nur energy ausgeählt ist
        //console.log("nur energy")
        preisMalPersonUndStunde(werte.energy.Preis)
      }
    }

    if (this.sektEmpfang) {
      //wenn sektempfang ausgeählt ist
      //console.log("sektempfang")

      //zeige sektSlider
      DOMElemente.bloecke.sektPersonenBlock.style.display = "block";
      DOMElemente.slider.sektPersonen.max = this.personen;
      result += this.sektPersonen * werte.sektEmpfang.Preis;
    } else {
      DOMElemente.bloecke.sektPersonenBlock.style.display = "none";
    }

    if (this.kleineHaeppchen) {
      //wenn kleineHaeppchen ausgeählt ist
      //console.log("kleinhäpchen")
      preisProPerson(werte.kleineHaeppchen.Preis)
    }

    //endberechnung
    if (result > 1) {
      //schaun ob überhaupt was eingegeben wurde

      const bererchung =
        (this.personen / werte.sonsitiges.serviceKraftProWieVielPersonen) *
          (this.dauer * werte.sonsitiges.kostenDerServicekräfteProperson) +
        (this.personen / werte.sonsitiges.KöcheProWieVielPersonen) *
          3 *
          44.2 +
        this.dauer * werte.sonsitiges.kostenServiceleiterProStunde;
      const extras =
        werte.sonsitiges.küchenequipmentKosten +
        werte.sonsitiges.anlieferung +
        werte.sonsitiges.leihgeschierKostenProPerson * this.personen;

      result += bererchung + extras;
    }

    // Weitere Optionen hier
   

    return result;
  },
  // Funktion zur Aktualisierung des Ergebnisses
  RenderResult: function () {
    const resultElement = DOMElemente.resultValuePrintField;
    const resultTitle = document.getElementById("result")
    const untergrenze = Math.ceil(this.calculateResult() * 0.9);
    const obergrenze = Math.ceil(this.calculateResult() * 1.1);

    const untergrenzeProPerson = Math.ceil((this.calculateResult() * 0.9)/formLogic.personen);
    const obergrenzeProPerson = Math.ceil((this.calculateResult() * 1.1)/formLogic.personen);
    let ergebnis;
    if(formLogic.individualisierung){
      resultElement.innerHTML = `Für das individuelle Paket können wir erst nach Rücksprache eine Preisspanne nennen`;
      ergebnis = "Für das individuelle Paket können wir erst nach Rücksprache eine Preisspanne nennen"
    }
    else if (this.personen < 100) {
      resultElement.innerHTML = `${untergrenze}€ - ${obergrenze}€*`;
      resultTitle.innerText = "Der Preis beträgt ungefähr: "
      //Der Preis Beträgt ungefähr: 
      ergebnis = untergrenze + "€ - " + obergrenze + "€*";

      
    }else {
      resultElement.innerHTML = `${untergrenzeProPerson}€ - ${obergrenzeProPerson}€*`;
      resultTitle.innerText = "Der Preis pro Person beträgt ungefähr:"

      ergebnis = untergrenzeProPerson + "€ - " + obergrenzeProPerson + "€*";

      //Der Preis Pro Person ist ungefähr:
      /* resultElement.innerHTML = this.calculateResult().toFixed(2) + "€"
      ergebnis = this.calculateResult(); */
    }
    return ergebnis;
  },
};
// Funktion zur Aktualisierung des Ergebnisses bei Änderungen
function updateResult() {
  //schreibe den varibalen den zustand oder inhalt den sie im dokument haben zu
  formLogic.personen = DOMElemente.slider.personen.value;
  formLogic.dauer = DOMElemente.slider.dauerDerVeranstaltung.value;
  formLogic.sektPersonen = DOMElemente.slider.sektPersonen.value;

  formLogic.kaffee = DOMElemente.checkboxes.kaffee.checked;
  formLogic.energy = DOMElemente.checkboxes.energy.checked;
  formLogic.longdrinksUndShots = DOMElemente.checkboxes.longdrinksUndShots.checked;
  formLogic.sektEmpfang = DOMElemente.checkboxes.sektEmpfang.checked;
  formLogic.kleineHaeppchen = DOMElemente.checkboxes.kleineHaeppchen.checked;

  formLogic.RenderResult();
}
// Event-Listener hinzufügen
function EventListener() {
  DOMElemente.slider.personen.addEventListener("input", updateResult);
  DOMElemente.slider.sektPersonen.addEventListener("input", updateResult);
  DOMElemente.slider.dauerDerVeranstaltung.addEventListener("input", updateResult);

  DOMElemente.options.Paket.forEach(function (RadioButtons) {
    RadioButtons.addEventListener("change", updateResult);
  });
  DOMElemente.options.Buffet.forEach(function (RadioButtons) {
    RadioButtons.addEventListener("change", updateResult);
  });
  DOMElemente.options.Menue.forEach(function (RadioButtons) {
    RadioButtons.addEventListener("change", updateResult);
  });
  DOMElemente.options.getraenkepauschale.forEach(function (RadioButtons) {
    RadioButtons.addEventListener("change", updateResult);
  });



  

  DOMElemente.checkboxes.kaffee.addEventListener("change", updateResult);
  DOMElemente.checkboxes.energy.addEventListener("change", updateResult);
  DOMElemente.checkboxes.longdrinksUndShots.addEventListener("change", updateResult);
  DOMElemente.checkboxes.sektEmpfang.addEventListener("change", updateResult);
  DOMElemente.checkboxes.kleineHaeppchen.addEventListener("change", updateResult);

  DOMElemente.EmmailButton.addEventListener("click", submit);

   //die slider eventlistener
   // Event-Listener für jeden Button
    for (let i = 1; i <= 6; i++) {
        let buttonIdBuffet = `MehrInformationBuffet-${i}`;
        let buttonMehrInformationBuffet = document.getElementById(buttonIdBuffet);

        // Verwenden Sie eine sofort aufgerufene Pfeilfunktion, um den richtigen Index zu erfassen
        buttonMehrInformationBuffet.addEventListener('click', ((index) => () => showSlideBuffet(index))(i));
    }
    // Event-Listener für jeden Button
    for (let i = 1; i <= 7; i++) {
        let buttonIdMenue = `MehrInformationMenue-${i}`;
        let buttonMehrInformationMenue = document.getElementById(buttonIdMenue);

        // Verwenden Sie eine sofort aufgerufene Pfeilfunktion, um den richtigen Index zu erfassen
        buttonMehrInformationMenue.addEventListener('click', ((index) => () => showSlideMenue(index))(i));
    }


}
  
// Funktion zum Anzeigen des gewünschten Slides
function showSlideBuffet(slideNumber) {
  // Das DOM-Element mit der Klasse '.w-slider-aria-label' auswählen
  let element = document.querySelector('.w-slider-aria-label');

  // Den Button aus dem DOM-Elemente-Objekt mit der Klasse 'NextClickButtonImSlider' auswählen
  let button = DOMElemente.sliderKram.NextClickButtonImSlider;

  // Den Textinhalt des ausgewählten Elements abrufen
  let slideText = element.textContent;

  // Die aktuelle Slide-Nummer extrahieren. Wenn kein Text vorhanden ist, standardmäßig auf Slide 1 setzen.
  let currentSlide = slideText ? parseInt(slideText.match(/\d+/)[0]) : 1;

  // Solange die aktuelle Slide-Nummer nicht der gewünschten Slide-Nummer entspricht, weiterklicken
  while (currentSlide !== slideNumber) {
      button.click(); // Klicken Sie auf den Button, um zum nächsten Slide zu wechseln
      slideText = element.textContent; // Aktualisieren Sie den Textinhalt nach dem Klicken
      currentSlide = slideText ? parseInt(slideText.match(/\d+/)[0]) : 1; // Aktualisieren Sie die aktuelle Slide-Nummer
  }
}
// Funktion zum Anzeigen des gewünschten Slides
function showSlideMenue(slideNumber) {
  //console.log("hier rein")
  // Das DOM-Element mit der Klasse '.w-slider-aria-label' auswählen das wzeite
  let zweistesElement = document.querySelectorAll('.w-slider-aria-label');


  let element = zweistesElement[1]
  // Den Button aus dem DOM-Elemente-Objekt mit der Klasse 'NextClickButtonImSlider' auswählen
  let button = document.getElementsByClassName('right-arrow-2')[1];


  // Den Textinhalt des ausgewählten Elements abrufen
  let slideText = element.textContent;

  // Die aktuelle Slide-Nummer extrahieren. Wenn kein Text vorhanden ist, standardmäßig auf Slide 1 setzen.
  let currentSlide = slideText ? parseInt(slideText.match(/\d+/)[0]) : 1;

  // Solange die aktuelle Slide-Nummer nicht der gewünschten Slide-Nummer entspricht, weiterklicken
  while (currentSlide !== slideNumber) {
    //console.log("so oft das hängt?")
      button.click(); // Klicken Sie auf den Button, um zum nächsten Slide zu wechseln
      slideText = element.textContent; // Aktualisieren Sie den Textinhalt nach dem Klicken
      currentSlide = slideText ? parseInt(slideText.match(/\d+/)[0]) : 1; // Aktualisieren Sie die aktuelle Slide-Nummer
  }
}





function submit() {
  /* 
wenn button auslösst
spiel anim ab
logik ob noch was feld 
-> wenn alles passt
erstelle mail
ändere css das alles passt
-> wenn nicht
ändere css auf fehlend
*/

  //statische inputs einlesen
  staticFormInputs.name = DOMElemente.plainInputs.name.value;
  staticFormInputs.datumDerVeranstaltung =
    DOMElemente.plainInputs.datumDerVeranstaltung.value;
  staticFormInputs.ortDerVeranstaltung =
    DOMElemente.plainInputs.ortDerVeranstaltung.value;
  staticFormInputs.dauerDerVeranstaltung =
    DOMElemente.slider.dauerDerVeranstaltung.value;
  const lastSonstNochWuensche =
    DOMElemente.plainInputs.lastSonstNochWuensche.value;
  staticFormInputs.buffetIndividuellInput = DOMElemente.plainInputs.buffetIndividuellInput.value;
  staticFormInputs.menueIndividuellInput = DOMElemente.plainInputs.menueIndividuellInput.value;

  //mail generieren
  function sendMail() {
    // Erstelle den E-Mail-Body

    //was von welchem in eier varibale fassen
    let WlechesMenueOderBuffett;
    if (formLogic.welchesPaket === "Menü"){
      WlechesMenueOderBuffett = formLogic.welcherMenü
    }else {
      WlechesMenueOderBuffett = formLogic.welchesBuffet
    }

    //checken welches indiviuelle an ist und dann den input in die variable setzten
    let welchesIndividuellWasStehtDrinnen;
    if (formLogic.welcheIndividualisierung === "menueIndividuell"){
      welchesIndividuellWasStehtDrinnen = `Individualisierung Anregung: ${staticFormInputs.menueIndividuellInput}`


    }else if (formLogic.welcheIndividualisierung === "buffetIndividuell"){
      welchesIndividuellWasStehtDrinnen = `Individualisierung Anregung: ${staticFormInputs.buffetIndividuellInput}`
    }else{
      welchesIndividuellWasStehtDrinnen = ""
    }


    //helper ja nein
    function stringToJaNeinError(inputString) {
        let wert = JSON.stringify(inputString)
        if (wert === "true") {
          return "ja";
        } else if (wert === "false") {
          return "nein";
        } else {
          return "error" + " " + wert;
          
        }
      }
    //helper wenn kein wert keine angabe
    function keineAngabe(inputString) {
        if (inputString === undefined || inputString === null || inputString === '') {
          return "keine Angabe";
        } else {
          return inputString;
        }
      }




    let emailBody = `

Wenn es noch zusätzliche Anregungen gibt, schreibe gerne noch etwas dazu. Wir freuen uns, mit dir in Kontakt zu treten. 

--------------------

Name: ${keineAngabe(staticFormInputs.name)}
Datum der Veranstaltung: ${keineAngabe(staticFormInputs.datumDerVeranstaltung)}
Location: ${keineAngabe(staticFormInputs.ortDerVeranstaltung)}
Erwatete Gäste: ${formLogic.personen}
Dauer der Veranstaltung: ${formLogic.dauer}

Paket: ${formLogic.welchesPaket}
Welches Menü oder Buffet davon: ${WlechesMenueOderBuffett}
    ${welchesIndividuellWasStehtDrinnen}

Welche Getränkepauschale: ${formLogic.welcheGetraenkepauschale}

Kaffee: ${stringToJaNeinError(formLogic.kaffee)}
Energy: ${stringToJaNeinError(formLogic.energy)}
Longdrinks & Shots: ${stringToJaNeinError(formLogic.longdrinksUndShots)}
Sekt Empfang: ${stringToJaNeinError(formLogic.sektEmpfang)}
-  Für wie viele Leute: ${formLogic.sektPersonen}
Kleine Häppchen: ${stringToJaNeinError(formLogic.kleineHaeppchen)}


Angegebene Anregungen: ${keineAngabe(lastSonstNochWuensche)}

Preisspanne: ${formLogic.RenderResult()}
* Alle Preise sind unverbindlich, und dienen der Orientierung
--------------------
  
  
   `;
    // Öffne das E-Mail-Programm mit dem vorbereiteten Body
    window.location.href =
      "mailto:office@das-eventcatering.at?subject=Das Eventcatering - Anfrage für Business&body=" +
      encodeURIComponent(emailBody);
  }
  sendMail();
}
function init() {
  EventListener(); //alle eventlistener starten
  formLogic.RenderResult(); // Initialisierung des Ergebnisses, anfangs state nach reload Rendern
}
init();








