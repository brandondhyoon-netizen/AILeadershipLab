import { useState, useEffect, useRef } from "react";
import { Brain, Target, Users, TrendingUp, ChevronRight, MessageSquare, Zap, ArrowRight, CheckCircle, BarChart3, Lightbulb, Shield, Rocket, Send, RefreshCw, AlertTriangle, Award, Sparkles, Bot, User, Play, Building2, Clock, Star, BookOpen, Settings, Hash, RotateCcw } from "lucide-react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=IBM+Plex+Sans+KR:wght@300;400;500;600&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
:root{
  --bg:#05091A;--surf:#0C1630;--card:#0F1E3D;--card2:#132348;
  --blue:#1D9BF0;--blue2:#38BDF8;--blue3:#0C4A6E;
  --gold:#FBBF24;--gold2:#F59E0B;
  --red:#F87171;--green:#34D399;--purple:#A78BFA;
  --text:#EFF6FF;--mut:#93C5FD;--dim:#4B6EA8;
  --br:rgba(29,155,240,0.12);--bra:rgba(29,155,240,0.35);
  --glow:rgba(29,155,240,0.15);
}
html,body{background:var(--bg);font-family:'IBM Plex Sans KR',sans-serif;color:var(--text);scroll-behavior:smooth;}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
@keyframes bounce{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-6px);}}
@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
.fadeUp{animation:fadeUp .7s ease forwards;}
.f1{animation:fadeUp .7s .1s ease forwards;opacity:0;}
.f2{animation:fadeUp .7s .2s ease forwards;opacity:0;}
.f3{animation:fadeUp .7s .3s ease forwards;opacity:0;}
.f4{animation:fadeUp .7s .5s ease forwards;opacity:0;}
.flt{animation:float 6s ease-in-out infinite;}
.disp{font-family:'Playfair Display',serif;}
.gt{background:linear-gradient(135deg,#38BDF8,#1D9BF0,#818CF8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.gg{background:linear-gradient(135deg,#FBBF24,#F59E0B,#FDE68A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.card{background:linear-gradient(135deg,rgba(15,30,61,.9),rgba(19,35,72,.6));border:1px solid var(--br);border-radius:16px;transition:all .3s;}
.card:hover{border-color:var(--bra);box-shadow:0 12px 40px var(--glow);transform:translateY(-3px);}
.btn-b{background:linear-gradient(135deg,#1D9BF0,#0EA5E9);border:none;border-radius:10px;color:white;cursor:pointer;font-family:'IBM Plex Sans KR',sans-serif;font-weight:600;padding:14px 32px;font-size:15px;transition:all .3s;box-shadow:0 4px 16px rgba(14,165,233,.25);}
.btn-b:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(14,165,233,.45);}
.btn-b:disabled{opacity:.5;cursor:not-allowed;transform:none;}
.btn-g{background:linear-gradient(135deg,#FBBF24,#F59E0B);border:none;border-radius:10px;color:#0C1630;cursor:pointer;font-family:'IBM Plex Sans KR',sans-serif;font-weight:700;padding:16px 40px;font-size:16px;transition:all .3s;box-shadow:0 4px 16px rgba(251,191,36,.25);}
.btn-g:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(251,191,36,.45);}
.btn-o{background:transparent;border:1px solid var(--bra);border-radius:10px;color:var(--mut);cursor:pointer;font-family:'IBM Plex Sans KR',sans-serif;font-weight:500;padding:14px 32px;font-size:15px;transition:all .3s;}
.btn-o:hover{border-color:var(--blue);color:var(--blue2);}
.slider{-webkit-appearance:none;appearance:none;background:linear-gradient(90deg,var(--blue3),var(--card2));border-radius:10px;cursor:pointer;height:8px;outline:none;width:100%;}
.slider::-webkit-slider-thumb{-webkit-appearance:none;background:var(--blue2);border-radius:50%;cursor:pointer;height:24px;width:24px;box-shadow:0 0 12px rgba(56,189,248,.5);}
.ci{background:var(--card);border:1px solid var(--br);border-radius:10px;color:var(--text);font-family:'IBM Plex Sans KR',sans-serif;font-size:14px;line-height:1.5;outline:none;padding:12px 16px;resize:none;transition:border-color .2s;width:100%;}
.ci:focus{border-color:var(--blue);}
.ci::placeholder{color:var(--dim);}
.tab{background:transparent;border:1px solid var(--br);border-radius:8px;color:var(--dim);cursor:pointer;font-family:'IBM Plex Sans KR',sans-serif;font-size:13px;font-weight:500;padding:9px 18px;transition:all .2s;white-space:nowrap;}
.tab.on{background:var(--blue);border-color:var(--blue);color:white;}
.tab:hover:not(.on){border-color:var(--bra);color:var(--mut);}
.td{animation:bounce 1.4s infinite;background:var(--blue);border-radius:50%;display:inline-block;height:7px;width:7px;margin:0 2px;}
.td:nth-child(2){animation-delay:.2s;}
.td:nth-child(3){animation-delay:.4s;}
::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:var(--bg);}
::-webkit-scrollbar-thumb{background:var(--blue3);border-radius:3px;}
.mesh{background:radial-gradient(ellipse at 15% 50%,rgba(29,155,240,.07) 0%,transparent 50%),radial-gradient(ellipse at 85% 20%,rgba(129,140,248,.05) 0%,transparent 50%),var(--bg);}
@media(max-width:768px){
  .hm{display:none!important;}
  .hero-section{min-height:auto!important;padding:96px 20px 56px!important;}
  .hero-badge{font-size:11px!important;padding:6px 14px!important;margin-bottom:20px!important;}
  .hero-h1{font-size:clamp(30px,8.5vw,48px)!important;letter-spacing:-.5px!important;margin-bottom:16px!important;line-height:1.2!important;}
  .hero-sub{font-size:14px!important;margin-bottom:28px!important;padding:0 4px;}
  .hero-sub br{display:none;}
  .hero-btns{flex-direction:column!important;align-items:stretch!important;gap:12px!important;margin-bottom:36px!important;padding:0 4px;}
  .hero-btns button{width:100%!important;padding:14px 20px!important;font-size:14px!important;}
  .hero-stats{grid-template-columns:repeat(2,1fr)!important;gap:10px!important;max-width:100%!important;}
  .hero-stat{padding:14px 10px!important;}
  .hero-stat-val{font-size:22px!important;}
  .hero-stat-lbl{font-size:10px!important;}
  .nav-wrap{padding:12px 16px!important;}
  .nav-cta{padding:8px 14px!important;font-size:12px!important;}
}
`;

const renderMd = (text) => {
  const parts = text.split(/(\*\*.*?\*\*|\*[^*]*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) return <strong key={i} style={{color:"var(--blue2)",fontWeight:600}}>{p.slice(2,-2)}</strong>;
    if (p.startsWith("*") && p.endsWith("*")) return <em key={i} style={{color:"var(--mut)"}}>{p.slice(1,-1)}</em>;
    return <span key={i}>{p}</span>;
  });
};

function Tag({color,icon,label}){
  const c={blue:"rgba(29,155,240,.1)","rgba(29,155,240,.2)":true,red:"rgba(248,113,113,.1)",gold:"rgba(251,191,36,.1)",green:"rgba(52,211,153,.1)",purple:"rgba(167,139,250,.1)"};
  const bc={blue:"rgba(29,155,240,.2)",red:"rgba(248,113,113,.2)",gold:"rgba(251,191,36,.25)",green:"rgba(52,211,153,.2)",purple:"rgba(167,139,250,.2)"};
  const tc={blue:"#38BDF8",red:"#F87171",gold:"#FBBF24",green:"#34D399",purple:"#A78BFA"};
  return(
    <div style={{display:"inline-flex",alignItems:"center",gap:8,background:c[color]||`rgba(29,155,240,.1)`,border:`1px solid ${bc[color]||"rgba(29,155,240,.2)"}`,borderRadius:100,padding:"6px 16px",marginBottom:20}}>
      <span style={{display:"flex",color:tc[color]||"var(--blue2)"}}>{icon}</span>
      <span style={{fontSize:12,color:tc[color]||"var(--blue2)",fontWeight:500}}>{label}</span>
    </div>
  );
}

const modules = [
  {title:"자기 관리",en:"Self Management",color:"#38BDF8",icon:<User size={18}/>,
   theme:"모든 리더십의 시작 — 나를 아는 것이 팀을 바꾼다",
   topics:["리더십 패러다임 전환 (AI 시대 재정의)","정서적 지능 EQ 4가지 영역","강점 중심 자기 인식 (Talent 진단)","4대 에너지 관리 & 회복탄력성"],
   ai:"강점 Top5 카드 → 생성형 AI 입력 → 나만의 리더십 스타일 프로파일 자동 생성",
   brain:"주의집중(A) - 리더십 퀴즈·비디오 시청",hours:"2 ~ 4시간"},
  {title:"팀 관리",en:"Team Management",color:"#34D399",icon:<Users size={18}/>,
   theme:"팀원이 스스로 움직이게 하는 신뢰와 코칭의 기술",
   topics:["심리적 안정감 & 리더의 취약성","GROW 코칭 & 업무 위임 5단계","구성원 맞춤 역량 개발 (70·20·10)","갈등 관리 & 협업 시너지"],
   ai:"GROW 코칭 질문 확인 → 팀원 별 맞춤 코칭 질문 프롬프트 즉시 제작",
   brain:"능동참여(E) - 롤플레이·위임 대화 실습",hours:"2 ~ 4시간"},
  {title:"성과 관리",en:"Performance Management",color:"#F59E0B",icon:<BarChart3 size={18}/>,
   theme:"팀이 움직이면 성과가 따라온다 — 공정하고 동기 높이는 재설계",
   topics:["가치 정렬 (Alignment) - Balcony & Dancefloor","내적 동기부여의 3가지 시크릿","공정한 성과 관리 3원칙","1to1 On-going 피드백 (6-Box 모델)"],
   ai:"6-Box 피드백 진단 → AID 모델 기반 피드백 스크립트 AI 초안 30초 생성",
   brain:"오류·피드백(EF) - 피드백 롤플레이 실습",hours:"2 ~ 4시간"},
  {title:"변화 관리",en:"Change Management",color:"#A78BFA",icon:<Rocket size={18}/>,
   theme:"성과를 만드는 팀이 되었다면, 이제 변화를 이끄는 리더가 될 차례",
   topics:["조직 문화 4유형 & 건강도 진단","변화 아젠다 선정 U×I×F 기준","변화 관리 5단계 전략 & Quick Wins","변화 커뮤니케이션 3C (신뢰·연결·참여)"],
   ai:"팀 변화 아젠다 → 로드맵 초안 → 설득 One-Page 메시지 자동 생성",
   brain:"통합·통찰(C) - 팀 변화 커뮤니케이션 성찰",hours:"2 ~ 4시간"},
];

const outcomes=[
  {level:"개인",en:"Individual",kpi:"EQ 자기평가 +20% 향상",color:"#38BDF8",
   items:["강점 기반 리더십 스타일 명확화","자기 인식 & 감성 지능(EQ) 향상","AI 도구 활용 코칭 역량 강화","변화 대응력 & 회복 탄력성 증대"]},
  {level:"팀",en:"Team",kpi:"팀 몰입도 설문 +15% 향상",color:"#34D399",
   items:["심리적 안정감 지수 개선","GROW 코칭 문화 일상화","피드백 빈도 및 질 향상","팀원 내재적 동기 & 몰입도 상승"]},
  {level:"조직",en:"Organization",kpi:"6개월 내 성과 지표 개선 보고",color:"#FBBF24",
   items:["리더십 파이프라인 강화","이직률 감소 & 핵심 인재 유지","변화 관리 역량 조직 내재화","HRD ROI 가시화 & 경영진 신뢰"]},
];

export default function App(){
  const [leaders,setLeaders]=useState(10);
  const [salary,setSalary]=useState(5500);
  const [mod,setMod]=useState(0);
  const [msgs,setMsgs]=useState([]);
  const [inp,setInp]=useState("");
  const [loading,setLoading]=useState(false);
  const [started,setStarted]=useState(false);
  const [growStep,setGrowStep]=useState(0);
  const [navBg,setNavBg]=useState(false);
  const [modal,setModal]=useState(null);
  const bottomRef=useRef(null);
  const inputRef=useRef(null);

  useEffect(()=>{
    const fn=()=>setNavBg(window.scrollY>60);
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);

  const atRisk=Math.max(1,Math.round(leaders*0.25));
  const directLoss=atRisk*100_000_000;
  const teamPay=leaders*8*(salary*10000);
  const prodLoss=teamPay*0.20;
  const total=directLoss+prodLoss;

  const fmt=(n)=>{
    if(n>=1e8)return`${(n/1e8).toFixed(1)}억`;
    if(n>=1e4)return`${(n/1e4).toFixed(0)}만`;
    return n.toLocaleString();
  };

  const initChat=()=>{
    setStarted(true);setGrowStep(1);
    setMsgs([{role:"ai",text:`안녕하세요! AI 리더십 랩의 **GROW 코칭 파트너**입니다. 🎯\n\n**(G - Goal)** 오늘 이 대화에서 어떤 통찰이나 변화를 얻고 싶으신가요?\n\n지금 가장 어려운 리더십 상황을 편하게 말씀해 주세요.`}]);
    setTimeout(()=>inputRef.current?.focus(),100);
  };

  const send=async()=>{
    if(!inp.trim()||loading)return;
    const text=inp.trim();setInp("");
    const updated=[...msgs,{role:"user",text}];
    setMsgs(updated);setLoading(true);
    const turn=updated.filter(m=>m.role==="user").length;
    if(turn===1)setGrowStep(2);
    else if(turn===2)setGrowStep(3);
    else if(turn>=3)setGrowStep(4);
    try{
      const res=await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",max_tokens:500,
          system:`당신은 AI 리더십 랩의 전문 코치입니다. GROW 모델(Goal→Reality→Options→Will)을 사용합니다.
규칙: 한국어 답변, 한 번에 질문 1개, 공감 후 질문, 80자 이내로 간결하게, 마크다운 볼드 사용.
4-5번 교환 후 AI 리더십 랩 참가를 자연스럽게 권유하며 마무리하세요.`,
          messages:updated.map(m=>({role:m.role==="ai"?"assistant":"user",content:m.text}))
        })
      });
      const d=await res.json();
      setMsgs(p=>[...p,{role:"ai",text:d.content[0].text}]);
    }catch{
      setMsgs(p=>[...p,{role:"ai",text:"잠시 후 다시 시도해 주세요."}]);
    }
    setLoading(false);
  };

  const m=modules[mod];

  const growLabels=[
    {s:"G",full:"Goal",color:growStep===1?"var(--blue)":growStep>1?"#34D399":"var(--dim)"},
    {s:"R",full:"Reality",color:growStep===2?"var(--blue)":growStep>2?"#34D399":"var(--dim)"},
    {s:"O",full:"Options",color:growStep===3?"var(--blue)":growStep>3?"#34D399":"var(--dim)"},
    {s:"W",full:"Will",color:growStep===4?"var(--blue)":"var(--dim)"},
  ];

  const ContactModal=()=>{
    const isProposal=modal==="proposal";
    return(
      <div onClick={()=>setModal(null)} style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(0,0,0,.75)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
        <div onClick={e=>e.stopPropagation()} style={{background:"linear-gradient(160deg,#0F1E3D,#05091A)",border:"1px solid rgba(29,155,240,.35)",borderRadius:20,padding:"44px 40px",maxWidth:500,width:"100%",position:"relative",boxShadow:"0 30px 80px rgba(0,0,0,.6)"}}>
          <button onClick={()=>setModal(null)} style={{position:"absolute",top:18,right:20,background:"transparent",border:"none",color:"var(--dim)",cursor:"pointer",fontSize:22,lineHeight:1}}>×</button>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
            <div style={{background:isProposal?"linear-gradient(135deg,#FBBF24,#F59E0B)":"linear-gradient(135deg,#1D9BF0,#818CF8)",borderRadius:10,padding:"10px 12px",display:"flex"}}>
              {isProposal?<Star size={20} color="#0C1630"/>:<MessageSquare size={20} color="white"/>}
            </div>
            <div>
              <div style={{fontSize:11,color:isProposal?"#FBBF24":"var(--blue2)",fontWeight:600,textTransform:"uppercase",letterSpacing:"1px",marginBottom:3}}>
                {isProposal?"맞춤형 제안서 요청":"데모 시연 신청"}
              </div>
              <div style={{fontSize:19,fontWeight:700,fontFamily:"'Playfair Display',serif"}}>
                {isProposal?"지금 바로 연락주세요":"직접 체험해 보세요"}
              </div>
            </div>
          </div>
          <p style={{fontSize:14,color:"var(--mut)",lineHeight:1.75,marginBottom:32,paddingBottom:28,borderBottom:"1px solid var(--br)"}}>
            {isProposal
              ?"귀사의 규모·업종·과제에 딱 맞는 AI 리더십 랩 제안서를 무료로 제공해 드립니다. 아래 연락처로 문의 주시면 24시간 내 회신 드립니다."
              :"실제 프로그램 운영 방식과 생성형 AI 코칭 시스템을 직접 체험하실 수 있습니다. 편하신 방법으로 연락 주세요."}
          </p>
          <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:32}}>
            {[
              {icon:"📞",label:"전화 상담",value:"010-3468-5249",action:()=>window.location.href="tel:01034685249",hint:"월~금 09:00–18:00"},
              {icon:"✉️",label:"이메일 문의",value:"aude@aude.co.kr",action:()=>window.location.href=`mailto:aude@aude.co.kr?subject=${encodeURIComponent(isProposal?"[AI 리더십 랩] 맞춤형 제안서 요청":"[AI 리더십 랩] 데모 시연 신청")}`,hint:"24시간 내 회신 보장"},
            ].map((c,i)=>(
              <button key={i} onClick={c.action} style={{display:"flex",alignItems:"center",gap:16,background:"rgba(29,155,240,.06)",border:"1px solid rgba(29,155,240,.2)",borderRadius:14,padding:"18px 20px",cursor:"pointer",textAlign:"left",transition:"all .25s",width:"100%"}}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(29,155,240,.12)";e.currentTarget.style.borderColor="rgba(29,155,240,.4)";e.currentTarget.style.transform="translateY(-2px)";}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(29,155,240,.06)";e.currentTarget.style.borderColor="rgba(29,155,240,.2)";e.currentTarget.style.transform="translateY(0)";}}>
                <span style={{fontSize:26}}>{c.icon}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:11,color:"var(--dim)",fontWeight:600,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.5px"}}>{c.label}</div>
                  <div style={{fontSize:17,fontWeight:700,color:"var(--blue2)",fontFamily:"'IBM Plex Sans KR',sans-serif"}}>{c.value}</div>
                  <div style={{fontSize:11,color:"var(--dim)",marginTop:3}}>{c.hint}</div>
                </div>
                <ArrowRight size={16} color="var(--dim)"/>
              </button>
            ))}
          </div>
          <div style={{background:"rgba(251,191,36,.05)",border:"1px solid rgba(251,191,36,.2)",borderRadius:10,padding:"14px 18px",textAlign:"center"}}>
            <p style={{fontSize:12,color:"var(--mut)",lineHeight:1.6}}>
              <strong style={{color:"#FBBF24"}}>Consulting &amp; Comma</strong><br/>
              리더의 고민을 행동으로, 행동을 사람 중심의 성과로 전환하는
            </p>
          </div>
        </div>
      </div>
    );
  };

  return(
    <div style={{background:"var(--bg)",color:"var(--text)",minHeight:"100vh"}}>
      <style dangerouslySetInnerHTML={{__html:CSS}}/>
      {modal&&<ContactModal/>}

      {/* NAV */}
      <nav className="nav-wrap" style={{position:"sticky",top:0,zIndex:100,background:navBg?"rgba(5,9,26,.95)":"transparent",backdropFilter:"blur(12px)",borderBottom:navBg?"1px solid var(--br)":"none",padding:"16px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all .3s"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{background:"linear-gradient(135deg,#1D9BF0,#818CF8)",borderRadius:8,padding:"6px 10px",display:"flex",alignItems:"center"}}>
            <Brain size={18} color="white"/>
          </div>
          <span style={{fontWeight:700,fontSize:16,letterSpacing:"-.3px"}}>AI Leadership Lab</span>
        </div>
        <div style={{display:"flex",gap:24,alignItems:"center"}} className="hm">
          {["Why Now","학습 철학","코칭 데모","커리큘럼","성과","신청"].map((t,i)=>(
            <a key={i} href={`#s${i}`} style={{color:"var(--dim)",textDecoration:"none",fontSize:14,fontWeight:500,transition:"color .2s"}}
              onMouseEnter={e=>e.target.style.color="var(--blue2)"}
              onMouseLeave={e=>e.target.style.color="var(--dim)"}>{t}</a>
          ))}
        </div>
        <button className="btn-b nav-cta" style={{padding:"10px 20px",fontSize:13}} onClick={()=>document.getElementById("s5")?.scrollIntoView({behavior:"smooth"})}>무료 데모 신청</button>
      </nav>

      {/* HERO */}
      <section id="s0" className="mesh hero-section" style={{minHeight:"100svh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"80px 32px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"8%",right:"3%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(29,155,240,.07) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:"15%",left:"2%",width:350,height:350,borderRadius:"50%",background:"radial-gradient(circle,rgba(129,140,248,.05) 0%,transparent 70%)",pointerEvents:"none"}}/>

        <div style={{maxWidth:920,margin:"0 auto",textAlign:"center"}}>
          <div className="fadeUp hero-badge" style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(29,155,240,.1)",border:"1px solid rgba(29,155,240,.2)",borderRadius:100,padding:"8px 18px",marginBottom:32}}>
            <Sparkles size={14} color="#38BDF8"/>
            <span style={{fontSize:13,color:"#38BDF8",fontWeight:500}}>뇌과학 × 생성형 AI × 리더십의 통합</span>
          </div>

          <h1 className="disp f1 hero-h1" style={{fontSize:"clamp(42px,6vw,82px)",fontWeight:700,lineHeight:1.15,marginBottom:24,letterSpacing:"-1px"}}>
            리더의 고민을<br/><span className="gt">성과로 전환</span>하는<br/>AI 리더십 랩
          </h1>

          <p className="f2 hero-sub" style={{fontSize:18,color:"var(--mut)",maxWidth:600,margin:"0 auto 48px",lineHeight:1.7,fontWeight:300}}>
            3,600억 달러의 투자에도 불구하고 75%가 행동 변화에 실패하는<br/>리더십 교육의 역설을 AI로 끊어냅니다
          </p>

          <div className="f3 hero-btns" style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginBottom:72}}>
            <button className="btn-g" onClick={()=>document.getElementById("s2")?.scrollIntoView({behavior:"smooth"})}>GROW 코칭 지금 체험하기 →</button>
            <button className="btn-o" onClick={()=>document.getElementById("s1")?.scrollIntoView({behavior:"smooth"})}>손실 비용 계산해보기</button>
          </div>

          <div className="f4 hero-stats" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:16,maxWidth:720,margin:"0 auto"}}>
            {[
              {v:"75%",l:"행동 변화 실패율",c:"#F87171",icon:<AlertTriangle size={16}/>},
              {v:"1억원",l:"부적합 리더 1인의 연간 손실",c:"#F59E0B",icon:<TrendingUp size={16}/>},
              {v:"25%",l:"기존 교육 만족도",c:"#A78BFA",icon:<BarChart3 size={16}/>},
              {v:"90일",l:"AI 행동 전이 지원 기간",c:"#34D399",icon:<Clock size={16}/>},
            ].map((s,i)=>(
              <div key={i} className="card hero-stat" style={{padding:"20px 16px",textAlign:"center"}}>
                <div style={{color:s.c,marginBottom:8,display:"flex",justifyContent:"center"}}>{s.icon}</div>
                <div className="disp hero-stat-val" style={{fontSize:32,fontWeight:700,color:s.c}}>{s.v}</div>
                <div className="hero-stat-lbl" style={{fontSize:12,color:"var(--dim)",marginTop:4,lineHeight:1.4}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM + CALCULATOR */}
      <section id="s1" style={{padding:"100px 32px",background:"var(--surf)"}}>
        <div style={{maxWidth:1020,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:60}}>
            <Tag color="red" icon={<AlertTriangle size={13}/>} label="WHY NOW — 문제의 본질"/>
            <h2 className="disp" style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:700,marginBottom:16,lineHeight:1.2}}>
              지금, 귀사의 리더십 공백이<br/><span className="gg">얼마의 비용을 만들고 있을까요?</span>
            </h2>
            <p style={{color:"var(--mut)",fontSize:16,maxWidth:520,margin:"0 auto"}}>
              부적합한 리더 1명이 조직에 미치는 연간 손실액: <strong style={{color:"#F59E0B"}}>약 1억 원</strong><br/>
              <span style={{fontSize:13,color:"var(--dim)"}}>Source: Amalgam Insights, 2020</span>
            </p>
          </div>

          <div className="card" style={{borderRadius:20,padding:"clamp(24px,4vw,48px)",background:"linear-gradient(135deg,rgba(15,30,61,.95),rgba(5,9,26,.8))"}}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:48,alignItems:"start"}}>

              {/* INPUTS */}
              <div>
                <h3 style={{fontSize:18,fontWeight:700,marginBottom:32,color:"var(--blue2)",display:"flex",alignItems:"center",gap:8}}>
                  <span>🧮</span> 리더십 손실 계산기
                </h3>

                <div style={{marginBottom:36}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
                    <label style={{fontSize:14,color:"var(--mut)",fontWeight:500}}>팀장(리더) 수</label>
                    <span className="disp" style={{fontSize:26,fontWeight:700,color:"var(--blue2)"}}>{leaders}명</span>
                  </div>
                  <input type="range" className="slider" min={2} max={50} value={leaders} onChange={e=>setLeaders(+e.target.value)}/>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:6}}>
                    <span style={{fontSize:11,color:"var(--dim)"}}>2명</span>
                    <span style={{fontSize:11,color:"var(--dim)"}}>50명</span>
                  </div>
                </div>

                <div style={{marginBottom:36}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
                    <label style={{fontSize:14,color:"var(--mut)",fontWeight:500}}>팀원 평균 연봉</label>
                    <span className="disp" style={{fontSize:26,fontWeight:700,color:"var(--blue2)"}}>{salary.toLocaleString()}만</span>
                  </div>
                  <input type="range" className="slider" min={3000} max={12000} step={500} value={salary} onChange={e=>setSalary(+e.target.value)}/>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:6}}>
                    <span style={{fontSize:11,color:"var(--dim)"}}>3,000만원</span>
                    <span style={{fontSize:11,color:"var(--dim)"}}>1.2억원</span>
                  </div>
                </div>

                <div style={{background:"rgba(29,155,240,.07)",border:"1px solid rgba(29,155,240,.18)",borderRadius:12,padding:"16px 18px"}}>
                  <p style={{fontSize:12,color:"var(--mut)",lineHeight:1.7}}>
                    <strong style={{color:"var(--blue2)"}}>계산 근거</strong><br/>
                    · 부적합 리더 비율 25% 적용 (at-risk rate)<br/>
                    · 리더 1인 직접 손실: 1억원/년<br/>
                    · 팀 인건비 기반 생산성 손실 20%<br/>
                    <span style={{color:"var(--dim)"}}>팀 평균 인원: 8명 기준</span>
                  </p>
                </div>
              </div>

              {/* RESULTS */}
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                <div style={{background:"linear-gradient(135deg,rgba(248,113,113,.12),rgba(245,158,11,.08))",border:"1px solid rgba(248,113,113,.25)",borderRadius:16,padding:"32px 24px",textAlign:"center"}}>
                  <div style={{fontSize:11,color:"#F87171",fontWeight:600,marginBottom:8,textTransform:"uppercase",letterSpacing:"1.5px"}}>예상 연간 총 손실</div>
                  <div className="disp" style={{fontSize:"clamp(40px,5vw,60px)",fontWeight:800,color:"#FCD34D",lineHeight:1}}>{fmt(total)}원</div>
                  <div style={{fontSize:12,color:"var(--mut)",marginTop:10}}>
                    리더 {leaders}명 · 부적합 예상 <strong style={{color:"#F87171"}}>{atRisk}명</strong>
                  </div>
                </div>

                {[
                  {label:"부적합 리더 직접 손실",value:directLoss,color:"#F87171",note:`${atRisk}명 × 1억원`},
                  {label:"팀 생산성 저하 손실",value:prodLoss,color:"#F59E0B",note:"팀 인건비의 20%"},
                ].map((item,i)=>(
                  <div key={i} style={{background:"rgba(15,30,61,.8)",borderRadius:12,padding:"16px 20px"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                      <div>
                        <div style={{fontSize:13,color:"var(--mut)",fontWeight:500}}>{item.label}</div>
                        <div style={{fontSize:11,color:"var(--dim)",marginTop:2}}>{item.note}</div>
                      </div>
                      <span className="disp" style={{fontSize:20,fontWeight:700,color:item.color}}>{fmt(item.value)}원</span>
                    </div>
                    <div style={{background:"var(--card2)",borderRadius:4,height:6,overflow:"hidden"}}>
                      <div style={{width:`${Math.round(item.value/total*100)}%`,height:"100%",background:`linear-gradient(90deg,${item.color},${item.color}88)`,borderRadius:4,transition:"width .8s ease"}}/>
                    </div>
                  </div>
                ))}

                <div style={{background:"rgba(29,155,240,.07)",border:"1px solid rgba(29,155,240,.2)",borderRadius:12,padding:"16px 20px",textAlign:"center"}}>
                  <p style={{fontSize:13,color:"var(--mut)",marginBottom:12}}>
                    AI 리더십 랩으로 손실의 <strong style={{color:"var(--blue2)"}}>60% 이상</strong> 회복 가능
                  </p>
                  <button className="btn-b" style={{width:"100%",padding:"12px 20px",fontSize:14}}
                    onClick={()=>document.getElementById("s5")?.scrollIntoView({behavior:"smooth"})}>
                    맞춤형 ROI 분석 받기 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{padding:"100px 32px"}} className="mesh">
        <div style={{maxWidth:1020,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:60}}>
            <Tag color="blue" icon={<Brain size={13}/>} label="OUR DIFFERENTIATION — 학습 철학"/>
            <h2 className="disp" style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:700,marginBottom:16,lineHeight:1.2}}>
              교육 만족도 <span style={{color:"#F87171"}}>25%</span>의 한계를 돌파하는<br/>
              <span className="gt">뇌가 진짜 학습하는 방식</span>
            </h2>
            <p style={{color:"var(--mut)",fontSize:15,maxWidth:540,margin:"0 auto",lineHeight:1.7}}>
              Stanislas Dehaene 인지학습 연구 기반 A-E-EF-C 4단계 프로세스<br/>
              AI와 동료 상호작용으로 자신만의 의미를 재창조합니다
            </p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:16,marginBottom:48}}>
            {[
              {letter:"A",title:"주의 집중",en:"Attention",desc:"뇌는 주의를 기울일 때만 학습합니다. 짧고 강렬한 도입으로 호기심을 자극합니다.",color:"#38BDF8",bg:"rgba(56,189,248,.07)"},
              {letter:"E",title:"적극 참여",en:"Active Engagement",desc:"가설을 세우고 검증하는 능동 학습. 토론, 진단, 실습 중심의 참여형 설계입니다.",color:"#34D399",bg:"rgba(52,211,153,.07)"},
              {letter:"EF",title:"오류와 피드백",en:"Error & Feedback",desc:"안전한 공간에서 에러를 만들고, Buddy·AI의 구조화된 피드백으로 고도화합니다.",color:"#F59E0B",bg:"rgba(245,158,11,.07)"},
              {letter:"C",title:"통합과 통찰",en:"Consolidation",desc:"반복과 성찰로 장기기억화. 생성형 AI로 현업에서 즉시 꺼내 쓸 수 있게 합니다.",color:"#A78BFA",bg:"rgba(167,139,250,.07)"},
            ].map((step,i)=>(
              <div key={i} className="card" style={{padding:"28px 24px",background:step.bg,borderColor:`${step.color}25`}}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                  <div className="disp" style={{width:46,height:46,borderRadius:"50%",background:`${step.color}18`,border:`2px solid ${step.color}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:800,color:step.color}}>{step.letter}</div>
                  <div>
                    <div style={{fontSize:16,fontWeight:700,color:step.color}}>{step.title}</div>
                    <div style={{fontSize:11,color:"var(--dim)"}}>{step.en}</div>
                  </div>
                </div>
                <p style={{fontSize:13,color:"var(--mut)",lineHeight:1.7}}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{borderRadius:16,padding:"32px 40px",textAlign:"center",background:"rgba(15,30,61,.9)"}}>
            <h3 style={{fontSize:22,fontWeight:700,marginBottom:16}}>
              <span style={{color:"var(--dim)"}}>75%가 실패하는 그 간격,</span>{" "}
              <span className="gt">AI가 Knowing을 Doing으로 연결합니다</span>
            </h3>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
              {["🤖 적응형 이해도 체크 (Smarter Tester)","🎭 개인화 시나리오 (Scenario Architect)","⚡ 즉각적 행동 교정 (Feedback Analyst)"].map((t,i)=>(
                <div key={i} style={{background:"rgba(29,155,240,.08)",border:"1px solid rgba(29,155,240,.2)",borderRadius:100,padding:"8px 18px",fontSize:13,color:"var(--mut)"}}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GROW COACHING DEMO */}
      <section id="s2" style={{padding:"100px 32px",background:"var(--surf)"}}>
        <div style={{maxWidth:820,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <Tag color="purple" icon={<Bot size={13}/>} label="LIVE AI DEMO — GROW 코칭 직접 체험"/>
            <h2 className="disp" style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:700,marginBottom:16}}>
              지금 바로 <span className="gt">AI 코칭</span>을 체험해보세요
            </h2>
            <p style={{color:"var(--mut)",fontSize:15}}>
              GROW 모델 기반의 실제 AI 코칭 파트너가 리더십 고민에 응답합니다
            </p>
          </div>

          <div className="card" style={{borderRadius:20,overflow:"hidden",background:"var(--card)",padding:0}}>
            {/* CHAT HEADER */}
            <div style={{padding:"16px 20px",borderBottom:"1px solid var(--br)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(29,155,240,.04)"}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:38,height:38,borderRadius:"50%",background:"linear-gradient(135deg,#1D9BF0,#818CF8)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Bot size={18} color="white"/>
                </div>
                <div>
                  <div style={{fontSize:14,fontWeight:700}}>AI 리더십 코치</div>
                  <div style={{fontSize:11,color:"#34D399",display:"flex",alignItems:"center",gap:4}}>
                    <div style={{width:6,height:6,borderRadius:"50%",background:"#34D399"}}/>
                    {started?"코칭 진행 중":"대기 중"}
                  </div>
                </div>
              </div>

              {/* GROW STAGES */}
              <div style={{display:"flex",alignItems:"center",gap:4}}>
                {growLabels.map((g,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:4}}>
                    <div style={{width:30,height:30,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,border:`2px solid ${g.color}`,color:g.color,background:growStep>i+1?"#059669":growStep===i+1?"rgba(29,155,240,.15)":"transparent",transition:"all .4s"}}>
                      {growStep>i+1?"✓":g.s}
                    </div>
                    {i<3&&<div style={{width:16,height:1,background:growStep>i+1?"#34D399":"var(--br)"}}/>}
                  </div>
                ))}
                <div style={{marginLeft:4,fontSize:11,color:"var(--dim)"}}>
                  {["","Goal","Reality","Options","Will"][growStep]||""}
                </div>
              </div>
            </div>

            {/* MESSAGES */}
            <div style={{height:380,overflowY:"auto",padding:20,display:"flex",flexDirection:"column",gap:16}}>
              {!started?(
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:20,textAlign:"center"}}>
                  <div style={{width:80,height:80,borderRadius:"50%",background:"linear-gradient(135deg,rgba(29,155,240,.18),rgba(129,140,248,.18))",border:"1px solid rgba(29,155,240,.3)",display:"flex",alignItems:"center",justifyContent:"center"}} className="flt">
                    <MessageSquare size={34} color="#38BDF8"/>
                  </div>
                  <div>
                    <p style={{color:"var(--mut)",fontSize:14,marginBottom:6}}>당신의 리더십 고민을 GROW 모델로 함께 탐색합니다</p>
                    <p style={{color:"var(--dim)",fontSize:12,marginBottom:24}}>Goal → Reality → Options → Will</p>
                    <button className="btn-b" onClick={initChat}>
                      <span style={{display:"flex",alignItems:"center",gap:8,justifyContent:"center"}}>
                        <Play size={16}/>코칭 시작하기
                      </span>
                    </button>
                  </div>
                </div>
              ):(
                <>
                  {msgs.map((msg,i)=>(
                    <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",flexDirection:msg.role==="user"?"row-reverse":"row"}}>
                      {msg.role==="ai"&&(
                        <div style={{width:30,height:30,borderRadius:"50%",background:"linear-gradient(135deg,#1D9BF0,#818CF8)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:4}}>
                          <Bot size={14} color="white"/>
                        </div>
                      )}
                      <div style={{maxWidth:"78%",background:msg.role==="ai"?"rgba(29,155,240,.07)":"rgba(255,255,255,.04)",border:`1px solid ${msg.role==="ai"?"rgba(29,155,240,.2)":"rgba(255,255,255,.07)"}`,borderRadius:msg.role==="ai"?"4px 16px 16px 16px":"16px 4px 16px 16px",padding:"12px 16px",fontSize:13,lineHeight:1.75,color:msg.role==="ai"?"var(--text)":"var(--mut)",whiteSpace:"pre-wrap"}}>
                        {renderMd(msg.text)}
                      </div>
                    </div>
                  ))}
                  {loading&&(
                    <div style={{display:"flex",gap:10,alignItems:"flex-start"}}>
                      <div style={{width:30,height:30,borderRadius:"50%",background:"linear-gradient(135deg,#1D9BF0,#818CF8)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <Bot size={14} color="white"/>
                      </div>
                      <div style={{background:"rgba(29,155,240,.07)",border:"1px solid rgba(29,155,240,.2)",borderRadius:"4px 16px 16px 16px",padding:"16px 20px"}}>
                        <span className="td"/><span className="td"/><span className="td"/>
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef}/>
                </>
              )}
            </div>

            {/* INPUT */}
            {started&&(
              <div style={{padding:"14px 18px",borderTop:"1px solid var(--br)",display:"flex",gap:10,alignItems:"flex-end",background:"rgba(15,30,61,.5)"}}>
                <textarea ref={inputRef} className="ci" value={inp} rows={2}
                  onChange={e=>setInp(e.target.value)}
                  onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}
                  placeholder="리더십 고민을 입력하세요… (Enter 전송)"/>
                <button className="btn-b" onClick={send} disabled={!inp.trim()||loading} style={{padding:"10px 14px",flexShrink:0,display:"flex",alignItems:"center"}}>
                  <Send size={16}/>
                </button>
                <button onClick={()=>{setMsgs([]);setStarted(false);setGrowStep(0);setInp("");}}
                  style={{background:"transparent",border:"1px solid var(--br)",borderRadius:8,color:"var(--dim)",cursor:"pointer",padding:"10px 12px",flexShrink:0,transition:"all .2s",display:"flex",alignItems:"center"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="var(--bra)"}
                  onMouseLeave={e=>e.currentTarget.style.borderColor="var(--br)"}>
                  <RotateCcw size={14}/>
                </button>
              </div>
            )}
          </div>
          <p style={{textAlign:"center",color:"var(--dim)",fontSize:12,marginTop:14}}>
            * 실제 프로그램에서는 Gemini 생성형 AI와 전문 퍼실리테이터가 함께 코칭을 지원합니다
          </p>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="s3" style={{padding:"100px 32px"}} className="mesh">
        <div style={{maxWidth:1020,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <Tag color="green" icon={<BookOpen size={13}/>} label="PROGRAM OVERVIEW — 커리큘럼"/>
            <h2 className="disp" style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:700,marginBottom:16}}>
              팀장 리더십의 <span className="gt">4개의 엔진</span><br/>STPC 모델
            </h2>
            <p style={{color:"var(--mut)",fontSize:14}}>리더의 자기 인식(Self) → 팀 결속(Team) → 성과(Performance) → 변화(Change)</p>
          </div>

          <div style={{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap",justifyContent:"center"}}>
            {modules.map((mm,i)=>(
              <button key={i} onClick={()=>setMod(i)} className={`tab${mod===i?" on":""}`}
                style={mod===i?{background:mm.color,borderColor:mm.color,color:i===2?"#0C1630":"white"}:{}}>
                M{i+1}: {mm.title}
              </button>
            ))}
          </div>

          <div className="card" style={{borderRadius:20,padding:"clamp(24px,4vw,40px)",background:"linear-gradient(135deg,rgba(15,30,61,.95),rgba(5,9,26,.8))",borderColor:`${m.color}25`}}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:36}}>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                  <div style={{background:`${m.color}18`,borderRadius:10,padding:10,color:m.color}}>{m.icon}</div>
                  <div>
                    <div style={{fontSize:11,color:m.color,fontWeight:600,textTransform:"uppercase",letterSpacing:"1px"}}>Module {mod+1}</div>
                    <div className="disp" style={{fontSize:24,fontWeight:700}}>{m.title}</div>
                    <div style={{fontSize:11,color:"var(--dim)"}}>{m.en}</div>
                  </div>
                </div>
                <p style={{fontSize:13,color:"var(--mut)",marginBottom:24,lineHeight:1.65,fontStyle:"italic",borderLeft:`2px solid ${m.color}40`,paddingLeft:12}}>"{m.theme}"</p>
                <div>
                  <div style={{fontSize:12,fontWeight:600,color:"var(--dim)",marginBottom:12,textTransform:"uppercase",letterSpacing:"0.5px"}}>핵심 주제 4개</div>
                  <div style={{display:"flex",flexDirection:"column",gap:9}}>
                    {m.topics.map((t,i)=>(
                      <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8}}>
                        <CheckCircle size={14} color={m.color} style={{flexShrink:0,marginTop:2}}/>
                        <span style={{fontSize:13,color:"var(--mut)",lineHeight:1.5}}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                <div style={{background:`${m.color}0D`,border:`1px solid ${m.color}22`,borderRadius:12,padding:20}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                    <Bot size={16} color={m.color}/>
                    <span style={{fontSize:13,fontWeight:600,color:m.color}}>생성형 AI 활동</span>
                  </div>
                  <p style={{fontSize:13,color:"var(--mut)",lineHeight:1.65}}>{m.ai}</p>
                </div>
                <div style={{background:"rgba(56,189,248,.05)",border:"1px solid rgba(56,189,248,.15)",borderRadius:12,padding:20}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                    <Brain size={16} color="#38BDF8"/>
                    <span style={{fontSize:13,fontWeight:600,color:"#38BDF8"}}>뇌과학 학습 설계 (A-E-EF-C)</span>
                  </div>
                  <p style={{fontSize:13,color:"var(--mut)",lineHeight:1.65}}>{m.brain}</p>
                </div>
                <div style={{background:"rgba(52,211,153,.05)",border:"1px solid rgba(52,211,153,.15)",borderRadius:12,padding:20,display:"flex",alignItems:"center",gap:12}}>
                  <Clock size={20} color="#34D399"/>
                  <div>
                    <div style={{fontSize:12,fontWeight:600,color:"#34D399",marginBottom:3}}>운영 시간</div>
                    <div style={{fontSize:13,color:"var(--mut)"}}>{m.hours} (요청에 따라 조정 가능)</div>
                  </div>
                </div>

                {/* AI Copilot preview */}
                <div style={{background:"linear-gradient(135deg,rgba(29,155,240,.07),rgba(129,140,248,.05))",border:"1px solid rgba(29,155,240,.18)",borderRadius:12,padding:20}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                    <Sparkles size={14} color="var(--blue2)"/>
                    <span style={{fontSize:12,fontWeight:600,color:"var(--blue2)"}}>교육 이후 AI 코파일럿 지원</span>
                  </div>
                  {[
                    {m:1,t:"강점 기반의 성찰 파트너",d:"주 1회 자동 체크인 & 성찰 질문 3개"},
                    {m:2,t:"리더십 코칭 어시스턴트",d:"1:1 면담 전 GROW 질문 자동 생성"},
                    {m:3,t:"피드백 스크립트 생성기",d:"AID 구조 피드백 30초 초안 완성"},
                    {m:4,t:"변화 커뮤니케이션 코치",d:"변화 곡선 단계별 메시지 자동 생성"},
                  ].filter(x=>x.m===mod+1).map((x,i)=>(
                    <div key={i}>
                      <div style={{fontSize:13,fontWeight:600,color:"var(--text)"}}>{x.t}</div>
                      <div style={{fontSize:12,color:"var(--dim)",marginTop:3}}>{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="s4" style={{padding:"100px 32px",background:"var(--surf)"}}>
        <div style={{maxWidth:1020,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:60}}>
            <Tag color="gold" icon={<Award size={13}/>} label="LEARNING OUTCOMES — 측정되는 변화"/>
            <h2 className="disp" style={{fontSize:"clamp(28px,4vw,52px)",fontWeight:700,marginBottom:16}}>
              이 프로그램은 '좋은 교육'이 아닌<br/><span className="gg">'측정되는 변화'를 목표로 합니다</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20,marginBottom:32}}>
            {outcomes.map((o,i)=>(
              <div key={i} className="card" style={{padding:"32px 28px",borderColor:`${o.color}22`,background:`linear-gradient(160deg,${o.color}07 0%,transparent 60%)`}}>
                <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:24}}>
                  <span className="disp" style={{fontSize:32,fontWeight:700,color:o.color}}>{o.level}</span>
                  <span style={{fontSize:12,color:"var(--dim)",fontWeight:500}}>{o.en}</span>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:24}}>
                  {o.items.map((item,j)=>(
                    <div key={j} style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                      <CheckCircle size={14} color={o.color} style={{flexShrink:0,marginTop:2}}/>
                      <span style={{fontSize:13,color:"var(--mut)",lineHeight:1.55}}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{background:`${o.color}12`,border:`1px solid ${o.color}28`,borderRadius:8,padding:"12px 16px",textAlign:"center"}}>
                  <div style={{fontSize:11,fontWeight:700,color:o.color,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:4}}>KPI 목표</div>
                  <div style={{fontSize:13,color:"var(--mut)"}}>{o.kpi}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Differentiation Table */}
          <div className="card" style={{borderRadius:16,padding:"28px 24px",overflowX:"auto"}}>
            <h3 style={{fontSize:17,fontWeight:700,marginBottom:20,textAlign:"center"}}>왜 다른 리더십 프로그램이 아닌가?</h3>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:560}}>
              <thead>
                <tr style={{borderBottom:"1px solid var(--br)"}}>
                  {["기준","일반 리더십 교육","AI 도구 활용 교육","AI 리더십 랩 ✓"].map((h,i)=>(
                    <th key={i} style={{padding:"12px 16px",color:i===3?"#38BDF8":"var(--dim)",fontWeight:600,textAlign:"left",fontSize:13}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["행동 전이 (Transfer)","교육 후 미지원","도구 제공 미연결","30~90일 Follow-up"],
                  ["AI 통합 수준","없음","단순 AI 실습","생성형 AI 24시간 지원"],
                  ["뇌과학 설계","강사 경험 기반","미적용","A-E-EF-C 4단계 적용"],
                  ["개인화 수준","일률 강의식","부분 맞춤","AI 적응형 시나리오"],
                ].map((row,i)=>(
                  <tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                    {row.map((cell,j)=>(
                      <td key={j} style={{padding:"14px 16px",color:j===0?"var(--mut)":j===3?"#34D399":"var(--dim)",fontWeight:j===3?600:400}}>
                        {j===1?<span style={{color:"#F87171"}}>✕ {cell}</span>:j===2?<span style={{color:"#F59E0B"}}>△ {cell}</span>:j===3?<span style={{color:"#34D399"}}>✓ {cell}</span>:cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="s5" style={{padding:"100px 32px",background:"linear-gradient(160deg,var(--card) 0%,var(--bg) 100%)",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:700,height:700,borderRadius:"50%",background:"radial-gradient(circle,rgba(29,155,240,.05) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:720,margin:"0 auto",position:"relative"}}>
          <Tag color="gold" icon={<Sparkles size={13}/>} label="지금 시작하세요"/>
          <h2 className="disp" style={{fontSize:"clamp(32px,5vw,62px)",fontWeight:700,lineHeight:1.2,marginBottom:24}}>
            리더십 투자,<br/><span className="gt">이번엔 반드시 달라야 합니다</span>
          </h2>
          <p style={{color:"var(--mut)",fontSize:17,marginBottom:48,lineHeight:1.7}}>
            귀사의 리더십 현황을 진단하고,<br/>AI 리더십 랩의 맞춤형 제안서를 받아보세요
          </p>

          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginBottom:56}}>
            <button className="btn-g" onClick={()=>setModal("proposal")}>우리 조직 맞춤 제안서 받기 →</button>
            <button className="btn-o" onClick={()=>setModal("demo")}>데모 시연 신청하기</button>
          </div>

          {/* Delivery Options */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,textAlign:"left",marginTop:16}}>
            {[
              {label:"집합 교육",detail:"1~2일 집중 워크숍, 팀 빌딩 효과, 16~24명 권장",icon:<Building2 size={16}/>,hl:false},
              {label:"혼합 교육 ★ 권장",detail:"진단 + 교육 + 90일 AI 팔로우업",icon:<Star size={16}/>,hl:true},
              {label:"기업 맞춤 설계",detail:"업종·직급·규모별 커스터마이즈",icon:<Settings size={16}/>,hl:false},
              {label:"모듈 조합 설계",detail:"STPC 분기별 1모듈씩 운영 가능",icon:<Hash size={16}/>,hl:false},
            ].map((opt,i)=>(
              <div key={i} className="card" style={{padding:"18px 20px",borderColor:opt.hl?"rgba(251,191,36,.3)":"var(--br)",background:opt.hl?"rgba(251,191,36,.04)":"transparent"}}>
                <div style={{color:opt.hl?"#FBBF24":"var(--blue2)",marginBottom:8}}>{opt.icon}</div>
                <div style={{fontSize:13,fontWeight:600,color:opt.hl?"#FBBF24":"var(--text)",marginBottom:6}}>{opt.label}</div>
                <div style={{fontSize:12,color:"var(--dim)",lineHeight:1.5}}>{opt.detail}</div>
              </div>
            ))}
          </div>

          {/* Included */}
          <div className="card" style={{borderRadius:14,padding:"24px 28px",marginTop:24,textAlign:"left",background:"rgba(15,30,61,.8)"}}>
            <div style={{fontSize:13,fontWeight:600,color:"var(--dim)",marginBottom:14,textTransform:"uppercase",letterSpacing:"0.5px"}}>포함 내용 (What's Included)</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:8}}>
              {["워크숍 워크북 (모듈별 활동지 포함)","생성형 AI 설정 가이드 & 활용 매뉴얼","퍼실리테이터 운영 가이드 (사내 강사용)","교육 후 30일 팔로우업 체크리스트","참가자 학습 성과 리포트 (HRD 담당자용)","연간 부스터 세션 2회 옵션"].map((t,i)=>(
                <div key={i} style={{display:"flex",gap:8,alignItems:"center"}}>
                  <CheckCircle size={13} color="#34D399" style={{flexShrink:0}}/>
                  <span style={{fontSize:12,color:"var(--mut)"}}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:"32px 32px",borderTop:"1px solid var(--br)",textAlign:"center",background:"var(--bg)"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:10}}>
          <div style={{background:"linear-gradient(135deg,#1D9BF0,#818CF8)",borderRadius:6,padding:"5px 8px",display:"flex",alignItems:"center"}}>
            <Brain size={14} color="white"/>
          </div>
          <span style={{fontWeight:700,fontSize:14}}>AI Leadership Lab</span>
          <span style={{color:"var(--dim)",fontSize:13}}>by Consulting &amp; Comma</span>
        </div>
        <p style={{color:"var(--dim)",fontSize:12,marginBottom:6}}>리더의 고민을 행동으로, 행동을 사람 중심의 성과로 전환하는</p>
        <p style={{color:"var(--dim)",fontSize:11}}>투자 비용 안내 및 맞춤 제안서는 별도 협의 | © 2025 Consulting &amp; Comma</p>
      </footer>
    </div>
  );
}
