var loader = document.getElementById('loader');
var homePage = document.getElementById('homepage');
var historyPage = document.getElementById('history');
var technologyPage = document.getElementById('technology');
var fl1Page = document.getElementById('rockets-fl1');
var fl9Page = document.getElementById('rockets-fl9');
var flhPage = document.getElementById('rockets-flH');
var starshipPage = document.getElementById('rockets-StarShip');
var techUse = document.getElementById('Technology-usage');
var productionPage = document.getElementById('production-process');
var adaptPage = document.getElementById('adapt');
var missionPage = document.getElementById('mission-plans');
var missionGalleryPage = document.getElementById('gallery');

var returnVideo1 = document.getElementById('techUse1');
var returnVideo2 = document.getElementById('techUse2');
var returnVideo3 = document.getElementById('techUse3');
var returnVideo4 = document.getElementById('hideTiles');
var returnVideo5 = document.getElementById('showTiles');


var techTextField = document.getElementById('techTextField');

/*=============== POKAZ MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')

        toggle.classList.toggle('show-icon')
    })
}
 
showMenu('nav-toggle','nav-menu');


/*=============== LADOWANIE STRONY ===============*/
function Loader(){

    window.location.hash = 'homePage';

    let homePagebackground = document.getElementById('homePage_container');

    homePagebackground.style.backgroundImage = "url('assets/SpaceX.mp4')";
    homePagebackground.style.backgroundSize = "cover";
    homePagebackground.style.backgroundPosition = 'center';

}

/*=============== TECH LIST TEXT CHANGE ===============*/

let counter = 0;
function addCounter(){
    counter++;
    if(counter > 4){
        counter = 0;
        countCheck();
    }
    else countCheck();
    
}
function removeCounter(){
    counter--;
    if(counter < 0){
        counter = 4;
        countCheck();
    }
    else countCheck();
}
function countCheck(){
    switch (counter) {
        case 0:
            techLi1();
        break;
        case 1:
            techLi2();
        break;
        case 2:
            techLi3();
        break;
        case 3:
            techLi4();
        break;    
        case 4:
            techLi5();
        break;    
        default:
        break;
    }
}

