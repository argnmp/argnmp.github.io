(()=>{"use strict";class e{constructor(){this.pages=new Map}async add(e){let t=await fetch(e,{method:"GET",mode:"cors",headers:{Accept:"text/html"}}),a=await t.text(),n=(new DOMParser).parseFromString(a,"text/html");this.pages.set(e,n)}async add_many(e){let t=[];for(let a of e)t.push(fetch(a,{method:"GET",mode:"cors",headers:{Accept:"text/html"}}));let a=await Promise.all(t),n=0;for(let t of a){let a=await t.text(),o=(new DOMParser).parseFromString(a,"text/html");this.pages.set(e[n],o),n+=1}}async add_included_anc(e){let t=this.pages.get(e);if(!t)throw console.log("requested page not cached"),new Error;let a=t.getElementById("main").getElementsByClassName("anc"),n=[];for(let e=0;e<a.length;e++){let t=a.item(e).getAttribute("href");n.push(t)}await this.add_many(n)}async load(e){let t=window.document,a=this.pages.get(e);if(!a)throw console.log("requested page not cached"),new Error;let n=t.getElementsByClassName("ground"),o=a.getElementsByClassName("ground");for(let e=0;e<n.length;e++)n[e].replaceWith(o[e].cloneNode(!0))}}let t,a;async function n(){window.hljs.highlightAll(),window.hljs.initLineNumbersOnLoad()}async function o(){let e=a.new(),t=window.location.href.replace(/[^/]*$/,"");const n=t.split("/");n.pop(),n.length>0&&!isNaN(Number(n[n.length-1]))&&(t=t.slice(0,t.length-1).replace(/[^/]*$/,""));try{await e.load(t+"searchindex")}catch(e){return}window.n=e,window.search=async function(t){let a=document.getElementById("search_input").value;await e.search(a)};const o=document.getElementById("searchToggle"),l=document.getElementById("searchModule");o.addEventListener("click",(()=>{l.hidden=!l.hidden}))}async function l(){const e=[],t=document.querySelectorAll("h1, h2, h3, h4, h5, h6"),a=document.getElementById("toc");for(;a.firstChild;)a.removeChild(a.lastChild);const n=document.createElement("ul"),o=[{layer:0,elem:n}],l=e=>e.matches("h1")?1:e.matches("h2")?2:e.matches("h3")?3:e.matches("h4")?4:e.matches("h5")?5:e.matches("h6")?6:void 0;let c=0;for(const a of t){a.classList.add("cursor-pointer","hover:text-customlight-700","dark:hover:text-customdark-400"),a.addEventListener("click",(e=>{a.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})),a.dataset.index=c,c+=1;let t=l(a);for(;o[o.length-1].layer>=t;)o.pop();const n=document.createElement("li");n.classList.add("pl-4","pb-1");const s=document.createElement("p");s.classList.add("text-sm","text-gray-900","dark:text-gray-200","cursor-pointer","hover:text-customlight-700","dark:hover:text-customdark-400","hover:underline","break-all"),s.innerText=a.innerText,s.addEventListener("click",(e=>{a.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})),e.push(s);const i=document.createElement("ul");n.appendChild(s),n.appendChild(i),o[o.length-1].elem.appendChild(n),o.push({layer:t,elem:i})}a.appendChild(n)}!async function(){const c=await import("/static/render.js");t=c.default,a=c.Index,await t(),await async function(){const t=async()=>{const e=document.getElementsByClassName("anc");for(const c of e)c.addEventListener("click",(async function(e){e.preventDefault();try{const e=c.getAttribute("href");history.pushState(null,null,e),await a.load(e,!0),await a.add_included_anc(e),t(),await l(),await o(),await n(),window.scrollTo({top:0,left:0,behavior:"smooth"})}catch(e){console.log(e),window.location.href=c.href}}),!1)};let a=new e;window.g=a,await a.add(decodeURI(window.location.pathname)),await a.load(decodeURI(window.location.pathname)),await a.add_included_anc(decodeURI(window.location.pathname)),await n(),await t(),window.onpopstate=async e=>{e.preventDefault();try{await a.load(decodeURI(window.location.pathname),!0),await t(),await l(),await o(),await n()}catch(e){console.log(e),window.location.href=window.location.pathname}}}(),await l(),await async function(){document.getElementById("toggle").addEventListener("click",(()=>{"dark"===localStorage.theme?(localStorage.theme="light",document.documentElement.classList.remove("dark")):(localStorage.theme="dark",document.documentElement.classList.add("dark"))}))}(),await o()}()})();