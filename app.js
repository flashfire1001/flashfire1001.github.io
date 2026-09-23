const SITE = {
  email: "jiaming.24@intl.zju.edu.cn",
  github: "https://github.com/flashfire1001",
  linkedin: "https://www.linkedin.com/"
};

const ARTICLES = [
  { id:"cuda-memory", section:"Algorithm", layout:"wide", title:"Understanding Global Memory Coalescing in CUDA Matrix Kernels", cardTitle:"CUDA Memory Coalescing", date:"September 18, 2026", minutes:8, tags:["CUDA","HPC","Memory"], description:"A visual explanation of how neighboring GPU threads should access neighboring memory.", sections:[
    ["The shape of an access","Memory coalescing sounds mysterious until the access pattern is drawn. A warp issues memory requests together, so the useful question is whether those requests land in a small number of contiguous memory transactions."],
    ["Rows, columns, and warps","Row-major matrices reward accesses that vary across columns. When adjacent threads vary the row index instead, addresses are separated by the full matrix width and the hardware must perform more transactions."],
    ["A practical check","Write the address expression for thread 0, thread 1, and thread 2. If the values differ by one element, the access is a strong candidate for coalescing. Profiling still decides the final answer."],
    ["Takeaway","Coalescing is a property of threads accessing memory together. It cannot be inferred from one thread's loop alone."]
  ]},
  { id:"reduction", section:"Algorithm", layout:"half", title:"Writing an Efficient Parallel Reduction Kernel from Scratch", cardTitle:"Parallel Reduction", date:"September 10, 2026", minutes:7, tags:["CUDA","Reduction"], description:"From divergent branches to a compact tree reduction.", sections:[
    ["Start with the operation","Reduction turns many values into one. The operation must be associative enough for the intended numeric tolerance."],
    ["Map work to threads","Each block reduces a tile, stores partial values in shared memory, and emits one result for a later stage."],
    ["Remove wasted work","The best version depends on occupancy, memory traffic, and synchronization rather than one clever line of code."]
  ]},
  { id:"graph-search", section:"Algorithm", layout:"half", title:"A Practical Mental Model for Graph Search Algorithms", cardTitle:"Graph Search", date:"August 29, 2026", minutes:6, tags:["Graphs","Algorithms"], description:"One frontier, several policies, and fewer memorized recipes.", sections:[
    ["The frontier","BFS, DFS, and best-first search all maintain a frontier. Their difference is the policy used to select the next state."],
    ["Visited state","A visited set prevents repeated work, but its correct placement depends on whether a better path may arrive later."],
    ["Choosing the policy","Use the guarantee you need—shortest path, low memory, or heuristic guidance—to choose the frontier structure."]
  ]},
  { id:"kernel-debugging", section:"Systems", layout:"wide", title:"Examining Source and Assembly Together While Debugging a Kernel", cardTitle:"Source and Assembly in GDB", date:"September 17, 2026", minutes:9, tags:["GDB","Linux","Systems"], description:"A repeatable workflow for connecting a faulting instruction to the source that produced it.", sections:[
    ["Why both views matter","Source gives intent while assembly shows what the processor actually executed. Kernel debugging often requires both at the same time."],
    ["Build useful symbols","Compile with debug information and preserve the unstripped image. Optimization may rearrange source lines, so assembly remains authoritative."],
    ["Follow the fault","Inspect registers, disassemble around the program counter, then map the instruction back to a source line and its surrounding state."],
    ["Keep a small loop","Form one hypothesis, inspect one piece of state, and continue. Large dumps create noise faster than understanding."]
  ]},
  { id:"uart-qemu", section:"Systems", layout:"half", title:"How QEMU Knows Which UART Device to Emulate", cardTitle:"QEMU and UART", date:"September 16, 2026", minutes:5, tags:["QEMU","Hardware"], description:"Boards, memory maps, and device models in one compact explanation.", sections:[
    ["The machine model","Selecting a QEMU machine chooses a board definition. That definition instantiates CPUs, memory, interrupt controllers, and devices at known addresses."],
    ["Memory-mapped I/O","Guest reads and writes to the UART address are routed to QEMU's UART device model, which implements the visible register behavior."],
    ["What software sees","The guest does not ask QEMU for a UART. It interacts with addresses and interrupts exactly as it would on the modeled board."]
  ]},
  { id:"database-keys", section:"Systems", layout:"half", title:"Deriving Candidate Keys Without Guessing", cardTitle:"Candidate Keys", date:"September 14, 2026", minutes:6, tags:["Databases","Theory"], description:"A closure-first method for functional dependencies.", sections:[
    ["Start with mandatory attributes","Any attribute that never appears on the right side of a functional dependency must occur in every candidate key."],
    ["Compute closures","Add attributes, compute the closure, and stop as soon as all relation attributes are reached."],
    ["Prove minimality","Remove each attribute in turn. If the remaining set is still a superkey, the original set was not a candidate key."]
  ]},
  { id:"learning-notes", section:"Life", layout:"wide", title:"Building Review Notes That Remain Useful After the Exam", cardTitle:"Notes Beyond the Exam", date:"September 22, 2026", minutes:7, tags:["Learning","Writing"], description:"Treat sources as having different roles, then build one coherent explanation.", sections:[
    ["Give sources jobs","Slides define scope, textbooks provide explanations, assignments reveal required skills, and a cheatsheet exposes what must be recalled quickly."],
    ["Design before drafting","Choose topic order and depth before generating prose. Notes become clearer when dependencies drive their architecture."],
    ["Keep the source editable","Markdown and small reusable visual specifications make later revision cheaper than flattened documents."]
  ]},
  { id:"strategic-english", section:"Life", layout:"half", title:"A Strategic Approach to Learning Conversational English", cardTitle:"Strategic English", date:"September 17, 2026", minutes:5, tags:["Language","Practice"], description:"Practice reusable sentence frames in situations where they will actually be used.", sections:[
    ["Prioritize transfer","A phrase is valuable when it works in many conversations, not because it is rare or advanced."],
    ["Practice retrieval","Short speaking prompts force active recall and expose where a sentence still feels unnatural."],
    ["Correct selectively","One high-value correction is easier to retain than a transcript covered in minor edits."]
  ]},
  { id:"small-web", section:"Life", layout:"half", title:"Why Small Personal Websites Still Feel Special", cardTitle:"The Small Web", date:"September 6, 2026", minutes:4, tags:["Web","Design"], description:"A personal page can be useful without becoming a product dashboard.", sections:[
    ["A place with an owner","A personal website gains character from deliberate choices that would be inefficient in a large product."],
    ["Curation over feeds","A homepage can show what matters now instead of sorting every item by timestamp or engagement."],
    ["Constraints create tone","A limited type system, a stable palette, and a few repeated shapes are enough to hold varied content together."]
  ]}
];

