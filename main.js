

window.addEventListener('scroll', (event) => {
    if(scrollY>500){
         let img1 = document.getElementById("icon1")
         img1.style.animation = "show 1.5s forwards"

         let img2 = document.getElementById("icon2")
         img2.style.animation = "show 3s forwards"

         let img3 = document.getElementById("icon3")
         img3.style.animation = "show 4.5s forwards"

    }

    if(scrollY>1200){
        let paragraph = document.getElementsByTagName("p")[0]
        paragraph.style.animation = "show 1.5s forwards"

        let image = document.getElementById("businessImage")
        image.style.animation = "show 3.5s forwards"
    }

    if(scrollY>2200){
        let form = document.getElementsByTagName("form")[0]
        form.style.animation = "show 2.5s forwards"

    }


})


let overlay = document.getElementById("overlay")
overlay.onclick = function() {
    let overlayText = document.getElementById("overlayText")
    overlayText.textContent = "No, not really."
    overlay.style.opacity = 1.0;
    overlay.style.animation = "spinDiv 1s forwards";

};


;