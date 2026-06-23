const defaults={
 hero:{eyebrow:"A global community for purposeful growth",line1:"Connecting Visionaries.",line2:"Creating Prosperity.",line3:"Transforming Communities.",description:"FWC unites entrepreneurs, investors, institutions and communities to turn ambition into meaningful, sustainable impact."},
 ecosystem:{title:"The FWC Global Ecosystem",description:"Purpose-built pathways that connect people, ideas and opportunities across borders."},
 mission:{title:"India–Japan Mission 2030",description:"A strategic bridge connecting Japanese excellence with Indian opportunity for a shared, prosperous future."},
 feature:{title:"Yuva Shakti",description:"Equipping young people with quality education, leadership development and global exposure."},
 cta:{title:"The Future Is Built Together",description:"Join a borderless community shaping a more prosperous and sustainable world."},
 stats:[["20,000+","Global members"],["50+","Countries"],["1,000+","Businesses connected"],["100+","Strategic mentors"],["500+","Partners"],["$100M+","Value enabled"]],
 ecosystemCards:[["◎","Business & Trade","Cross-border trade, market access and strategic partnerships."],["↗","Startup Accelerator","Incubation, mentorship, funding access and scaling support."],["♜","India–Japan Mission 2030","A powerful economic bridge for innovation and prosperity."],["♀","Women Empowerment","Backing women leaders and entrepreneurs to create lasting impact."],["♧","Youth Leadership","Skills, confidence and global exposure for future leaders."],["❧","Wellness & Ayush","Integrated wellness and holistic healthcare solutions."],["◉","Sustainability","ESG, circular economy and sustainable development initiatives."],["▥","Smart Communities","Technology-led solutions for cities and social impact projects."]],
 opportunities:[["▣","Investors","120 opportunities"],["♙","Distributors","85 opportunities"],["⌘","Technology Partners","64 opportunities"],["◉","Japanese Partners","78 opportunities"],["▤","Exporters / Importers","92 opportunities"],["♧","Mentors","45 opportunities"]],
 stories:[["Global Impact","Raised $1M in Seed Funding through FWC Connections"],["Global Expansion","SME Entered Japanese Market Successfully"],["Social Impact","Transforming Communities, Changing Lives"]],
 events:[["15","JUN","India–Japan Business Summit 2026","Kyoto, Japan"],["28","JUN","Global Investor Pitch Day","Bengaluru, India"],["10","JUL","Nari Shakti Leadership Forum","New Delhi, India"],["22","JUL","Global Sustainability Summit","Singapore"]],
 insights:[["Global markets","The Future of India–Japan Collaboration"],["Investment","Impact Investing: Creating Long-term Value"],["Technology","AI & Technology Transforming Industries"],["Leadership","Women Leadership: Driving Global Change"]]
};
const content=JSON.parse(localStorage.getItem("fwc-content")||"null")||defaults;
document.querySelectorAll("[data-cms]").forEach(el=>{const [group,key]=el.dataset.cms.split(".");if(content[group]?.[key])el.textContent=content[group][key]});
const fill=(id,items,template)=>document.getElementById(id).innerHTML=items.map(template).join("");
fill("stats",content.stats,(x)=>`<div class="stat"><strong>${x[0]}</strong><span>${x[1]}</span></div>`);
fill("ecosystem-grid",content.ecosystemCards,(x)=>`<article class="eco-card"><div class="eco-icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p><b>→</b></article>`);
fill("opportunity-grid",content.opportunities,(x)=>`<article class="opp-card"><div class="opp-icon">${x[0]}</div><small>Looking for</small><strong>${x[1]}</strong><span>${x[2]}</span></article>`);
fill("stories",content.stories,(x)=>`<article class="story"><small>${x[0]}</small><h3>${x[1]}</h3><span>Read story →</span></article>`);
fill("event-list",content.events,(x)=>`<article class="event"><div class="date"><b>${x[0]}</b>${x[1]}</div><div><h3>${x[2]}</h3><p>● ${x[3]}</p></div><span class="status">Registration open</span></article>`);
fill("insight-grid",content.insights,(x)=>`<article class="insight-card"><span>${x[0]}</span><h3>${x[1]}</h3><a href="#">Read more →</a></article>`);
document.querySelector(".menu-toggle").addEventListener("click",e=>{const h=document.querySelector(".site-header");h.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",h.classList.contains("open"))});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".site-header").classList.remove("open")));