const PROJECTS = {
  patents:{ title:"Quantifying Innovation and Partnerships in Medical Technologies", image:"assets/patents-background.webp", meta:"Research · Data analysis", sections:[
    ["Overview","A patent-data exploration of innovation trends and partnerships in medical technologies."],
    ["Approach","The project combines data preparation, network analysis, geographic comparison, and visual explanation."],
    ["Outcome","The resulting maps and diagrams reveal influential patent families and collaboration patterns."]
  ]},
  population:{ title:"Urban Intelligence: Population Distribution", image:"assets/popdistribution-background.webp", meta:"Data visualization · Web", sections:[
    ["Overview","An interactive web application for exploring population distribution and urban patterns."],
    ["Design","The interface turns geographic data into readable views for comparison and exploration."],
    ["Outcome","Users can move from a broad distribution to the local patterns that explain it."]
  ]},
  tflex:{ title:"T-flex Wearable Posture Correction System", image:"assets/tflex-background.webp", meta:"Hardware · Arduino", sections:[
    ["Overview","A wearable system designed to observe posture and provide timely feedback."],
    ["Prototype","The prototype combines sensors, an Arduino-based controller, and a wearable form factor."],
    ["Outcome","The work tests how lightweight feedback can support posture awareness without interrupting the user."]
  ]},
  pillnet:{ title:"PillNet Medication Identification", image:"assets/pillnet-background.webp", meta:"AI · Accessibility", sections:[
    ["Overview","A neural-network-based medication identification concept focused on accessible use."],
    ["Approach","The application joins image classification with a simple workflow for identifying likely medication matches."],
    ["Outcome","The prototype demonstrates how computer vision can support a clearer medication lookup experience."]
  ]}
};

