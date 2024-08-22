document.addEventListener('DOMContentLoaded', () => { // aca primero tomamos los elementos que se encuentran en nuestro HTML con los getElementByID y el selector del quarry para la lista UL
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.querySelector('#navbar ul');

    if (navbar && hamburger && navbarLinks) { // en este caso usamos el && que significa que debe darme TRUE en los 3 casos si uno es false no funcionaria
        hamburger.addEventListener('click', () => { // agregamos un addEventListener en la hamburger que se activa con click
            navbarLinks.classList.toggle('active'); // este evento activa el modo visible y despliega mi lista
            hamburger.classList.toggle('active'); 
        });

        window.addEventListener('scroll', () => { //agrega un evento de scrolleo
            if (window.scrollY > 50) { // se activa si escroleamos en posicion de Y mas de 50 px
                navbar.classList.add('scrolled'); // esto añade a mi navbar una clase llamada scrolled
                navbarLinks.classList.add('inactive'); // escinderia lo que vendria hacer mostrar la lista de mi navbar
            } else { // en caso contrario
                navbar.classList.remove('scrolled'); // se removeria la clae llamada scrolled
                navbarLinks.classList.remove('active'); // y se removeria tambien la activación de mi lista de navbar
            }
        });
    }
});
