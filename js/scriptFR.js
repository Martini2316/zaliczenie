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
    techTextField.innerHTML = "Le système d'atterrissage de la première étape des fusées SpaceX est une technologie révolutionnaire qui permet la réutilisation de la fusée. Après s'être séparée du reste du lanceur, la première étape retourne sur Terre en effectuant des manœuvres d'atterrissage précises sur une plateforme maritime ou terrestre. Ce processus innovant réduit significativement les coûts des missions spatiales, constituant un élément clé de la stratégie de SpaceX pour l'exploration spatiale durable. Grâce à cette approche, la société atteint une efficacité absente dans les systèmes de fusées traditionnels.";
}
function techLi2(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = "Les fusées SpaceX utilisent du carburant liquide comme méthode de propulsion, un élément crucial dans leur technologie de fusée. Ce type de carburant, généralement composé d'oxygène liquide et de kérosène, permet un fonctionnement contrôlé et efficace des moteurs de fusée. Le fonctionnement repose sur la combustion du carburant en combinaison avec un oxydant, générant de puissants jets de gaz d'échappement, fournissant la poussée nécessaire pour que la fusée atteigne des vitesses élevées et livre des charges utiles en orbite. Cette approche avancée de la technologie des fusées permet l'efficacité et la précision lors des missions spatiales.";
    
}
function techLi3(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = "Le système de navigation autonome de SpaceX est une technologie avancée qui permet aux fusées d'effectuer des manœuvres et une navigation précises pendant le vol spatial. Il utilise divers capteurs tels que des caméras, des capteurs et des systèmes GPS pour collecter des données et surveiller en temps réel la position de la fusée. Grâce à ce système de navigation autonome, les fusées peuvent corriger automatiquement leur trajectoire et ajuster leur position, essentiel pour assurer le progrès sûr et efficace des missions spatiales. Cette approche de navigation avancée permet aux fusées SpaceX d'atteindre des orbites prévues et d'atterrir avec une précision sans précédent.";
}
function techLi4(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = "L'intégration de la technologie de l'information dans les fusées SpaceX joue un rôle crucial dans la gestion et l'optimisation des missions spatiales. Grâce aux systèmes d'information avancés, à l'analyse des données et à l'intelligence artificielle, la société peut surveiller et contrôler les mouvements des fusées en temps réel. Cette combinaison technologique permet une planification précise de la trajectoire de vol, une optimisation de la consommation de carburant et une réponse rapide aux conditions météorologiques changeantes, contribuant finalement au succès et à l'efficacité de chaque mission spatiale.";
}
function techLi5(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = "Le système de communication par satellite de SpaceX, représenté par des projets tels que Starlink, est une technologie innovante permettant la fourniture mondiale d'internet à haut débit. L'utilisation de constellations de petits satellites permet la fourniture de services de communication à l'échelle mondiale, même dans des zones avec un accès limité à l'infrastructure traditionnelle de télécommunications. Ce système de communication avancé ouvre de nouvelles possibilités pour la connectivité mondiale et devient un élément clé de l'exploration spatiale contemporaine, avec le potentiel d'avoir un impact significatif sur les connexions internet mondiales.";
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