function nav(active="") {
  return `<nav class="site-nav" aria-label="Primary navigation">
    <div class="nav-main">
      <a class="${active==='home'?'active':''}" href="index.html">Home</a>
      <a class="${active==='works'?'active':''}" href="works.html">Works</a>
      <a class="${active==='writing'?'active':''}" href="writing.html">Writing</a>
      <a class="${active==='about'?'active':''}" href="about.html">About</a>
      <div class="more-menu">
        <button type="button" data-more-button aria-expanded="false" aria-controls="more-popover">More ▾</button>
        <div class="more-popover" id="more-popover" data-more-popover hidden>
          <a href="education.html">Education</a>
          <a href="contact.html">Contact</a>
          <a href="jimmy-xu-cv.html" download="Jimmy-Xu-CV.html">CV ↓</a>
        </div>
      </div>
    </div>
    <div class="language-switch" aria-label="Language">
      <button class="active" type="button" aria-pressed="true">EN</button><span class="divider">/</span><button type="button" aria-pressed="false">中文</button>
    </div>
  </nav>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-links"><a href="index.html">Home</a> · <a href="works.html">Works</a> · <a href="writing.html">Writing</a> · <a href="education.html">Education</a> · <a href="contact.html">Contact</a> · <a href="jimmy-xu-cv.html" download="Jimmy-Xu-CV.html">CV ↓</a> · <a href="${SITE.github}" target="_blank" rel="noreferrer">GitHub</a> · <a href="${SITE.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="mailto:${SITE.email}">Email</a></div>
    <p>© 2026 Jimmy Xu. All rights reserved.</p>
  </footer>`;
}

function initShell() {
  const palette = sessionStorage.getItem("jimmy-palette") || String(1 + Math.floor(Math.random()*4));
  sessionStorage.setItem("jimmy-palette", palette);
  if (palette !== "1") document.body.classList.add(`palette-${palette}`);
  document.querySelectorAll("[data-site-nav]").forEach(el => el.outerHTML = nav(document.body.dataset.page || ""));
  document.querySelectorAll("[data-site-footer]").forEach(el => el.outerHTML = footer());
  const button = document.querySelector("[data-more-button]");
  const popover = document.querySelector("[data-more-popover]");
  if (button && popover) {
    const close = () => { popover.hidden=true; button.setAttribute("aria-expanded","false"); };
    button.addEventListener("click", e => { e.stopPropagation(); const open=popover.hidden; popover.hidden=!open; button.setAttribute("aria-expanded",String(open)); });
    document.addEventListener("click", e => { if (!popover.contains(e.target) && e.target!==button) close(); });
    document.addEventListener("keydown", e => { if (e.key==="Escape") { close(); button.focus(); } });
  }
}

