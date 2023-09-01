const navSel = document.querySelectorAll(".nav_menu")
const navBar = document.getElementById("nav_container")

//상단 nav바 sublist 
navSel.forEach(ns => {
  ns.addEventListener('mouseover',() => {
    ns.classList.add('sel')
  })
  ns.addEventListener('mouseout',() => {
    ns.classList.remove('sel')
  })
})

window.addEventListener('scroll',(item) => {
  if(item.scrollY <= 180){
    navBar.style.backgroundImage = 'linear-gradient(0.25turn, white, white)';
  } else {
    function navC() {
    const rColor = Math.ceil(255 - window.scrollY / 25);
    const gColor = 255;
    const bColor = Math.ceil(255 - window.scrollY / 12);
    return `rgb(${rColor},${gColor},${bColor})`;
    }
    const navColor = navC();
    navBar.style.backgroundColor = navColor;
  }
})