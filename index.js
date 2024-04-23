/* BOTONES ANTERIOR Y SIGUIENTE DE SECCION LUGARES */
document.addEventListener("DOMContentLoaded", function(){
    let pag1= document.getElementById("pag1");
    let pag2= document.getElementById("pag2");
    let siguientebtn = document.getElementById("siguiente");
    let anteriorbtn = document.getElementById("anterior");

        siguientebtn.addEventListener("click", function(){
        pag1.style.display= "none";
        pag1.style.visibility= "hidden";
        
        pag2.style.display= "flex";
        pag2.style.visibility= "visible";

        window.scrollTo(0, 0);
    })

    anteriorbtn.addEventListener("click", function(){
        pag2.style.display= "none";
        pag2.style.visibility= "hidden";

        pag1.style.display= "flex";
        pag1.style.visibility= "visible";

        window.scrollTo(0, 0);
    })
})