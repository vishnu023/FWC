const fallback={
 hero:{eyebrow:"A global community for purposeful growth",line1:"Connecting Visionaries.",line2:"Creating Prosperity.",line3:"Transforming Communities.",description:"FWC unites entrepreneurs, investors, institutions and communities to turn ambition into meaningful, sustainable impact."},
 ecosystem:{title:"The FWC Global Ecosystem",description:"Purpose-built pathways that connect people, ideas and opportunities across borders."},
 mission:{title:"India–Japan Mission 2030",description:"A strategic bridge connecting Japanese excellence with Indian opportunity for a shared, prosperous future."},
 feature:{title:"Yuva Shakti",description:"Equipping young people with quality education, leadership development and global exposure."},
 cta:{title:"The Future Is Built Together",description:"Join a borderless community shaping a more prosperous and sustainable world."}
};
let data=JSON.parse(localStorage.getItem("fwc-content")||"null")||{};
Object.entries(fallback).forEach(([k,v])=>data[k]={...v,...data[k]});
const labels={hero:"Hero section",ecosystem:"Ecosystem introduction",mission:"Mission 2030",feature:"Featured initiative",cta:"Closing call to action"};
function render(){document.getElementById("form").innerHTML=Object.entries(fallback).map(([group,fields])=>`<section class="cms-card"><h3>${labels[group]}</h3>${Object.keys(fields).map(key=>{const long=key==="description";return `<label class="field"><span>${key.replace(/([A-Z])/g," $1")}</span>${long?`<textarea data-group="${group}" data-key="${key}">${data[group][key]}</textarea>`:`<input data-group="${group}" data-key="${key}" value="${data[group][key].replaceAll('"',"&quot;")}">`}</label>`}).join("")}</section>`).join("")}
render();
function collect(){document.querySelectorAll("[data-group]").forEach(el=>data[el.dataset.group][el.dataset.key]=el.value)}
document.getElementById("save").onclick=()=>{collect();localStorage.setItem("fwc-content",JSON.stringify(data));const n=document.getElementById("notice");n.classList.add("show");setTimeout(()=>n.classList.remove("show"),3200)};
document.getElementById("export").onclick=()=>{collect();const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));a.download="fwc-content.json";a.click();URL.revokeObjectURL(a.href)};
document.getElementById("import").onchange=e=>{const r=new FileReader();r.onload=()=>{try{data=JSON.parse(r.result);localStorage.setItem("fwc-content",JSON.stringify(data));location.reload()}catch{alert("That file is not valid FWC content JSON.")}};r.readAsText(e.target.files[0])};
document.getElementById("reset").onclick=()=>{if(confirm("Reset all locally edited content?")){localStorage.removeItem("fwc-content");location.reload()}};
