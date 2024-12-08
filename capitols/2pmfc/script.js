

function amaga (){
    var inf=document.getElementById("aigua_inf")
    if(inf.style.display==="none") inf.style.display="inline-block"
    else inf.style.display="none"
}
document.getElementById("aigua").addEventListener("click",amaga)
document.getElementById("boto").addEventListener("click",amaga2)

function amaga2 (){
    var inf=document.getElementById("info2")
    if(inf.style.display==="none") inf.style.display="inline-block"
    else inf.style.display="none"
}