function articleCard(article) {
  return `<a class="article-card ${article.layout}" href="article.html?id=${article.id}" aria-label="${article.title}">
    <div class="article-card-meta">${article.date} · ${article.minutes} min read</div>
    <div class="article-card-title">${article.layout==='half' ? article.cardTitle : article.title}</div>
    <div class="tags">${article.tags.map(t=>`<span class="tag">#${t.toLowerCase().replaceAll(' ','-')}</span>`).join('')}</div>
  </a>`;
}

function renderWriting(list=ARTICLES) {
  const host=document.querySelector("[data-writing-list]");
  if (!host) return;
  const sections=[...new Set(list.map(a=>a.section))];
  host.innerHTML=sections.map(section=>`<section class="writing-section"><h2>${section}</h2><div class="article-grid">${list.filter(a=>a.section===section).map(articleCard).join('')}</div></section>`).join('') || `<div class="content-card"><h2>No matching writing</h2><p>Try another word or choose a different shelf.</p></div>`;
}

function initWriting() {
  const host=document.querySelector("[data-writing-list]");
  if (!host) return;
  renderWriting();
  const toggle=document.querySelector("[data-search-toggle]");
  const shelf=document.querySelector("[data-search-shelf]");
  const input=document.querySelector("[data-search-input]");
  const count=document.querySelector("[data-search-count]");
  const buttons=[...document.querySelectorAll("[data-section]")];
  let section="All";
  const apply=()=>{
    const q=(input.value||"").trim().toLowerCase();
    const filtered=ARTICLES.filter(a=>(section==="All"||a.section===section) && (!q||[a.title,a.cardTitle,a.description,a.section,...a.tags].join(" ").toLowerCase().includes(q)));
    renderWriting(filtered);
    count.textContent=`${filtered.length} article${filtered.length===1?'':'s'} found`;
  };
  toggle?.addEventListener("click",()=>{ shelf.hidden=!shelf.hidden; toggle.setAttribute("aria-expanded",String(!shelf.hidden)); if(!shelf.hidden) input.focus(); });
  input?.addEventListener("input",apply);
  buttons.forEach(btn=>btn.addEventListener("click",()=>{ section=btn.dataset.section; buttons.forEach(b=>b.classList.toggle("active",b===btn)); apply(); }));
}

function initWorks() {
  const buttons=[...document.querySelectorAll("[data-work-filter]")];
  const cards=[...document.querySelectorAll("[data-topics]")];
  buttons.forEach(btn=>btn.addEventListener("click",()=>{
    buttons.forEach(b=>b.classList.toggle("active",b===btn));
    const topic=btn.dataset.workFilter;
    cards.forEach(card=>card.hidden=topic!=="All" && !card.dataset.topics.split(" ").includes(topic));
  }));
}

function initArticle() {
  const host=document.querySelector("[data-article]");
  if(!host) return;
  const id=new URLSearchParams(location.search).get("id") || ARTICLES[0].id;
  const article=ARTICLES.find(a=>a.id===id) || ARTICLES[0];
  document.title=`${article.title} · Jimmy Xu`;
  const sectionArticles=ARTICLES.filter(a=>a.section===article.section);
  const index=sectionArticles.findIndex(a=>a.id===article.id);
  const prev=sectionArticles[index-1], next=sectionArticles[index+1];
  const toc=article.sections.map((s,i)=>`<li class="${i===0?'active':''}"><a href="#section-${i+1}">${s[0]}</a></li>`).join('');
  host.innerHTML=`<div class="prose-layout">
    <aside class="toc"><a class="toc-back" href="writing.html">← Writing</a><ol class="toc-list" data-toc>${toc}</ol></aside>
    <div><details class="mobile-contents"><summary>Contents</summary><a href="writing.html">← Writing</a>${article.sections.map((s,i)=>`<a href="#section-${i+1}">${s[0]}</a>`).join('')}</details>
    <article class="prose"><h1>${article.title}</h1><div class="article-meta">${article.date} · ${article.minutes} min read · ${article.section}</div><div class="tags">${article.tags.map(t=>`<span class="tag">#${t.toLowerCase()}</span>`).join('')}</div>${article.sections.map((s,i)=>`<section><h2 id="section-${i+1}">${s[0]}</h2><p>${s[1]}</p></section>`).join('')}</article>
    <nav class="article-pager" aria-label="Article navigation"><span>${prev?`<a href="article.html?id=${prev.id}">&lt;&lt; Previous</a>`:''}</span><a href="index.html">Home</a><span class="next">${next?`<a href="article.html?id=${next.id}">Next &gt;&gt;</a>`:''}</span></nav></div>
  </div>`;
  const headings=[...host.querySelectorAll(".prose h2")], items=[...host.querySelectorAll("[data-toc] li")];
  if("IntersectionObserver" in window) {
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{ if(entry.isIntersecting){ const i=headings.indexOf(entry.target); items.forEach((item,n)=>item.classList.toggle("active",n===i)); }}),{rootMargin:"-15% 0px -70% 0px"});
    headings.forEach(h=>observer.observe(h));
  }
}

function initProject() {
  const host=document.querySelector("[data-project]");
  if(!host) return;
  const id=new URLSearchParams(location.search).get("id") || "patents";
  const project=PROJECTS[id] || PROJECTS.patents;
  document.title=`${project.title} · Jimmy Xu`;
  host.innerHTML=`<article class="content-card"><img src="${project.image}" alt="${project.title}"><p class="eyebrow" style="margin-top:22px">${project.meta}</p>${project.sections.map(s=>`<section><h2>${s[0]}</h2><p>${s[1]}</p></section>`).join('')}<p><a class="inline-link" href="works.html">&lt;&lt; Back to Works</a></p></article>`;
}

function initContact() {
  const form=document.querySelector("[data-contact-form]");
  form?.addEventListener("submit",event=>{
    event.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent(data.get("subject")||"Website message");
    const body=encodeURIComponent(`From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`);
    location.href=`mailto:${SITE.email}?subject=${subject}&body=${body}`;
  });
}

document.addEventListener("DOMContentLoaded",()=>{ initShell(); initWriting(); initWorks(); initArticle(); initProject(); initContact(); });
