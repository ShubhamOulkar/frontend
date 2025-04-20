const toggleBtn = document.getElementById("mobile-toggle");
const navigation = document.querySelector(".nav__list");
toggleBtn.addEventListener("click", ()=>{
    navigation.classList.toggle("open");
})