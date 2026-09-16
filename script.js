// DEZN global search — Arabic interface. English terms remain searchable.
const SITE_SEARCH = [
  {typeKey:'page',title:'الرئيسية',tags:'dezn home',url:'index.html'},
  {typeKey:'page',title:'المشاريع',tags:'مشاريع portfolio projects',url:'work.html'},
  {typeKey:'page',title:'المكتبة',tags:'كتب كتاب مراجع architecture books library',url:'books.html'},
  {typeKey:'page',title:'المعرفة المعمارية',tags:'معرفة معلومات تصميم تنفيذ architecture knowledge',url:'knowledge.html'},
  {typeKey:'page',title:'المهندس أحمد رضا',tags:'أحمد رضا مؤسس founder ahmed reda',url:'founder.html'},
  {typeKey:'page',title:'تواصل معنا',tags:'تواصل واتساب contact whatsapp',url:'contact.html'},
  {typeKey:'service',title:'تصميم معماري',tags:'تصميم معماري مخططات architecture design',url:'service.html?id=architecture'},
  {typeKey:'service',title:'تصميم داخلي',tags:'تصميم داخلي interior أثاث furniture',url:'service.html?id=interior'},
  {typeKey:'service',title:'تصور ثلاثي الأبعاد',tags:'رندر تصور 3d visualization render',url:'service.html?id=visualization'}
];
function refreshDynamicSearchIndex(){
  const projects=window.DEZN_PROJECTS||{};
  Object.entries(projects).forEach(([id,p])=>SITE_SEARCH.push({typeKey:'project',title:p.title||'',tags:(p.category||'')+' '+(p.catLabel||''),url:'project.html?id='+encodeURIComponent(id)}));
  const knowledge=window.DEZN_KNOWLEDGE||{};
  Object.entries(knowledge).forEach(([id,a])=>SITE_SEARCH.push({typeKey:'knowledge',title:a.title||'',tags:(a.label||'')+' '+(a.desc||''),url:'knowledge-detail.html?id='+encodeURIComponent(id)}));
}
window.addEventListener('dezn-data-ready',refreshDynamicSearchIndex);
const TYPE_LABELS={project:'مشروع',architect:'معماري',service:'خدمة',page:'صفحة',work:'عمل',book:'كتاب',knowledge:'معرفة'};
function itemTitle(item){return item.title||''}
function itemType(item){return TYPE_LABELS[item.typeKey]||item.type||''}
function initGlobalSearch(){
  const input=document.getElementById('searchInput'),btn=document.getElementById('searchBtn'); if(!input)return;
  let dropdown=document.getElementById('searchDropdown');
  if(!dropdown){dropdown=document.createElement('div');dropdown.id='searchDropdown';dropdown.className='search-dropdown';dropdown.setAttribute('role','listbox');const box=input.closest('.search-box');if(box){box.style.position='relative';box.appendChild(dropdown)}}
  function search(q){q=(q||'').trim().toLowerCase();if(!q)return[];return SITE_SEARCH.filter(item=>{const hay=((item.title||'')+' '+(item.tags||'')+' '+item.typeKey+' '+itemType(item)).toLowerCase();return hay.includes(q)||q.split(/\s+/).every(w=>w&&hay.includes(w))}).slice(0,8)}
  function render(results,q){if(!q||!results.length){dropdown.classList.remove('open');dropdown.innerHTML=q?'<div class="search-empty">مفيش نتائج</div>':'';if(q)dropdown.classList.add('open');return}dropdown.innerHTML=results.map(r=>`<a href="${r.url}" class="search-item" role="option"><span class="search-item-type">${itemType(r)}</span><span class="search-item-title">${r.title}</span></a>`).join('');dropdown.classList.add('open')}
  function onInput(){const q=input.value;render(search(q),q)}
  function go(){const first=dropdown.querySelector('.search-item');if(first)location.href=first.getAttribute('href');else dropdown.classList.remove('open')}
  input.addEventListener('input',onInput);input.addEventListener('focus',onInput);input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();go()}if(e.key==='Escape'){dropdown.classList.remove('open');input.blur()}});if(btn)btn.addEventListener('click',e=>{e.preventDefault();go()});document.addEventListener('click',e=>{if(!e.target.closest('.search-box'))dropdown.classList.remove('open')});
}
function applyEnglishWordFont(){
  const root=document.body;if(!root||typeof NodeFilter==='undefined')return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){const parent=node.parentElement;if(!parent||['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName)||parent.closest('.logo,.logo-box')||parent.classList.contains('en-word'))return NodeFilter.FILTER_REJECT;if(!/(?:[A-Za-z]|\d+[A-Za-z])/.test(node.nodeValue))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  const re=/(?:\d+[A-Za-z]+|[A-Za-z][A-Za-z0-9.+#&'’\/-]*)/g;
  nodes.forEach(node=>{const text=node.nodeValue,frag=document.createDocumentFragment();let last=0,m;while((m=re.exec(text))){if(m.index>last)frag.appendChild(document.createTextNode(text.slice(last,m.index)));const span=document.createElement('span');span.className='en-word';span.textContent=m[0];frag.appendChild(span);last=m.index+m[0].length}if(last<text.length)frag.appendChild(document.createTextNode(text.slice(last)));node.parentNode.replaceChild(frag,node)});
}
document.addEventListener('DOMContentLoaded',()=>{initGlobalSearch();applyEnglishWordFont()});
window.addEventListener('dezn-data-ready',()=>setTimeout(applyEnglishWordFont,0));
