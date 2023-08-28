const navSel = document.querySelectorAll(".nav_menu")

const mainSel = document.querySelectorAll(".main_sel")
const s1 = document.querySelectorAll(".s1")
const s2 = document.querySelectorAll(".s2")
const s3 = document.querySelectorAll(".s3")
const s4 = document.querySelectorAll(".s4")
const trailerSel = document.querySelectorAll(".main_trailer_container")

const secPopCon = document.getElementById("sec_pop_top_title_pop")
const secPreCon = document.getElementById("sec_pop_top_title_pre")
const secTitleSel = document.querySelectorAll(".title_sel")
const secPop = document.getElementById("sec_pop_pop")
const secPre = document.getElementById("sec_pop_pre")

const shopSliderL = document.getElementById("sec_shop_frame_btn_left")
const shopSliderR = document.getElementById("sec_shop_frame_btn_right")
//중단 공룡이 상점 사이드바
shopSliderR.addEventListener('click',() =>{
  if(shopSliderR.classList.contains("act")){  
    shopSliderR.classList.remove("act")    
    shopSliderL.classList.add("act")
    let slideN = shopSliderL.parentNode.childNodes[7].childNodes[3].getBoundingClientRect();
    let slideC = shopSliderL.parentNode.childNodes[7].getBoundingClientRect();
    shopSliderL.parentNode.childNodes[7].style.left = -slideN.left + slideC.left - 20 + "px";
    shopSliderL.parentNode.childNodes[7].childNodes[7].classList.add("frameSel")
    shopSliderL.parentNode.childNodes[7].childNodes[1].classList.remove("frameSel")
  }  
})
shopSliderL.addEventListener('click',() =>{
  if(shopSliderL.classList.contains("act")){
    shopSliderL.classList.remove("act")    
    shopSliderR.classList.add("act")
    shopSliderL.parentNode.childNodes[7].style.left = -20 + "px";
    shopSliderL.parentNode.childNodes[7].childNodes[1].classList.add("frameSel")
    shopSliderL.parentNode.childNodes[7].childNodes[7].classList.remove("frameSel")
  }
})



//상단 nav바 sublist 
navSel.forEach(ns => {
  ns.addEventListener('mouseover',() => {
    ns.classList.add('sel')
  })
  ns.addEventListener('mouseout',() => {
    ns.classList.remove('sel')
  })
})
//메인 프리뷰 페이지
mainSel.forEach(ms => {
  ms.addEventListener('click',() => {
    mainSel.forEach(item => item.classList.remove("sel"))
    trailerSel.forEach(ttem => ttem.classList.remove("sel"))
    if(ms.classList.contains("s1")){
      console.log('1');
      s1.forEach(s1tem => s1tem.classList.add("sel"))
    } else if(ms.classList.contains("s2")){
      console.log('2');
      s2.forEach(s2tem => s2tem.classList.add("sel"))
    } else if(ms.classList.contains("s3")){
      console.log('3');
      s3.forEach(s3tem => s3tem.classList.add("sel"))
    } else if(ms.classList.contains("s4")){
      console.log('4');
      s4.forEach(s4tem => s4tem.classList.add("sel"))
    }
  })
})
//메인 인기/예정작
window.onload=function(){
  if(secPopCon.classList.contains('sel')){
    secPop.classList.add('sel')
    if(secPre.classList.contains('sel')){
      secPre.classList.remove('sel')
    }
  } else {
    if(secPop.classList.contains('sel')){
      secPop.classList.remove('sel')
    }
    secPre.classList.add('sel')
  }
}
let slideOut = {
  transform: ["translate3d(0, 100px, 0)"] 
}
let slideOpt = {
  duration: 600
}
secTitleSel.forEach(ss => {
  ss.addEventListener('click',() => {
    secTitleSel.forEach(item => item.classList.remove("sel"))
    ss.classList.add("sel")
    if(secPopCon.classList.contains('sel')){
      secPop.classList.add('sel')
      if(secPre.classList.contains('sel')){
        secPre.classList.remove('sel')
        secPre.animate(slideOut, slideOpt);
      }
    } else {
      if(secPop.classList.contains('sel')){
        secPop.classList.remove('sel')
        secPop.animate(slideOut, slideOpt);
      }
      secPre.classList.add('sel')
    }
  })
})
