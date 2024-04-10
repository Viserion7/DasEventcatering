          
//ich könnte noch diabled designen!!!!



//alle DOM Elemente
const DOMElemente = {
  //slider
  slider: {
    personen: document.getElementById("personen"),
    sitzendeGäste: document.getElementById("sitzendeGäste"),
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
    nameDerVeranstaltung: document.getElementById("nameDerVeranstaltung"), //-2..
    lastSonstNochWuensche: document.getElementById("lastSonstNochWuensche"), //-2..
  },
  //options
  options: {
    //PAKETE Group
    Paket: document.getElementsByName("Paket"),

    //pakete
    paketKlassik: document.getElementById("paketKlassik"),
    paketPremium: document.getElementById("paketPremium"),

    //GEDEK Group
    Gedek: document.getElementsByName("Gedek"),
    gedekBlock: document.getElementById("gedekBlock"),
    hoverToolTipGedek: document.getElementById("hover-tool-tip-gedek"),

    //gedek
    gedekBasic: document.getElementById("gedekBasic"),
    gedekBasicPlus: document.getElementById("gedekBasicPlus"),
    gedekPremium: document.getElementById("gedekPremium"),
      gedekKeins: document.getElementById("gedekKeins"),

    //TISCHERSERVICE  Group
    Tischserivce: document.getElementsByName("Tischserivce"),
    tischserivceBlock: document.getElementById("tischserivceBlock"),

    //tischservice
    tischserivceBasic: document.getElementById("tischserivceBasic"),
    tischserivcePremium: document.getElementById("tischserivcePremium"),
     tischserivceKeins: document.getElementById("tischserivceKeins"),
  },
  //checkpoints
  checkboxes: {
    sektEmpfang: document.getElementById("sektEmpfang"),
    ginTonicBar: document.getElementById("ginTonicBar"),
    cocktailbar: document.getElementById("cocktailbar"),
    webOrder: document.getElementById("webOrder"),
    menuekarte: document.getElementById("menuekarte"),
  },
  sliderKram: {
    //ElementWelcheSlideAnIst: document.querySelector('.w-slider-aria-label'),
    //der geht leider nicht musste ich unten anwenden weil er zu früh ladet
    NextClickButtonImSlider: document.querySelector('.right-arrow-2.w-slider-arrow-right'),
  },
  mehrInfomration: {
    MehrInformationPremium: document.getElementById("MehrInformationPremium"),
    MehrInformationKlassik: document.getElementById("MehrInformationKlassik")
  },

  //ergebnisfeld
  resultValuePrintField: document.getElementById("resultValue"),
  EmmailButton: document.getElementById("EmmailButton"),
  NotAllowedClass: document.querySelectorAll(".notallowedclass")
};
const DOMAnpassungen = {
  //if selected show das und das
};
//alle werte zum eintragen
const werte = {
  paketKlassik: {
    durchProVielePersonen: 100,
    Preis: 0,
    Info: "0€ pro 100 Personen, es wird immer aufgerundet",
  },
  paketPremium: {
    durchProVielePersonen: 100,
    Preis: 80,
    Info: "80€ pro 100 Personen, es wird immer aufgerundet",
  },
  CombogedekBasicPlusTischserivceBasic: {
    durchProVielePersonen: 50,
    Preis: 145,
    Info: "145€ pro Sitzende Person",
  },
  gedekBasic: {
    durchProVielePersonen: 1,
    Preis: 2.6,
    Info: "2,6€ pro Sitzende Person",
  },
  gedekBasicPlus: {
    durchProVielePersonen: 1,
    Preis: 4.6,
    Info: "4.6€ pro Sitzende Person",
  },
  gedekPremium: {
    durchProVielePersonen: 1,
    Preis: 5.1,
    Info: "5.1€ pro Sitzende Person",
  },
  tischserivceBasic: {
    durchProVielePersonen: 100,
    Preis: 60,
    Info: "60€ pro 100 SitzendenPersonen, es wird immer aufgerundet",
  },
  tischserivcePremium: {
    durchProVielePersonen: 100,
    Preis: 90,
    Info: "90€ pro 100 SitzendenPersonen, es wird immer aufgerundet",
  },
  gedekTischserviceCombo: {
    durchProVielePersonen: 50,
    Preis: 145,
    Info: "Sitzende Gäste durch 50 und das mal 145€",
  },
  sektEmpfang: {
    Preis: 4.8,
    Info: "4.8€ pro person",
  },
  ginTonicBar: {
    Preis: 180,
    Info: "einmal 180€",
  },
  cocktailbar: {
    Preis: 180,
    Info: "einmal 180€",
  },
  webOrder: {
    Preis: 60,
    Info: "einmal 60€",
  },
  menuekarte: {
    durchProVielePersonen: 10,
    Preis: 2.6,
    Info: "(((SitzendeGäste/10 → aufrunden 1,2)→ aufrunden) +9)*2,6€",
  },
  lieferKosten: {
    Preis: 180,
    Info: "wird standart draufgerechnet",
  },
};
//die Static Form Properties Inputs
const staticFormInputs = {
  name: 0,
  datumDerVeranstaltung: 0,
  ortDerVeranstaltung: 0,
  nameDerVeranstaltung: 0,
  dauerDerVeranstaltung: 0,
};
// Objekt für die Formularlogik
const formLogic = {
  //die Propertis die variable sind
  personen: 0,
  sitzendeGäste: 0,
  sektPersonen: 0,
  sektEmpfang: false,
  ginTonicBar: false,
  cocktailbar: false,
  webOrder: false,
  menuekarte: false,

  welchesPaket: "",
  welchesGedek: "",
  welcherTischservice: "",

  // Funktion zur Berechnung des Ergebnisses
  calculateResult: function () {
    let result = parseInt(0); //das ergebnis
    //die logic hinter der berechnung
    function mathLogic(durchProVielePersonen, Preis) {
      const dazuZuRechnenVAR =
        Math.ceil(formLogic.personen / durchProVielePersonen) * Preis;
      result += dazuZuRechnenVAR;
    }
    function mathLogicSitzend(durchProVielePersonen, Preis) {
      const dazuZuRechnenVAR =
        Math.ceil(formLogic.sitzendeGäste / durchProVielePersonen) * Preis;
      result += dazuZuRechnenVAR;
    }

    //den sitzenden slider max auf personen stellen
    DOMElemente.slider.sitzendeGäste.max = this.personen;

    //ab hier alles individuel
    function alleGedekeDiablenOrNot(trueOrFalse) {
      DOMElemente.options.gedekBasic.disabled = trueOrFalse;
      DOMElemente.options.gedekBasicPlus.disabled = trueOrFalse;
      DOMElemente.options.gedekPremium.disabled = trueOrFalse;
      DOMElemente.options.gedekKeins.disabled = trueOrFalse;
      if (trueOrFalse){
        DOMElemente.options.gedekBlock.title = "Diese Option ist deaktiviert, füge zuerst sitzende Gäste hinzu";
        //DOMElemente.options.gedekBlock.setAttribute('style', "cursor: not-allowed !important"); 
        DOMElemente.options.gedekBlock.style.opacity = "40%" // ausgrauen
        DOMElemente.options.hoverToolTipGedek.style.visibility = 'hidden';
        

        DOMElemente.NotAllowedClass.forEach(function(element) {
        // Hier kannst du Aktionen für jedes Element durchführen
        element.style.cursor = "not-allowed"; 
        });
        //hier kann man dann auch noch css verndern
      }else {
        DOMElemente.options.gedekBlock.title = "";
        DOMElemente.options.gedekBlock.style.opacity = "100%" 
        DOMElemente.options.hoverToolTipGedek.style.visibility = 'visible';
        DOMElemente.NotAllowedClass.forEach(function(element) {
        // Hier kannst du Aktionen für jedes Element durchführen
        element.style.cursor = ""; 
        });

      }
      
    }
    function alleTischserviceDiablenOrNot(trueOrFalse) {
      DOMElemente.options.tischserivceBasic.disabled = trueOrFalse;
      DOMElemente.options.tischserivcePremium.disabled = trueOrFalse;
      DOMElemente.options.tischserivceKeins.disabled = trueOrFalse;
      if (trueOrFalse){
        DOMElemente.options.tischserivceBlock.title = "Diese Option ist deaktiviert, füge zuerst sitzende Gäste hinzu"
        //hier kann man dann auch noch css verndern
        DOMElemente.options.tischserivceBlock.style.opacity = "40%";
      }else {
        DOMElemente.options.tischserivceBlock.title = "";
        DOMElemente.options.tischserivceBlock.style.opacity = "100%"

      }
    }



    // Optionale Berechnungen basierend auf Optionen
    const GeckecktesPaket = document.querySelector(
      'input[name="Paket"]:checked'
    );
    const GeckecktesGedek = document.querySelector(
      'input[name="Gedek"]:checked'
    );
    const GeckecktesTischservice = document.querySelector(
      'input[name="Tischserivce"]:checked'
    );

    //PAKET Radio Group
    if (GeckecktesPaket.value === DOMElemente.options.paketPremium.value) {
      //chekcen welcher group value an ist und vergleichen mit einem Value von der gruppe.
      //hier rein wenn paketPremium ausgewällt ist
      this.welchesPaket = "Premium";
      mathLogic(
        werte.paketPremium.durchProVielePersonen,
        werte.paketPremium.Preis
      );
    } else {
      //hier rein wenn paketKlassik ausgewällt ist
      this.welchesPaket = "Klassik";
      mathLogic(
        werte.paketKlassik.durchProVielePersonen,
        werte.paketKlassik.Preis
      );
    }

    let selectedPersonen = parseInt(this.personen);
    let selectedSitzendeGäste = parseInt(this.sitzendeGäste);

    //hier alles was slider bezogen ist
    if (selectedPersonen > 1 && selectedSitzendeGäste > 1) {
      // Überprüfen, ob beide Slider auf mindestens 1 gesetzt sind
      //checke bei Gedek und Tischservice das erste siehe unten bei else

      
        // Überprüfen, ob mehr Personen als sitzende Gäste ausgewählt wurden

        //deaktiviere alle optionen
        alleGedekeDiablenOrNot(false);
        alleTischserviceDiablenOrNot(false);

        // ich könnte noch diabled designen!!!!

        // Gedek-Logik
        if (GeckecktesGedek && GeckecktesTischservice) {
          const gedekValue = GeckecktesGedek.value;
          const tischserviceValue = GeckecktesTischservice.value;

          if (gedekValue === DOMElemente.options.gedekBasic.value && 
              tischserviceValue === DOMElemente.options.tischserivceBasic.value) {
            // Spezielle Berechnung für Gedek Basic Plus und Tischservice Basic
            this.welchesGedek = "Basic -> Combo";
            this.welcherTischservice = "Basic -> Combo";
            mathLogicSitzend(werte.CombogedekBasicPlusTischserivceBasic.durchProVielePersonen, werte.CombogedekBasicPlusTischserivceBasic.durchProVielePersonen)
            //spiele combo animation ab
            //alert("Combo")
          } else {
            // Andernfalls, normale Logik für Gedek und Tischservice
            if (gedekValue === DOMElemente.options.gedekBasicPlus.value) {
              this.welchesGedek = "Basic +";
              mathLogicSitzend(
                werte.gedekBasicPlus.durchProVielePersonen,
                werte.gedekBasicPlus.Preis
              );
            } else if (gedekValue === DOMElemente.options.gedekBasic.value) {
              this.welchesGedek = "Basic";
              mathLogicSitzend(
                werte.gedekBasic.durchProVielePersonen,
                werte.gedekBasic.Preis
              );
            } else if (gedekValue === DOMElemente.options.gedekPremium.value) {
              this.welchesGedek = "Premium";
              mathLogicSitzend(
                werte.gedekPremium.durchProVielePersonen,
                werte.gedekPremium.Preis
              );
            }else if(gedekValue === DOMElemente.options.gedekKeins.value) {
              this.welchesGedek = "Kein Gedeck";
               result += 0;
             
           }

            if (
              tischserviceValue === DOMElemente.options.tischserivceBasic.value
            ) {
              this.welcherTischservice = "Basic";
              mathLogicSitzend(
                werte.tischserivceBasic.durchProVielePersonen,
                werte.tischserivceBasic.Preis
              );
            } else if(tischserviceValue === DOMElemente.options.tischserivcePremium.value){
              this.welcherTischservice = "Premium";
              mathLogicSitzend(
                werte.tischserivcePremium.durchProVielePersonen,
                werte.tischserivcePremium.Preis
              );
            }else if (tischserviceValue === DOMElemente.options.tischserivceKeins.value) {
              this.welcherTischservice = "Kein Tischserivce";
              result += 0;
            }
          }
        } else {
          // Hier kommt der Code für den Fall, dass entweder Gedek oder Tischservice nicht ausgewählt ist
          // ...
        }

      
    } else {
      //deaktiviere alle optionen wenn nicht alle slider ausgewällt sind
      alleGedekeDiablenOrNot(true);
      alleTischserviceDiablenOrNot(true);
    }

    if (this.sektEmpfang) {
      //wenn sektempfang ausgeählt ist

      //zeige sektSlider
      DOMElemente.bloecke.sektPersonenBlock.style.display = "block";
      DOMElemente.slider.sektPersonen.max = this.personen;
      result += this.sektPersonen * werte.sektEmpfang.Preis;
    } else {
      DOMElemente.bloecke.sektPersonenBlock.style.display = "none";
    }
    if (this.ginTonicBar) {
      //wenn ginTonicBar ausgeählt ist
      result += werte.ginTonicBar.Preis;
    }
    if (this.cocktailbar) {
      //wenn cocktailbar ausgeählt ist
      result += werte.cocktailbar.Preis;
    }

    if (this.webOrder) {
      //wenn webOrder ausgeählt ist
      result += werte.webOrder.Preis;
    }

    if (this.menuekarte) {
      //wenn menuekarte ausgeählt ist
      const menuekratenungefähr =
        (Math.ceil(Math.ceil(formLogic.sitzendeGäste / 10) * 1.2) + 9) * 2.6;
      result += menuekratenungefähr;
    }

    //endberechnung
    if (result > 1) {
      //schaun ob überhaupt was eingegeben wurde
      result += werte.lieferKosten.Preis;
    }

    // Weitere Optionen hier

    return result;
  },
  // Funktion zur Aktualisierung des Ergebnisses
  RenderResult: function () {
    const resultElement = DOMElemente.resultValuePrintField;
    const untergrenze = Math.ceil(this.calculateResult() * 0.9);
    const obergrenze = Math.ceil(this.calculateResult() * 1.1);

    //runden letzte stelle null
    function rundeZurZehnerstelle(zahl) {
            // Prüfen, ob die Zahl bereits eine einzelne Ziffer ist
            if (zahl >= 0 && zahl < 10) {
              return zahl;
            }
            // Abrunden oder aufrunden zur nächsten Zehnerstelle, abhängig von der letzten Ziffer
            return Math.round(zahl / 10) * 10;
          }

    resultElement.innerHTML = " " + rundeZurZehnerstelle(untergrenze) + "€ - " + rundeZurZehnerstelle(obergrenze) + "€*";
    return rundeZurZehnerstelle(untergrenze) + "€ - " + rundeZurZehnerstelle(obergrenze) + "€*";
  },
};
// Funktion zur Aktualisierung des Ergebnisses bei Änderungen
function updateResult() {
  //schreibe den varibalen den zustand oder inhalt den sie im dokument haben zu
  formLogic.personen = DOMElemente.slider.personen.value;
  formLogic.sitzendeGäste = DOMElemente.slider.sitzendeGäste.value;
  formLogic.sektPersonen = DOMElemente.slider.sektPersonen.value;
  formLogic.sektEmpfang = DOMElemente.checkboxes.sektEmpfang.checked;
  formLogic.ginTonicBar = DOMElemente.checkboxes.ginTonicBar.checked;
  formLogic.cocktailbar = DOMElemente.checkboxes.cocktailbar.checked;
  formLogic.webOrder = DOMElemente.checkboxes.webOrder.checked;
  formLogic.menuekarte = DOMElemente.checkboxes.menuekarte.checked;

  //von ooptionen den value der beim html eingetragen wurde siehe chatGPT
  /*  formLogic.sitzendeGäste = document.getElementById('sitzendeGäste').value;
formLogic.servietten = document.getElementById('servietten').checked;
formLogic.servietten = document.getElementById('servietten').checked; */
  formLogic.RenderResult();
}
// Event-Listener hinzufügen
function EventListener() {
  DOMElemente.slider.personen.addEventListener("input", updateResult);
  DOMElemente.slider.sitzendeGäste.addEventListener("input", updateResult);
  DOMElemente.slider.sektPersonen.addEventListener("input", updateResult);

  DOMElemente.options.Paket.forEach(function (RadioButtons) {
    RadioButtons.addEventListener("change", updateResult);
  });
  DOMElemente.options.Gedek.forEach(function (RadioButtons) {
    RadioButtons.addEventListener("change", updateResult);
  });
  DOMElemente.options.Tischserivce.forEach(function (RadioButtons) {
    RadioButtons.addEventListener("change", updateResult);
  });

  DOMElemente.checkboxes.sektEmpfang.addEventListener("change", updateResult);
  DOMElemente.checkboxes.cocktailbar.addEventListener("change", updateResult);
  DOMElemente.checkboxes.ginTonicBar.addEventListener("change", updateResult);
  DOMElemente.checkboxes.menuekarte.addEventListener("change", updateResult);
  DOMElemente.checkboxes.webOrder.addEventListener("change", updateResult);

  DOMElemente.EmmailButton.addEventListener("click", submit);

  //die slider eventlistener
  // Event-Listener für den Klick auf den Button mit der ID 'MehrInformationKlassik'
  DOMElemente.mehrInfomration.MehrInformationKlassik.addEventListener('click', () => showSlide(1));
  // Event-Listener für den Klick auf den Button mit der ID 'MehrInformationPremium'
  DOMElemente.mehrInfomration.MehrInformationPremium.addEventListener('click', () => showSlide(2));





}
// Funktion zum Anzeigen des gewünschten Slides
function showSlide(slideNumber) {
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
  staticFormInputs.nameDerVeranstaltung =
    DOMElemente.plainInputs.nameDerVeranstaltung.value;
  staticFormInputs.dauerDerVeranstaltung =
    DOMElemente.slider.dauerDerVeranstaltung.value;
  const lastSonstNochWuensche =
    DOMElemente.plainInputs.lastSonstNochWuensche.value;

  //mail generieren
  function sendMail() {
    // Erstelle den E-Mail-Body


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
Name der Veranstaltung: ${keineAngabe(staticFormInputs.nameDerVeranstaltung)}
Erwatete Gäste: ${formLogic.personen}
Wie viele davon bekommen Tischservice: ${formLogic.sitzendeGäste}
Dauer der Veranstaltung: ${staticFormInputs.dauerDerVeranstaltung}

Paket: ${formLogic.welchesPaket}
Welches Gedek: ${formLogic.welchesGedek}
Welcher Tischservice: ${formLogic.welcherTischservice}

Sekt Empfang: ${stringToJaNeinError(formLogic.sektEmpfang)}
-  Für wie viele Leute: ${formLogic.sektPersonen}
Gin Tonic Bar: ${stringToJaNeinError(formLogic.ginTonicBar)}
Cocktailbar: ${stringToJaNeinError(formLogic.cocktailbar)}
Web-order: ${stringToJaNeinError(formLogic.webOrder)}
Menükarte: ${stringToJaNeinError(formLogic.menuekarte)}

Angegebene Anregungen: ${keineAngabe(lastSonstNochWuensche)}

Preisspanne: ${formLogic.RenderResult()}
* Alle Preise sind unverbindlich, und dienen der Orientierung

--------------------

  
   `;
    // Öffne das E-Mail-Programm mit dem vorbereiteten Body
    window.location.href =
      "mailto:office@das-eventcatering.at?subject=Das Eventcatering - Anfrage für Ballcatering&body=" +
      encodeURIComponent(emailBody);
  }
  sendMail();
}
function init() {
  EventListener(); //alle eventlistener starten
  formLogic.RenderResult(); // Initialisierung des Ergebnisses, anfangs state nach reload Rendern
}
init();




