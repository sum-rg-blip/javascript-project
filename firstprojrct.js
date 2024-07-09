let light=document.querySelector("#light")
let onbtn=document.querySelector("#onbtn")
let offbtn=document.querySelector("#offbtn")
onbtn.addEventListener("click" , function(){
  light.style.backgroundColor ="blue"
  onbtn.style.backgroundColor ="red"
  offbtn.style.backgroundColor =""
})
offbtn.addEventListener("click" , function(){
  light.style.backgroundColor="white"
  offbtn.style.backgroundColor ="red"
  onbtn.style.backgroundColor = ""
})