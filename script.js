const handPicker = document.createElement("div")
handPicker.innerHTML = "<span class='conocimientos-selector'>👉</span>"

const conocimientosItem = document.getElementsByClassName("conocimientos-item")
const proyects = document.getElementsByClassName("proyect")
const form = document.formContacto
const imgs = document.getElementsByTagName('img');
console.log(imgs);

for(let i = 0; i < imgs.length; i++){
    if(imgs[i].complete && imgs[i].naturalWidth != 0){
        imgs[i].style.opacity = 1;
    }
    imgs[i].onloadend = onImgLoad;
} 

function onImgLoad(e){
    e.target.style.opacity = 1; 
}




addListeners()

function addListeners (){

    const navButton = document.getElementsByClassName("navbar-toggler");
    const closeNavButton = document.getElementById("nav-mobile-close");

    navButton[0].addEventListener("click", showNav);
    closeNavButton.addEventListener("click", hideNav);

    // console.log(proyects.length)
    // for(let i = 0; i < conocimientosItem.length; i++){
    //     conocimientosItem[i].addEventListener('pointerenter', showPicker)
    //     //conocimientosItem[i].addEventListener('pointerleave', removePicker)
    // }
    for(let i = 0; i < proyects.length; i++){
        proyects[i].addEventListener('pointerenter', showProyectAside)
        proyects[i].addEventListener('pointerleave', hideProyectAside)
    }

    form.addEventListener('submit', validateForm)


}

function showPicker (e){
    console.log('show')
    let target = e.target
    let firstChild = target.firstChild
    target.insertBefore(handPicker, firstChild)
}

/*function removePicker (e){
    let target = e.target
    let child = target.firstChild
    target.removeChild(child)
}*/

function showProyectAside(e){
    console.log("listo")
    let target = e.target
    let childs = target.children
    console.log(childs)

    for (let i = 0; i < childs.length; i++){
        if(childs[i].classList.contains("proyect-aside")){
            console.log("listo")
            childs[i].classList.remove("out")
            childs[i].classList.add("in")
        }
    }
}

function showNav(e){
    const navMenu = document.getElementById("navMobileMenu");

    navMenu.classList.add("active");
}

function hideNav(e){
    const navMenu = document.getElementById("navMobileMenu");

    navMenu.classList.remove("active");
    navMenu.classList.add("closing");

    navMenu.addEventListener("animationend", () => {
        navMenu.classList.remove("closing");
    })
}

function hideProyectAside(e){
    console.log("listo")
    let target = e.target
    let childs = target.children
    console.log(childs)

    for (let i = 0; i < childs.length; i++){
        if(childs[i].classList.contains("proyect-aside")){
            console.log("listo")
            childs[i].classList.remove("in")
            childs[i].classList.add("out")

        }
    }
}

function validateForm (e){
    if(!form.checkValidity()){
        e.preventDefault()
        e.stopPropagation()
    }

    form.classList.add('was-validated')
}