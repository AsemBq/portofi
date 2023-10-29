document.querySelector("li.AboutMe").addEventListener("click",()=>{
    document.querySelector(".countainer nav ul li.active").classList.remove("active")
    document.querySelector(".AboutMe").classList.add('active')
    document.querySelector(".sections section.active").classList.remove("active")
    document.querySelector("section.AboutMe").classList.add('active')
    
    console.log("ok1")
})

document.querySelector("li.MySkilles").addEventListener("click",()=>{
    document.querySelector(".countainer nav ul li.active").classList.remove("active");
    document.querySelector(".MySkilles").classList.add('active')
    document.querySelector(".sections section.active").classList.remove("active")
    document.querySelector('section.Tecnology').classList.add('active')
    console.log("ok2")
})

document.querySelector("li.MyProject").addEventListener("click",()=>{
    document.querySelector(".countainer nav ul li.active").classList.remove("active");
    document.querySelector(".MyProject").classList.add('active')
    document.querySelector(".sections section.active").classList.remove("active")
    document.querySelector('section.MyProject').classList.add('active')
    console.log("ok3")
})