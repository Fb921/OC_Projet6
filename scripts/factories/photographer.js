function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    /*Pourquoi créer le contenu de la page en js ?*/
    function getUserCardDOM() {
        /*On crée les éléments et leurs attributs*/
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.setAttribute("href","photographer.html?id="+id);
        const div = document.createElement('div');
        div.setAttribute('class',"article_img-container");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Fisheye Home Page");
        const h2 = document.createElement( 'h2' );
        const div1 = document.createElement( 'div' );
        div1.setAttribute("class", "location");
        const div2 = document.createElement( 'div' );
        div2.setAttribute("class", "tagline");
        const div3 = document.createElement( 'div' );
        div3.setAttribute("class", "price");

        /*On injecte du contenu dans ces éléments nouvellement créé*/
        h2.textContent = name;
        div1.textContent = city+", "+country;
        div2.textContent = tagline;
        div3.textContent = price+"€/jour";

        /*On défini la dépendances des éléments les uns des autres*/
        div.appendChild(img);
        link.appendChild(div);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(div1);
        article.appendChild(div2);
        article.appendChild(div3);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}