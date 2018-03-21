window.addEventListener('scroll', (event) => {
    if(scrollY>0){
        let div1 = document.getElementById("section1")
        div1.style.animation = "show 0.6s forwards"
    }
});