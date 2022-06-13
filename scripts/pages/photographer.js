//Mettre le code JavaScript lié à la page photographer.html
const contact_button = document.querySelector('.contact_button');
const photograph_header = document.querySelector('.photograph-header');
const div_infos = document.createElement('div');
div_infos.setAttribute('class',"photograph-header_infos_container");
const photographer = photograph_header.insertBefore(div_infos, contact_button);

// urlParam = new URLSearchParams(window.location.href);
// console.log(urlParam.get("id"));
// console.log(window.location);

/*On récupère les infos des photographes */
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "./photographers.json", true);
xhttp.send();
console.log(xhttp.responseText);

// const response = JSON.parse(xhttp.responseText);
// for(i=0;i<response.lenght;i++){
//     response[i][id] = 
// }
