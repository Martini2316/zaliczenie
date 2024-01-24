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
    techTextField.innerHTML = "El sistema de aterrizaje de la primera etapa de los cohetes de SpaceX es una tecnología innovadora que permite la reutilización de la nave. Después de separarse del resto del lanzador, la primera etapa regresa controladamente a la Tierra, ejecutando maniobras precisas de aterrizaje en una plataforma marítima o terrestre. Este proceso revolucionario reduce significativamente los costos de las misiones espaciales, siendo un elemento clave en la estrategia de SpaceX para lograr una exploración espacial sostenible. A través de este enfoque, la empresa alcanza una eficiencia que no estaba presente en los sistemas de cohetes tradicionales.";
}
function techLi2(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'Los cohetes de SpaceX utilizan combustible líquido como método de propulsión, un elemento crucial en su tecnología de cohetes. Este tipo de combustible, compuesto generalmente por oxígeno líquido y queroseno, permite el funcionamiento controlado y eficiente de los motores de los cohetes. El proceso se basa en la combustión del combustible en combinación con un oxidante, generando potentes corrientes de gases de escape que proporcionan el impulso necesario para que el cohete alcance altas velocidades y entregue cargas útiles a la órbita. Este enfoque avanzado de la tecnología de cohetes permite eficiencia y precisión durante las misiones espaciales.';
    
}
function techLi3(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = "El sistema de navegación autónoma de SpaceX es una tecnología avanzada que permite que los cohetes realicen maniobras y navegación precisas durante el vuelo espacial. Utiliza una variedad de sensores, como cámaras, sensores y sistemas de GPS, para recopilar datos y monitorear la posición del cohete en tiempo real. Gracias a este sistema de navegación autónoma, los cohetes pueden corregir autónomamente su trayectoria y ajustar su posición, siendo crucial para garantizar el progreso seguro y eficiente de las misiones espaciales. Este enfoque avanzado de navegación permite a los cohetes de SpaceX alcanzar órbitas previstas y aterrizar con una precisión sin precedentes.";
}
function techLi4(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = 'La integración de la tecnología de la información en los cohetes de SpaceX juega un papel crucial en la gestión y optimización de las misiones espaciales. A través de sistemas avanzados de información, análisis de datos e inteligencia artificial, la empresa puede monitorear y controlar los movimientos de los cohetes en tiempo real. Esta combinación tecnológica permite una planificación precisa de la ruta de vuelo, la optimización del consumo de combustible y una respuesta rápida a las condiciones meteorológicas cambiantes, contribuyendo en última instancia al éxito y la eficiencia de cada misión espacial.';
}
function techLi5(){
    techTextField.innerHTML = '';
    techTextField.innerHTML = "El sistema de comunicación por satélite de SpaceX, representado por proyectos como Starlink, es una tecnología innovadora que permite la entrega global de Internet de alta velocidad. El uso de constelaciones de pequeños satélites permite la prestación de servicios de comunicación a nivel mundial, incluso en áreas con acceso limitado a la infraestructura de telecomunicaciones tradicional. Este sistema avanzado de comunicación abre nuevas posibilidades para la conectividad global y se convierte en un elemento clave en la exploración espacial contemporánea, con el potencial de tener un impacto significativo en las conexiones de Internet a nivel mundial.";
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