function techLi1(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'Das Landesystem der ersten Stufe der SpaceX-Raketen ist eine bahnbrechende Technologie, die es der Rakete ermöglicht, mehrfach verwendet zu werden. Nach dem Abtrennen vom Rest des Trägers kehrt die erste Stufe kontrolliert zur Erde zurück und führt präzise Landemanöver auf einer maritimen oder landgestützten Plattform durch. Dieser innovative Prozess reduziert signifikant die Kosten für Raumfahrtmissionen und stellt einen Schlüsselelement in der Strategie von SpaceX für nachhaltige Weltraumforschung dar. Durch diesen Ansatz erreicht das Unternehmen eine Effizienz, die in herkömmlichen Raketensystemen zuvor nicht vorhanden war.';
}
function techLi2(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'SpaceX-Raketen nutzen flüssigen Treibstoff als Antriebsmethode, ein entscheidendes Element ihrer Raketen technologie. Diese Art von Treibstoff, in der Regel bestehend aus flüssigem Sauerstoff und Kerosin, ermöglicht den kontrollierten und effizienten Betrieb der Raketenmotoren. Die Funktionsweise basiert auf der Verbrennung des Treibstoffs in Kombination mit einem Oxidationsmittel, was leistungsstarke Ströme von Abgasen erzeugt und den notwendigen Schub für die Rakete liefert, um hohe Geschwindigkeiten zu erreichen und Nutzlasten in den Orbit zu befördern. Dieser fortschrittliche Ansatz zur Raketentechnologie ermöglicht Effizienz und Präzision während Raumfahrtmissionen.';
    
}
function techLi3(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'Das autonome Navigationssystem von SpaceX ist eine fortschrittliche Technologie, die es Raketen ermöglicht, präzise Manöver und Navigation während des Raumflugs durchzuführen. Es verwendet eine Vielzahl von Sensoren wie Kameras, Sensoren und GPS-Systeme, um Daten zu sammeln und die Position der Rakete in Echtzeit zu überwachen. Dank dieses autonomen Navigationssystems können Raketen autonom ihre Flugbahn korrigieren und ihre Position anpassen, was entscheidend ist, um den sicheren und effizienten Verlauf von Raumfahrtmissionen zu gewährleisten. Dieser fortschrittliche Navigationsansatz ermöglicht es SpaceX-Raketen, beabsichtigte Umlaufbahnen zu erreichen und mit beispielloser Präzision zu landen.';
}
function techLi4(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'Die Integration von Informationstechnologie in SpaceX-Raketen spielt eine entscheidende Rolle bei der Verwaltung und Optimierung von Raumfahrtmissionen. Durch fortschrittliche Informationssysteme, Datenanalyse und künstliche Intelligenz kann das Unternehmen Raketenbewegungen in Echtzeit überwachen und steuern. Diese technologische Kombination ermöglicht präzise Routenplanung, Optimierung des Treibstoffverbrauchs und schnelle Reaktion auf sich ändernde Wetterbedingungen, was letztendlich zum Erfolg und zur Effizienz jeder Raumfahrtmission beiträgt.';
}
function techLi5(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'Das Satellitenkommunikationssystem von SpaceX, vertreten durch Projekte wie Starlink, ist eine innovative Technologie, die die weltweite Bereitstellung von Hochgeschwindigkeitsinternet ermöglicht. Der Einsatz von Konstellationen kleiner Satelliten ermöglicht die Bereitstellung von Kommunikationsdiensten auf globaler Ebene, selbst in Gebieten mit eingeschränktem Zugang zur traditionellen Telekommunikationsinfrastruktur. Dieses fortschrittliche Kommunikationssystem eröffnet neue Möglichkeiten für die globale Konnektivität und wird zu einem Schlüsselelement in der zeitgenössischen Weltraumforschung, mit dem Potenzial für eine erhebliche Auswirkung auf globale Internetverbindungen.';
}

function sprawdzKlawisz(event) {
    var wpisanyTekst = String.fromCharCode(event.keyCode).toLowerCase();
    window.buffer = (window.buffer || '') + wpisanyTekst;
    if (window.buffer.endsWith('spacex')) {
        window.location.href = 'https://martini2316.github.io/space-invaders/';
        window.buffer = '';
    }
    else if (window.buffer.endsWith('martin')) {
        window.location.href = 'https://martini2316.github.io/martin-portfolio/';
        window.buffer = '';
    }
}
document.addEventListener('keypress', sprawdzKlawisz);

/*=============== LOADER ===============*/
let delay = 2000;

function hidetiles(){
    returnVideo1.style.display = 'none';
    returnVideo2.style.display = 'none';
    returnVideo3.style.display = 'none';
    returnVideo4.style.display = 'none';
    returnVideo5.style.display = 'block';

}
function showtiles(){
    returnVideo1.style.display = 'block';
    returnVideo2.style.display = 'block';
    returnVideo3.style.display = 'block';
    returnVideo4.style.display = 'block';
    returnVideo5.style.display = 'none';
}

function appearHistory(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'block';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearHomePage(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'block';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearTechnologyPage(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'block';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearFl1Page(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'block'
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearFl9Page(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'block';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearFlhPage(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'block';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearStarshipPage(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'block';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearTechUse(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'block';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearProduction(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'block';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearAdapt(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'block';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearMissionPlans(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'block';
        missionGalleryPage.style.display = 'none';
    }, delay)
}
function appearMissionGallery(){
    loader.style.left = '0';
    setTimeout(function() {
        loader.style.left = '-100%';
        homePage.style.display = 'none';
        historyPage.style.display = 'none';
        technologyPage.style.display = 'none';
        fl1Page.style.display = 'none';
        fl9Page.style.display = 'none';
        flhPage.style.display = 'none';
        starshipPage.style.display = 'none';
        techUse.style.display = 'none';
        productionPage.style.display = 'none';
        adaptPage.style.display = 'none';
        missionPage.style.display = 'none';
        missionGalleryPage.style.display = 'block';
    }, delay)
}





