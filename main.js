window.addEventListener('scroll', (event) => {
    if(scrollY>500){
         let img1 = document.getElementById("icon1")
         img1.style.animation = "show 1.5s forwards"

         let img2 = document.getElementById("icon2")
         img2.style.animation = "show 3s forwards"

         let img3 = document.getElementById("icon3")
         img3.style.animation = "show 4.5s forwards"

    }
})


;