//On récupère les information du photographe
var photographer_id;
var paramString = window.location.href.split('?')[1];
var queryString = new URLSearchParams(paramString);
var display_menu_trier_par = false;
var n=0;

for (let param of queryString.entries()) {
    photographer_id = param[1];
}
/*On récupère les infos des photographes */
var xhttp = new XMLHttpRequest();

xhttp.open("GET", "./data/photographers.json", false);
xhttp.send();
var photographer_infos;
const response = JSON.parse(xhttp.responseText);
response["photographers"].forEach( p => {
    if(p.id == photographer_id){
      photographer_infos = p;
    }});

/*On charge le contenu de la page */

/*Le nom du photographe dans le modal */
document.querySelector(".modal-photographer-name").textContent = photographer_infos["name"];

/*Bloc/Header informations */
const contact_button = document.querySelector('.contact_button');
const photograph_header = document.querySelector('.photograph-header');
const div_infos = document.createElement('div');
const div_button = document.createElement('div');
const div_photo = document.createElement('div');

/*Création du contenu informations */
const name_container = document.createElement('h1');
name_container.textContent = photographer_infos["name"];
const location_container = document.createElement('div');
location_container.textContent = photographer_infos['city']+", "+photographer_infos["country"];
const tagline_container = document.createElement('div');
tagline_container.textContent = photographer_infos['tagline'];

/*Création du contenu photo de profil */
const photo_container = document.createElement("img");

photo_container.setAttribute("src","./assets/photographers/"+photographer_infos['portrait']);
photo_container.setAttribute("alt",photographer_infos['name']);

div_infos.appendChild(name_container);
div_infos.appendChild(location_container);
div_infos.appendChild(tagline_container);
div_button.appendChild(contact_button);
div_photo.appendChild(photo_container);
photograph_header.appendChild(div_infos);
photograph_header.appendChild(div_button);
photograph_header.appendChild(div_photo);