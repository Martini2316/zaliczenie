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
    techTextField.innerHTML = "The landing system of the first stage of SpaceX rockets is a breakthrough technology that enables the reuse of the rocket. After separating from the rest of the launcher, the first stage returns to Earth, executing precise landing maneuvers on a maritime or land platform. This innovative process significantly reduces the costs of space missions, serving as a key element in SpaceX's strategy for sustainable space exploration. Through this approach, the company achieves efficiency not present in traditional rocket systems.";
}
function techLi2(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'SpaceX rockets utilize liquid fuel as a propulsion method, a crucial element in their rocket technology. This type of fuel, typically composed of liquid oxygen and kerosene, allows for controlled and efficient operation of rocket engines. The functioning relies on the combustion of fuel in combination with an oxidizer, generating powerful streams of exhaust gases, providing the necessary thrust for the rocket to attain high speeds and deliver payloads into orbit. This advanced approach to rocket technology enables efficiency and precision during space missions.';
    
}
function techLi3(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = "SpaceX's autonomous navigation system is an advanced technology that enables rockets to perform precise maneuvers and navigation during spaceflight. It employs a variety of sensors, such as cameras, sensors, and GPS systems, to collect data and monitor the rocket's position in real-time. Thanks to this autonomous navigation system, rockets can autonomously correct their trajectory and adjust their position, crucial for ensuring the safe and efficient progress of space missions. This advanced navigation approach allows SpaceX rockets to reach intended orbits and land with unprecedented precision.";
}
function techLi4(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'The integration of information technology in SpaceX rockets plays a crucial role in the management and optimization of space missions. Through advanced information systems, data analysis, and artificial intelligence, the company can monitor and control rocket movements in real-time. This technological combination allows for precise flight route planning, fuel consumption optimization, and rapid response to changing weather conditions, ultimately contributing to the success and efficiency of each space mission.';
}
function techLi5(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = "SpaceX's satellite communication system, represented by projects like Starlink, is an innovative technology enabling global delivery of high-speed internet. The use of constellations of small satellites allows the provision of communication services on a global scale, even in areas with limited access to traditional telecommunications infrastructure. This advanced communication system opens new possibilities for global connectivity and becomes a key element in contemporary space exploration, with the potential for a significant impact on global internet connections.";
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





