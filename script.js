const cal=document.getElementById("calendar");
for(let i=1;i<=24;i++){
  const d=document.createElement("div");
  d.className="day";
  const img=document.createElement("img");
  img.src="images/day"+i+".png";
  img.onclick=()=>openDay(i);
  d.appendChild(img);
  cal.appendChild(d);
}

const owlBackdrop=document.getElementById("owlBackdrop");
const owlCloseBtn=document.getElementById("owlCloseBtn");

function showOwl(){
  owlBackdrop.style.display="flex";
  owlBackdrop.setAttribute("aria-hidden","false");
}

function hideOwl(){
  owlBackdrop.style.display="none";
  owlBackdrop.setAttribute("aria-hidden","true");
}

owlCloseBtn.onclick=hideOwl;
owlBackdrop.onclick=e=>{ if(e.target===owlBackdrop) hideOwl(); };
document.addEventListener("keydown",e=>{ if(e.key==="Escape") hideOwl(); });

function openDay(i){
  const today=new Date();
  const current=today.getDate();
  if(i>current){
    showOwl();
    return;
  }
  alert("Content for day "+i);
}
