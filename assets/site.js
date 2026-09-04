const F=new Set();

const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function draw(){
 const rows=P.filter(p=>!F.size||F.has(p.cat));
 document.getElementById("plist").innerHTML=rows.map(p=>
  '<article class="post" style="--pc:'+PC[p.cat]+'" data-n="'+p.n+'">'
  +'<div class="gut">'+p.date+'</div><div>'
  +'<button class="ptitle" aria-expanded="false">'+esc(p.title)+'</button>'
  +'<div class="pmeta"><span class="pcat">'+p.cat+'</span>'
  +p.tags.map(t=>'<span class="ptag">'+t+'</span>').join("")
  +'<span class="pn">'+p.chars+'字</span></div>'
  +'<div class="ptext"><p>'+esc(p.text)+'</p></div></div></article>').join("");
 document.getElementById("pcount").textContent=rows.length+" / "+P.length;
 document.querySelectorAll(".post").forEach(a=>{
  const b=a.querySelector(".ptitle");
  b.addEventListener("click",()=>{const o=a.classList.toggle("open");b.setAttribute("aria-expanded",o);});
 });
}
const TABS=[...document.querySelectorAll(".tab")];
function show(id,push){
 TABS.forEach(t=>t.setAttribute("aria-selected",t.dataset.p===id));
 document.querySelectorAll(".panel").forEach(pn=>pn.hidden=(pn.id!=="p-"+id));
 if(push){history.replaceState(null,"","#"+id);
  const bar=document.querySelector(".tabbar");
  if(bar.getBoundingClientRect().top<0)bar.scrollIntoView();}
}
TABS.forEach(t=>t.addEventListener("click",()=>show(t.dataset.p,true)));
const h=location.hash.replace("#","");
if(TABS.some(t=>t.dataset.p===h))show(h,false);

document.querySelectorAll(".chip").forEach(c=>{
 c.setAttribute("aria-pressed","false");
 c.addEventListener("click",()=>{const v=c.dataset.v;
  if(F.has(v))F.delete(v);else F.add(v);
  c.setAttribute("aria-pressed",F.has(v));draw();});
});
draw();
