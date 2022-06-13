function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
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
        h2.textContent = name;
        div1.textContent = city+", "+country;
        div2.textContent = tagline;
        div3.textContent = price+"€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(div1);
        article.appendChild(div2);
        article.appendChild(div3);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}