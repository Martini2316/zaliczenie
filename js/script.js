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

//przeniesienie uzytkownika na ukryte strony po wpisaniu 'spacex' lub 'martin'
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
    techTextField.innerHTML = 'System lądowania pierwszego stopnia rakiet SpaceX to przełomowa technologia, która umożliwia rakiecie wielokrotne użycie. Po oderwaniu się od reszty nośnika, pierwszy stopień powraca kontrolowanie na Ziemię, wykonując precyzyjne manewry lądowania na platformie morskiej lub lądowej. Ten innowacyjny proces znacznie obniża koszty misji kosmicznych, stanowiąc kluczowy element strategii SpaceX w dążeniu do zrównoważonej eksploracji kosmosu. Dzięki temu podejściu firma osiąga efektywność, której wcześniej nie było w tradycyjnych systemach rakietowych.';
}
function techLi2(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'Rakiety SpaceX wykorzystują paliwo ciekłe jako środek napędowy, co stanowi kluczowy element ich technologii rakietowej. Ten rodzaj paliwa, zazwyczaj składający się z ciekłego tlenu i kerozyny, umożliwia kontrolowaną i efektywną pracę silników rakietowych. Działanie opiera się na spalaniu paliwa w kombinacji z utleniaczem, generując potężne strumienie gazów wylotowych, co zapewnia niezbędny pęd, umożliwiając rakieta osiąganie wysokich prędkości i dostarczanie ładunków na orbitę. To zaawansowane podejście do technologii rakietowej pozwala na osiągnięcie efektywności i precyzji w trakcie misji kosmicznych.';
    
}
function techLi3(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'Autonomiczny system nawigacyjny SpaceX to zaawansowana technologia, która umożliwia rakietom precyzyjne manewry i nawigację podczas lotu kosmicznego. Wykorzystuje on szereg sensorów, takich jak kamery, czujniki, a także systemy GPS, aby zbierać dane i monitorować położenie rakiety w czasie rzeczywistym. Dzięki temu autonomicznemu systemowi nawigacyjnemu rakiety są w stanie samodzielnie korygować trajektorię i dostosowywać swoje położenie, co jest kluczowe w celu zapewnienia bezpiecznego i efektywnego przebiegu misji kosmicznych. To zaawansowane podejście do nawigacji sprawia, że rakiety SpaceX są w stanie osiągać celowe orbity i lądować z niespotykaną precyzją.';
}
function techLi4(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'Integracja z technologią informatyczną w rakietach SpaceX odgrywa kluczową rolę w zarządzaniu i optymalizacji misji kosmicznych. Za pomocą zaawansowanych systemów informatycznych, analizy danych oraz sztucznej inteligencji, firma jest w stanie monitorować i sterować ruchem rakiet w czasie rzeczywistym. To połączenie technologii pozwala na dokładne planowanie tras lotów, optymalizację zużycia paliwa oraz szybką reakcję na zmienne warunki atmosferyczne, co w efekcie przyczynia się do sukcesu i efektywności każdej misji kosmicznej.';
}
function techLi5(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'System łączności satelitarnej SpaceX, reprezentowany m.in. przez projekt Starlink, stanowi innowacyjną technologię umożliwiającą globalne dostarczanie szybkiego internetu. Zastosowanie constellations of small satellites pozwala na świadczenie usług komunikacyjnych na skalę światową, nawet w obszarach o ograniczonym dostępie do tradycyjnej infrastruktury telekomunikacyjnej. Ten zaawansowany system łączności otwiera nowe możliwości komunikacyjne i staje się kluczowym elementem współczesnej eksploracji kosmosu, mając potencjał znaczącego wpływu na globalne połączenia internetowe.';
}

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





