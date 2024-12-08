let text = document.getElementById('text')
let fulles = document.getElementById('fulles')

window.addEventListener('scroll', ()=> {
    let value= window.scrollY
    text.style.marginTop= value * 1.5 + 'px'
    fulles.style.top= value * 0.5 + 'px'
})

document.getElementById("a").addEventListener("click",amaga)
document.getElementById("bm").addEventListener("click",amaga2)
document.getElementById("c").addEventListener("click",amaga3)

function amaga (){
    var inf=document.getElementById("info1")
    if(inf.style.display==="none") inf.style.display="inline-block"
    else inf.style.display="none"
}
function amaga2 (){
    var inf=document.getElementById("info2")
    if(inf.style.display==="none") inf.style.display="inline-block"
    else inf.style.display="none"
}
function amaga3 (){
    var inf=document.getElementById("info3")
    if(inf.style.display==="none") inf.style.display="inline-block"
    else inf.style.display="none"
}
