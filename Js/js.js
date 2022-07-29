let menu = document.querySelector('#menu');
let navbar =document.querySelector('#info');

menu.onclick = () => {
    menu.classList.toggle('fa-x')
    navbar.classList.toggle('show')
}
