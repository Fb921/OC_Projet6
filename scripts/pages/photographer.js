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

/* La galerie d'images */
//Ces variables permettront de faire tourner les images dans l'éventail d'image
var gallery_images = [];
var current_img = 0;
var total_likes = 0;

const gallery_container = document.createElement('div');
gallery_container.setAttribute("class","gallery_container");
for(let i=0;i<response['media'].length;i++){
    if(photographer_id == response["media"][i]["photographerId"]){
        gallery_images[gallery_images.length] = {"src":"./assets/images/"+response["media"][i]["image"]};
        let article = document.createElement("article");
        article.setAttribute("class","gallery_element");
        let img_container = document.createElement("div");
        img_container.setAttribute("class","gallery_img-container");
        let img = document.createElement("img");
        img.setAttribute('src',"./assets/images/"+response["media"][i]["image"]);
        img.setAttribute('class',"gallery_img");
        img.setAttribute("alt","Lilac breasted roller, closeup view");
        img.setAttribute('data-position',gallery_images.length - 1);
        img.onclick = function(){display_imgPopup(img)};
        let desc_container = document.createElement('div');
        desc_container.setAttribute("class","desc_container");
        let title = document.createElement("div");
        title.textContent = response["media"][i]['title'];
        let like_container = document.createElement("div");
        like_container.setAttribute("class","like_container");
        let number_like = document.createElement("div");
        number_like.textContent = response["media"][i]["likes"];
        total_likes += response["media"][i]["likes"];
        let heart = document.createElement("div");
        heart.setAttribute('aria-label',"likes");
        heart.innerHTML = "<i class='fas fa-heart'></i>";
        like_container.appendChild(number_like);
        like_container.appendChild(heart);
        desc_container.appendChild(title);
        desc_container.appendChild(like_container);
        img_container.appendChild(img);
        article.appendChild(img_container);
        article.appendChild(desc_container);
        gallery_container.appendChild(article);
    }
}
document.querySelector("main").appendChild(gallery_container);

/* Le petit bloc d'infos*/
document.querySelector('.total_likes').textContent = total_likes;
document.querySelector('.price_container').textContent = photographer_infos['price'];

/* POur afficher la popup d'images */
function display_imgPopup(e){
    document.querySelector(".img-popup_img-container > img").setAttribute('src',e.src);
    document.querySelector(".img-popup_container").style.display = 'flex';
    current_img = parseInt(e.dataset.position);
    console.log("current position : "+current_img);
}

/*Pour fermer la popup d'images */
function close_imgPopup(){
    document.querySelector(".img-popup_container").style.display = 'none';
}

function previous_img(){
    if(current_img > 0){
        current_img--;
        document.querySelector(".img-popup_img-container > img").setAttribute('src',gallery_images[current_img].src);
    }
}
function next_img(){
    if(current_img < gallery_images.length-1){
        current_img++;
        document.querySelector(".img-popup_img-container > img").setAttribute('src',gallery_images[current_img]["src"]);
    }
}

function display_trier_par_menu(){
    display_menu_trier_par = !display_menu_trier_par;
    console.log(document.querySelector('.option_container'));
    document.querySelector('.option_container').dataset['menu'] = ""+display_menu_trier_par;
    let i, y;
    if(n%2 == 0){
        i = 0;y=1;
    }else{
        i = 1;y=0;
    }
    document.querySelectorAll('.option_container > .option1 > span + span > i')[i].style.display = "inline";
    document.querySelectorAll('.option_container >  .option1 > span + span > i')[y].style.display = "none";
    n++;
}