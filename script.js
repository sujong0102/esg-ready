const regulations = [
 {title:"한국 지속가능성 공시기준(KSSB)",category:"국내 공시 기준",status:"check",statusText:"최신 내용 확인",description:"국내 지속가능성 공시기준과 관련 정책의 공식 발표 및 적용 일정을 확인합니다.",source:"한국회계기준원",dateLabel:"발표·적용 일정 확인",url:"https://www.kasb.or.kr/"},
 {title:"한국거래소 ESG 포털",category:"국내 ESG 정보",status:"official",statusText:"공식 정보 포털",description:"ESG 정보공개 가이드라인과 기업 ESG 관련 자료를 탐색할 수 있습니다.",source:"한국거래소",dateLabel:"자료별 게시일 확인",url:"https://esg.krx.co.kr/"},
 {title:"중소기업 ESG 지원 정보",category:"기업 지원",status:"official",statusText:"공식 지원 정보",description:"중소기업 대상 ESG 대응과 관련 지원 프로그램을 확인할 수 있습니다.",source:"중소벤처기업진흥공단",dateLabel:"사업별 모집 일정 확인",url:"https://esg.kosmes.or.kr/"},
 {title:"ISSB 지속가능성 공시 기준",category:"국제 공시 기준",status:"official",statusText:"국제 기준 자료",description:"IFRS S1·S2 등 국제 지속가능성 공시 기준과 공식 발표 자료를 확인합니다.",source:"IFRS Foundation",dateLabel:"관할별 적용 여부 확인",url:"https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/"},
 {title:"EU 지속가능성 보고(CSRD)",category:"해외 규제",status:"check",statusText:"적용 대상 확인",description:"EU 지속가능성 보고 관련 규정과 적용 대상·일정 변화를 공식 자료로 확인합니다.",source:"European Commission",dateLabel:"법령·공지 확인",url:"https://finance.ec.europa.eu/sustainable-finance/corporate-sustainability-reporting_en"},
 {title:"기후·온실가스 정책 자료",category:"기후·배출량",status:"official",statusText:"공식 자료",description:"온실가스 인벤토리와 배출량 산정에 필요한 정책·지침 자료를 찾아볼 수 있습니다.",source:"환경부",dateLabel:"지침 최신 버전 확인",url:"https://www.me.go.kr/"}
];
const resources = [
 {icon:"KRX",title:"한국거래소 ESG 포털",body:"국내 ESG 정보공개 관련 가이드와 자료를 탐색합니다.",label:"포털 바로가기",url:"https://esg.krx.co.kr/"},
 {icon:"KSSB",title:"한국회계기준원",body:"국내 지속가능성 공시기준 관련 공식 발표를 확인합니다.",label:"기준 자료 확인",url:"https://www.kasb.or.kr/"},
 {icon:"IFRS",title:"IFRS Sustainability",body:"ISSB 지속가능성 공시기준과 관련 공식 자료를 확인합니다.",label:"국제 기준 확인",url:"https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/"},
 {icon:"EU",title:"European Commission",body:"EU 기업 지속가능성 보고 관련 정책과 공식 안내를 확인합니다.",label:"EU 정책 확인",url:"https://finance.ec.europa.eu/sustainable-finance/corporate-sustainability-reporting_en"},
 {icon:"SME",title:"중소벤처기업진흥공단 ESG",body:"중소기업 ESG 지원사업과 관련 정보를 탐색합니다.",label:"지원 정보 확인",url:"https://esg.kosmes.or.kr/"},
 {icon:"MOE",title:"환경부",body:"기후·환경 정책과 온실가스 관련 최신 안내를 확인합니다.",label:"환경 정책 확인",url:"https://www.me.go.kr/"}
];
const groups=[
 {title:"적용 범위와 책임",items:["우리 회사의 사업장·자회사·보고 경계를 확인했다.","공시 대상 여부와 적용 시기를 공식 자료로 검토했다.","ESG 공시 책임자와 부서별 담당자를 지정했다."]},
 {title:"데이터와 근거 자료",items:["환경·사회·지배구조 데이터 보유 부서를 파악했다.","온실가스·에너지·인력 등 핵심 데이터 출처를 정리했다.","수치별 산정 기준, 단위, 기간, 증빙 자료를 기록했다."]},
 {title:"중요 이슈와 리스크",items:["사업과 이해관계자에게 중요한 ESG 이슈를 검토했다.","기후 관련 위험·기회와 대응 체계를 점검했다.","데이터 공백과 추가 확인 항목을 목록화했다."]},
 {title:"검토와 공시 준비",items:["데이터 책임자의 검토·승인 절차를 정했다.","공시 문안과 수치의 일관성을 확인했다.","최종 자료의 출처·버전·승인 기록을 보관한다."]}
];
const $=id=>document.getElementById(id);
function renderRegulations(){
 const q=$("calendar-search").value.trim().toLocaleLowerCase("ko");
 const filter=$("status-filter").value;
 const list=regulations.filter(x=>`${x.title} ${x.category} ${x.description} ${x.source}`.toLocaleLowerCase("ko").includes(q)&&(filter==="all"||x.status===filter));
 $("regulation-list").replaceChildren();
 if(!list.length){const e=document.createElement("div");e.className="empty-state";e.textContent="검색 결과가 없습니다. 다른 검색어를 입력해 보세요."; $("regulation-list").append(e);return;}
 list.forEach(x=>{
  const card=document.createElement("article");card.className="reg-card";
  const top=document.createElement("div");top.className="reg-card-top";
  const cat=document.createElement("span");cat.className="reg-category";cat.textContent=x.category;
  const pill=document.createElement("span");pill.className="status-pill "+(x.status==="official"?"status-official":"status-check");pill.textContent=x.statusText;top.append(cat,pill);
  const h=document.createElement("h3");h.textContent=x.title;
  const p=document.createElement("p");p.textContent=x.description;
  const bottom=document.createElement("div");bottom.className="reg-card-bottom";
  const small=document.createElement("small");small.textContent=x.source+" · "+x.dateLabel;
  const a=document.createElement("a");a.href=x.url;a.target="_blank";a.rel="noopener noreferrer";a.textContent="공식 자료 ↗";a.setAttribute("aria-label",x.source+" 공식 자료 새 창에서 열기");
  bottom.append(small,a);card.append(top,h,p,bottom);$("regulation-list").append(card);
 });
}
function renderResources(){
 resources.forEach(x=>{const card=document.createElement("article");card.className="resource-card";
 const icon=document.createElement("span");icon.className="resource-icon";icon.textContent=x.icon;
 const h=document.createElement("h3");h.textContent=x.title;const p=document.createElement("p");p.textContent=x.body;
 const a=document.createElement("a");a.href=x.url;a.target="_blank";a.rel="noopener noreferrer";a.textContent=x.label+" ↗";a.setAttribute("aria-label",x.title+" 공식 사이트 새 창에서 열기");
 card.append(icon,h,p,a);$("resource-grid").append(card);});
}
const KEY="esg-ready-checklist-v2";
function readChecks(){try{return JSON.parse(localStorage.getItem(KEY)||"{}")}catch{return {}}}
let checks=readChecks();
function renderChecklist(){
 const root=$("checklist-groups");root.replaceChildren();let total=0,done=0;
 groups.forEach((g,gi)=>{const section=document.createElement("section");section.className="check-group";
 const h=document.createElement("h4");const num=document.createElement("span");num.className="group-number";num.textContent=String(gi+1).padStart(2,"0");h.append(num,document.createTextNode(g.title));section.append(h);
 g.items.forEach((text,ii)=>{const id=gi+"-"+ii;total++;if(checks[id])done++;
 const label=document.createElement("label");label.className="check-item";const input=document.createElement("input");input.type="checkbox";input.checked=!!checks[id];input.addEventListener("change",()=>{checks[id]=input.checked;try{localStorage.setItem(KEY,JSON.stringify(checks))}catch{}renderChecklist()});
 const span=document.createElement("span");span.textContent=text;label.append(input,span);section.append(label);});root.append(section);});
 const pct=total?Math.round(done/total*100):0;
 $("hero-percent").textContent=pct+"%";$("hero-progress").style.width=pct+"%";$("hero-count").textContent=`${total}개 항목 중 ${done}개 완료`;
 $("chip-progress").textContent=pct+"% 완료";$("aside-done").textContent=done;
}
$("calendar-search").addEventListener("input",renderRegulations);$("status-filter").addEventListener("change",renderRegulations);
$("reset-checklist").addEventListener("click",()=>{if(confirm("체크리스트를 모두 초기화할까요?")){checks={};try{localStorage.removeItem(KEY)}catch{}renderChecklist()}});
$("menu-toggle").addEventListener("click",()=>{const nav=$("mobile-nav");const open=$("menu-toggle").getAttribute("aria-expanded")==="true";$("menu-toggle").setAttribute("aria-expanded",String(!open));$("menu-toggle").setAttribute("aria-label",open?"메뉴 열기":"메뉴 닫기");nav.hidden=open;});
$("mobile-nav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{$("mobile-nav").hidden=true;$("menu-toggle").setAttribute("aria-expanded","false");$("menu-toggle").setAttribute("aria-label","메뉴 열기")}));
renderRegulations();renderResources();renderChecklist();
