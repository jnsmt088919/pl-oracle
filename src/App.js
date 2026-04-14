import { useState, useEffect } from “react”;

const TEAMS = {
ARS: { name: “Arsenal”,         short: “Arsenal”,    logo: “https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg”,                        color: “#EF0107” },
MCI: { name: “Manchester City”, short: “Man City”,   logo: “https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg”,           color: “#6CABDD” },
MUN: { name: “Man United”,      short: “Man Utd”,    logo: “https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg”,         color: “#DA291C” },
AVL: { name: “Aston Villa”,     short: “Villa”,      logo: “https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg”,   color: “#670E36” },
LFC: { name: “Liverpool”,       short: “Liverpool”,  logo: “https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg”,                       color: “#C8102E” },
CFC: { name: “Chelsea”,         short: “Chelsea”,    logo: “https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg”,                         color: “#034694” },
BRE: { name: “Brentford”,       short: “Brentford”,  logo: “https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg”,                 color: “#E30613” },
EVE: { name: “Everton”,         short: “Everton”,    logo: “https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg”,                    color: “#003399” },
BRI: { name: “Brighton”,        short: “Brighton”,   logo: “https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg”,      color: “#0057B8” },
SUN: { name: “Sunderland”,      short: “Sunderland”, logo: “https://upload.wikimedia.org/wikipedia/en/7/77/Logo_Sunderland.svg”,                    color: “#EB172B” },
BOU: { name: “Bournemouth”,     short: “Bournemth”,  logo: “https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg”,          color: “#DA291C” },
FUL: { name: “Fulham”,          short: “Fulham”,     logo: “https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg”,             color: “#CC0000” },
CRY: { name: “Crystal Palace”,  short: “C. Palace”,  logo: “https://upload.wikimedia.org/wikipedia/en/0/0c/Crystal_Palace_FC_logo_%282022%29.svg”,  color: “#1B458F” },
NEW: { name: “Newcastle Utd”,   short: “Newcastle”,  logo: “https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg”,              color: “#241F20” },
LEE: { name: “Leeds United”,    short: “Leeds”,      logo: “https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg”,             color: “#1D428A” },
NFO: { name: “Nott’m Forest”,   short: “Forest”,     logo: “https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg”,        color: “#DD0000” },
WHU: { name: “West Ham”,        short: “West Ham”,   logo: “https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg”,            color: “#7A263A” },
TOT: { name: “Tottenham”,       short: “Spurs”,      logo: “https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg”,                  color: “#132257” },
BUR: { name: “Burnley”,         short: “Burnley”,    logo: “https://upload.wikimedia.org/wikipedia/en/6/62/Burnley_F.C._Logo.svg”,                  color: “#6C1D45” },
WOL: { name: “Wolves”,          short: “Wolves”,     logo: “https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg”,            color: “#FDB913” },
};

const UPCOMING = [
{ id:1,  home:“BRE”, away:“FUL”, date:“Sat 18 Apr”, time:“19:30”, hw:44.8, d:26.0, aw:29.2, venue:“Gtech Community Stadium” },
{ id:2,  home:“LEE”, away:“WOL”, date:“Sat 18 Apr”, time:“22:00”, hw:59.3, d:23.7, aw:17.0, venue:“Elland Road” },
{ id:3,  home:“NEW”, away:“BOU”, date:“Sat 18 Apr”, time:“22:00”, hw:48.5, d:24.0, aw:27.5, venue:“St. James’ Park” },
{ id:4,  home:“TOT”, away:“BRI”, date:“Sun 19 Apr”, time:“01:30”, hw:35.1, d:25.8, aw:39.1, venue:“Tottenham Hotspur Stadium” },
{ id:5,  home:“CFC”, away:“MUN”, date:“Sun 19 Apr”, time:“04:00”, hw:41.8, d:26.2, aw:32.0, venue:“Stamford Bridge” },
{ id:6,  home:“AVL”, away:“SUN”, date:“Sun 19 Apr”, time:“22:00”, hw:57.8, d:24.3, aw:17.9, venue:“Villa Park” },
{ id:7,  home:“EVE”, away:“LFC”, date:“Sun 19 Apr”, time:“22:00”, hw:29.0, d:27.0, aw:44.0, venue:“Goodison Park” },
{ id:8,  home:“NFO”, away:“BUR”, date:“Sun 19 Apr”, time:“22:00”, hw:62.5, d:21.7, aw:15.8, venue:“The City Ground” },
{ id:9,  home:“MCI”, away:“ARS”, date:“Mon 20 Apr”, time:“00:30”, hw:51.3, d:25.6, aw:23.1, venue:“Etihad Stadium” },
{ id:10, home:“CRY”, away:“WHU”, date:“Tue 21 Apr”, time:“04:00”, hw:42.2, d:28.4, aw:29.4, venue:“Selhurst Park” },
];

const RECENT = [
{ home:“MUN”, away:“LEE”, sh:1, sa:2, date:“13 Apr” },
{ home:“CFC”, away:“MCI”, sh:0, sa:3, date:“12 Apr” },
{ home:“SUN”, away:“TOT”, sh:1, sa:0, date:“12 Apr” },
{ home:“NFO”, away:“AVL”, sh:1, sa:1, date:“12 Apr” },
{ home:“LFC”, away:“FUL”, sh:2, sa:0, date:“11 Apr” },
{ home:“ARS”, away:“BOU”, sh:1, sa:2, date:“11 Apr” },
{ home:“BRE”, away:“EVE”, sh:2, sa:2, date:“11 Apr” },
{ home:“WHU”, away:“WOL”, sh:4, sa:0, date:“10 Apr” },
];

const STANDINGS = [
{ t:“ARS”, pts:70, w:21, d:7,  l:4,  gd:”+32”, form:[“W”,“W”,“L”,“W”,“W”] },
{ t:“MCI”, pts:64, w:19, d:7,  l:5,  gd:”+28”, form:[“W”,“W”,“W”,“D”,“W”] },
{ t:“MUN”, pts:55, w:15, d:10, l:7,  gd:”+18”, form:[“L”,“W”,“D”,“W”,“L”] },
{ t:“AVL”, pts:55, w:16, d:7,  l:9,  gd:”+14”, form:[“D”,“W”,“W”,“D”,“W”] },
{ t:“LFC”, pts:52, w:15, d:7,  l:10, gd:”+11”, form:[“W”,“W”,“D”,“L”,“W”] },
{ t:“CFC”, pts:48, w:13, d:9,  l:10, gd:”+8”,  form:[“L”,“D”,“W”,“W”,“L”] },
{ t:“BRE”, pts:47, w:13, d:8,  l:11, gd:”+5”,  form:[“D”,“W”,“L”,“W”,“D”] },
{ t:“EVE”, pts:47, w:13, d:8,  l:11, gd:”+3”,  form:[“D”,“W”,“L”,“D”,“W”] },
{ t:“BRI”, pts:46, w:12, d:10, l:10, gd:”+2”,  form:[“W”,“L”,“D”,“W”,“W”] },
{ t:“SUN”, pts:46, w:12, d:10, l:10, gd:”+1”,  form:[“W”,“D”,“L”,“W”,“W”] },
{ t:“BOU”, pts:45, w:10, d:15, l:7,  gd:“0”,   form:[“W”,“D”,“D”,“W”,“W”] },
{ t:“FUL”, pts:44, w:13, d:5,  l:14, gd:”-2”,  form:[“L”,“L”,“W”,“D”,“L”] },
{ t:“CRY”, pts:42, w:11, d:9,  l:11, gd:”-4”,  form:[“W”,“L”,“W”,“D”,“W”] },
{ t:“NEW”, pts:42, w:12, d:6,  l:14, gd:”-5”,  form:[“L”,“W”,“L”,“D”,“L”] },
{ t:“LEE”, pts:36, w:8,  d:12, l:12, gd:”-9”,  form:[“W”,“D”,“L”,“D”,“W”] },
{ t:“NFO”, pts:33, w:8,  d:9,  l:15, gd:”-12”, form:[“D”,“D”,“L”,“W”,“L”] },
{ t:“WHU”, pts:32, w:8,  d:8,  l:16, gd:”-14”, form:[“W”,“L”,“L”,“D”,“L”] },
{ t:“TOT”, pts:30, w:7,  d:9,  l:16, gd:”-16”, form:[“L”,“D”,“L”,“L”,“L”] },
{ t:“BUR”, pts:20, w:4,  d:8,  l:20, gd:”-28”, form:[“L”,“L”,“D”,“L”,“L”] },
{ t:“WOL”, pts:17, w:3,  d:8,  l:21, gd:”-32”, form:[“L”,“L”,“L”,“D”,“L”] },
];

// ── colour tokens ──────────────────────────────────────────────
const C = {
bg:       “#F5F6FA”,
surface:  “#FFFFFF”,
surface2: “#F0F1F6”,
border:   “#E8E9F0”,
border2:  “#D8DAE8”,
text:     “#0D0E14”,
text2:    “#5A5C72”,
text3:    “#9B9DB8”,
green:    “#00B87A”,
greenBg:  “#E6F8F2”,
amber:    “#E8920A”,
amberBg:  “#FEF3E2”,
red:      “#D93025”,
redBg:    “#FDECEA”,
purple:   “#6B4EFF”,
purpleBg: “#EEEBFF”,
};

function TeamLogo({ id, size = 32 }) {
const [err, setErr] = useState(false);
const t = TEAMS[id];
if (!t) return null;
if (err) return (
<div style={{
width: size, height: size, borderRadius: size * 0.28, flexShrink: 0,
background: t.color + “18”, border: `1.5px solid ${t.color}40`,
display: “flex”, alignItems: “center”, justifyContent: “center”,
fontSize: size * 0.38, fontWeight: 900, color: t.color,
fontFamily: “‘Barlow Condensed’, sans-serif”,
}}>{id.slice(0,2)}</div>
);
return (
<img src={t.logo} alt={t.name} width={size} height={size}
onError={() => setErr(true)}
style={{ objectFit: “contain”, flexShrink: 0, filter: “drop-shadow(0 1px 4px rgba(0,0,0,0.15))” }}
/>
);
}

function ProbBar({ hw, d, aw }) {
const [on, setOn] = useState(false);
useEffect(() => { const tm = setTimeout(() => setOn(true), 80); return () => clearTimeout(tm); }, []);
return (
<div>
<div style={{ display:“flex”, height:8, borderRadius:8, overflow:“hidden”, gap:2 }}>
{[[hw, C.green],[d, C.amber],[aw, C.red]].map(([v,c],i)=>(
<div key={i} style={{
height:“100%”, background:c,
width: on ? `${v}%` : “0%”,
transition:`width 0.85s cubic-bezier(0.4,0,0.2,1) ${i*0.07}s`,
borderRadius: i===0?“8px 0 0 8px”:i===2?“0 8px 8px 0”:0,
}}/>
))}
</div>
<div style={{ display:“flex”, justifyContent:“space-between”, marginTop:6 }}>
{[[“Home”,hw,C.green],[“Draw”,d,C.amber],[“Away”,aw,C.red]].map(([l,v,c])=>(
<div key={l} style={{ display:“flex”, alignItems:“center”, gap:4 }}>
<div style={{ width:7, height:7, borderRadius:“50%”, background:c }}/>
<span style={{ fontSize:10, color:C.text2, fontWeight:600 }}>{l} {v}%</span>
</div>
))}
</div>
</div>
);
}

function SemiGauge({ pct, color, bgColor, size=76, name }) {
const [on, setOn] = useState(false);
useEffect(() => { const tm = setTimeout(() => setOn(true), 200); return () => clearTimeout(tm); }, []);
const r = size/2 - 8;
const arc = Math.PI * r;
const dash = on ? (pct/100)*arc : 0;
return (
<div style={{ display:“flex”, flexDirection:“column”, alignItems:“center” }}>
<svg width={size} height={size/2+16} style={{ overflow:“visible” }}>
<path d={`M 8,${size/2} A ${r} ${r} 0 0 1 ${size-8},${size/2}`}
fill=“none” stroke={bgColor} strokeWidth={7} strokeLinecap=“round”/>
<path d={`M 8,${size/2} A ${r} ${r} 0 0 1 ${size-8},${size/2}`}
fill=“none” stroke={color} strokeWidth={7} strokeLinecap=“round”
strokeDasharray={`${dash} ${arc}`}
style={{ transition:“stroke-dasharray 1s cubic-bezier(0.4,0,0.2,1)” }}
/>
<text x={size/2} y={size/2+5} textAnchor=“middle” fill={color}
style={{ fontSize:16, fontWeight:800, fontFamily:”‘Barlow Condensed’,sans-serif” }}>
{Math.round(pct)}%
</text>
</svg>
<div style={{ fontSize:10, color:C.text2, fontWeight:600, textAlign:“center”, maxWidth:size, marginTop:1 }}>
{name.length>9?name.slice(0,9)+”…”:name}
</div>
</div>
);
}

function MatchCard({ m, expanded, onToggle }) {
const H = TEAMS[m.home], A = TEAMS[m.away];
const pred = m.hw>=m.aw&&m.hw>=m.d?“home”:m.aw>m.hw&&m.aw>=m.d?“away”:“draw”;
const predPct = pred===“home”?m.hw:pred===“away”?m.aw:m.d;
const predLabel = pred===“home”?H.short:pred===“away”?A.short:“Draw”;
const [pc,pbg] = pred===“home”?[C.green,C.greenBg]:pred===“away”?[C.red,C.redBg]:[C.amber,C.amberBg];

return (
<div onClick={onToggle} style={{
background: C.surface,
border: `1px solid ${expanded ? pc+"55" : C.border}`,
borderRadius: 20, marginBottom: 10, overflow: “hidden”, cursor: “pointer”,
boxShadow: expanded
? `0 4px 24px rgba(0,0,0,0.1), 0 0 0 2px ${pc}22`
: “0 1px 4px rgba(0,0,0,0.06)”,
transition: “box-shadow 0.25s, border-color 0.25s”,
}}>
{expanded && <div style={{ height:3, background:`linear-gradient(90deg, transparent, ${pc}, transparent)` }}/>}

```
  <div style={{ padding:"16px 18px" }}>
    {/* Date + badge */}
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
      <span style={{ fontSize:10, color:C.text3, fontWeight:600, letterSpacing:0.6, textTransform:"uppercase" }}>
        {m.date} · {m.time}
      </span>
      <div style={{
        padding:"3px 10px", borderRadius:20, fontSize:10, fontWeight:700, letterSpacing:0.3,
        background:pbg, color:pc, border:`1px solid ${pc}30`
      }}>
        {predLabel} {Math.round(predPct)}%
      </div>
    </div>

    {/* Teams row */}
    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
      {/* Home */}
      <div style={{ flex:1, display:"flex", alignItems:"center", gap:11 }}>
        <div style={{
          width:52, height:52, borderRadius:14, flexShrink:0,
          background:`${H.color}0E`, border:`1px solid ${H.color}25`,
          display:"flex", alignItems:"center", justifyContent:"center",
        }}>
          <TeamLogo id={m.home} size={30}/>
        </div>
        <div>
          <div style={{ fontSize:15, fontWeight:700, color:C.text }}>{H.short}</div>
          <div style={{ fontSize:10, color:C.text3, marginTop:1 }}>Home</div>
        </div>
      </div>

      {/* VS */}
      <div style={{
        flexShrink:0, width:38, height:38, borderRadius:12,
        background:C.surface2, border:`1px solid ${C.border}`,
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        <span style={{ fontSize:9, fontWeight:800, color:C.text3, letterSpacing:1 }}>VS</span>
      </div>

      {/* Away */}
      <div style={{ flex:1, display:"flex", alignItems:"center", gap:11, justifyContent:"flex-end" }}>
        <div style={{ textAlign:"right" }}>
          <div style={{ fontSize:15, fontWeight:700, color:C.text }}>{A.short}</div>
          <div style={{ fontSize:10, color:C.text3, marginTop:1 }}>Away</div>
        </div>
        <div style={{
          width:52, height:52, borderRadius:14, flexShrink:0,
          background:`${A.color}0E`, border:`1px solid ${A.color}25`,
          display:"flex", alignItems:"center", justifyContent:"center",
        }}>
          <TeamLogo id={m.away} size={30}/>
        </div>
      </div>
    </div>

    {/* Prob bar */}
    <div style={{ marginTop:14 }}>
      <ProbBar hw={m.hw} d={m.d} aw={m.aw}/>
    </div>
  </div>

  {/* Expanded */}
  {expanded && (
    <div style={{ borderTop:`1px solid ${C.border}`, padding:"18px 18px 20px", background:C.surface2 }}>
      {/* Gauges */}
      <div style={{ display:"flex", justifyContent:"space-around", marginBottom:18 }}>
        <SemiGauge pct={m.hw} color={C.green} bgColor={C.greenBg} name={H.short}/>
        <SemiGauge pct={m.d}  color={C.amber} bgColor={C.amberBg} name="Draw"/>
        <SemiGauge pct={m.aw} color={C.red}   bgColor={C.redBg}   name={A.short}/>
      </div>

      {/* Venue */}
      <div style={{
        display:"flex", alignItems:"center", gap:10, padding:"11px 13px",
        background:C.surface, borderRadius:13, marginBottom:12, border:`1px solid ${C.border}`,
      }}>
        <span style={{ fontSize:18 }}>🏟️</span>
        <div>
          <div style={{ fontSize:12, color:C.text, fontWeight:600 }}>{m.venue}</div>
          <div style={{ fontSize:10, color:C.text3 }}>Home advantage · +0.34 xG (EPL avg)</div>
        </div>
      </div>

      {/* Factor chips */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
        {[
          { icon:"📊", t:"xG Strength", v:pred==="draw"?"Balanced":pred==="home"?`${H.short} edge`:`${A.short} edge` },
          { icon:"🔥", t:"Recent Form",  v:pred==="draw"?"Similar":pred==="home"?`${H.short} better`:`${A.short} better` },
          { icon:"🏥", t:"Injury Risk",  v:"Low impact" },
          { icon:"⚡", t:"Confidence",   v:Math.max(m.hw,m.d,m.aw)>55?"HIGH":"MEDIUM" },
        ].map(({icon,t,v})=>(
          <div key={t} style={{ padding:"11px 12px", borderRadius:13, background:C.surface, border:`1px solid ${C.border}` }}>
            <div style={{ fontSize:17, marginBottom:5 }}>{icon}</div>
            <div style={{ fontSize:10, color:C.text3, marginBottom:2 }}>{t}</div>
            <div style={{ fontSize:12, color:C.text, fontWeight:700 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
```

);
}

function ResultRow({ r }) {
const H = TEAMS[r.home], A = TEAMS[r.away];
const hw=r.sh>r.sa, aw=r.sa>r.sh, draw=r.sh===r.sa;
const [sc,sbg]=draw?[C.amber,C.amberBg]:hw?[C.green,C.greenBg]:[C.red,C.redBg];
return (
<div style={{
display:“flex”, alignItems:“center”, padding:“12px 16px”,
borderRadius:17, background:C.surface, border:`1px solid ${C.border}`,
marginBottom:8, boxShadow:“0 1px 4px rgba(0,0,0,0.05)”,
}}>
<div style={{ flex:1, display:“flex”, alignItems:“center”, gap:9, minWidth:0 }}>
<TeamLogo id={r.home} size={26}/>
<span style={{ fontSize:13, fontWeight:hw?700:400, color:hw?C.text:C.text3, overflow:“hidden”, textOverflow:“ellipsis”, whiteSpace:“nowrap” }}>
{H.short}
</span>
</div>
<div style={{
flexShrink:0, padding:“5px 13px”, borderRadius:10, textAlign:“center”,
background:sbg, border:`1px solid ${sc}30`, minWidth:70
}}>
<div style={{ fontSize:18, fontWeight:900, color:sc, letterSpacing:2, fontFamily:”‘Barlow Condensed’,sans-serif” }}>
{r.sh} – {r.sa}
</div>
<div style={{ fontSize:9, color:C.text3, letterSpacing:1, textTransform:“uppercase” }}>{r.date}</div>
</div>
<div style={{ flex:1, display:“flex”, alignItems:“center”, gap:9, justifyContent:“flex-end”, minWidth:0 }}>
<span style={{ fontSize:13, fontWeight:aw?700:400, color:aw?C.text:C.text3, overflow:“hidden”, textOverflow:“ellipsis”, whiteSpace:“nowrap”, textAlign:“right” }}>
{A.short}
</span>
<TeamLogo id={r.away} size={26}/>
</div>
</div>
);
}

function StandingRow({ s, rank }) {
const t = TEAMS[s.t];
const zone = rank<=4?C.green:rank<=6?”#3B82F6”:rank>=18?C.red:“transparent”;
const fc = { W:C.green, D:C.amber, L:C.red };
return (
<div style={{ display:“flex”, alignItems:“center”, padding:“10px 0”, borderBottom:`1px solid ${C.border}` }}>
<div style={{ width:4, height:26, borderRadius:2, background:zone, marginRight:10, flexShrink:0, opacity:(rank<=6||rank>=18)?1:0 }}/>
<div style={{ width:18, textAlign:“right”, fontSize:11, color:C.text3, marginRight:10 }}>{rank}</div>
<div style={{ width:28, height:28, display:“flex”, alignItems:“center”, justifyContent:“center”, marginRight:10, flexShrink:0 }}>
<TeamLogo id={s.t} size={24}/>
</div>
<div style={{ flex:1, fontSize:13, fontWeight:600, color:C.text, whiteSpace:“nowrap”, overflow:“hidden”, textOverflow:“ellipsis” }}>
{t.name}
</div>
<div style={{ display:“flex”, gap:3, marginRight:12 }}>
{s.form.map((f,i)=>(
<div key={i} style={{ width:7, height:7, borderRadius:“50%”, background:fc[f] }}/>
))}
</div>
<div style={{ width:22, textAlign:“center”, fontSize:11, color:C.text2 }}>{s.w}</div>
<div style={{ width:22, textAlign:“center”, fontSize:11, color:C.text2 }}>{s.d}</div>
<div style={{ width:22, textAlign:“center”, fontSize:11, color:C.text2 }}>{s.l}</div>
<div style={{ width:34, textAlign:“center”, fontSize:14, fontWeight:800, color:C.text }}>{s.pts}</div>
</div>
);
}

export default function App() {
const [tab, setTab] = useState(“predict”);
const [expanded, setExpanded] = useState(null);

const tabs = [
{ id:“predict”, label:“Fixtures”,
icon:(a)=><svg width=“20” height=“20” viewBox=“0 0 24 24” fill=“none” stroke={a?C.purple:”#9B9DB8”} strokeWidth=“2.2” strokeLinecap=“round” strokeLinejoin=“round”><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
{ id:“results”, label:“Results”,
icon:(a)=><svg width=“20” height=“20” viewBox=“0 0 24 24” fill=“none” stroke={a?C.purple:”#9B9DB8”} strokeWidth=“2.2” strokeLinecap=“round” strokeLinejoin=“round”><polyline points="20 6 9 17 4 12"/></svg> },
{ id:“table”,   label:“Table”,
icon:(a)=><svg width=“20” height=“20” viewBox=“0 0 24 24” fill=“none” stroke={a?C.purple:”#9B9DB8”} strokeWidth=“2.2” strokeLinecap=“round” strokeLinejoin=“round”><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
];

return (
<div style={{ maxWidth:420, margin:“0 auto”, minHeight:“100vh”, background:C.bg, color:C.text, fontFamily:”‘DM Sans’,-apple-system,sans-serif”, position:“relative” }}>
<style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=DM+Sans:wght@400;500;600;700;800&display=swap'); *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;} ::-webkit-scrollbar{display:none;} html,body{background:#F5F6FA;} @keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.35;}}`}</style>

```
  {/* ── HEADER ── */}
  <div style={{ padding:"52px 22px 0", background:C.surface, borderBottom:`1px solid ${C.border}` }}>
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <div style={{
          width:44, height:44, borderRadius:13,
          background:"linear-gradient(145deg,#3D1A60,#5C1F8A)",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"0 4px 14px rgba(93,31,138,0.35)", flexShrink:0, overflow:"hidden",
        }}>
          <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg"
            alt="PL" width={26} height={26} style={{ objectFit:"contain" }}
            onError={e=>{e.target.style.display="none";}}
          />
        </div>
        <div>
          <div style={{ fontSize:11, color:C.text3, fontWeight:600, letterSpacing:1.2, textTransform:"uppercase" }}>Premier League</div>
          <div style={{ fontSize:21, fontWeight:800, letterSpacing:-0.6, lineHeight:1.15 }}>Match Oracle</div>
        </div>
      </div>
      <div style={{
        display:"flex", alignItems:"center", gap:5, padding:"5px 11px",
        background:C.greenBg, borderRadius:20, border:`1px solid ${C.green}40`,
      }}>
        <div style={{ width:6, height:6, borderRadius:"50%", background:C.green, animation:"pulse 1.6s infinite" }}/>
        <span style={{ fontSize:10, color:C.green, fontWeight:700, letterSpacing:0.6 }}>LIVE</span>
      </div>
    </div>

    {/* Stat pills */}
    <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:16 }}>
      {[
        { v:"GW 32", s:"Next round",  c:C.purple,  bg:C.purpleBg },
        { v:"10",    s:"Fixtures",    c:"#3B82F6",  bg:"#EFF6FF" },
        { v:"60%",   s:"Accuracy",   c:C.amber,    bg:C.amberBg },
        { v:"xG+",   s:"AI-powered", c:C.green,    bg:C.greenBg },
      ].map(({v,s,c,bg})=>(
        <div key={v} style={{ flexShrink:0, padding:"9px 14px", borderRadius:14, background:bg, border:`1px solid ${c}25` }}>
          <div style={{ fontSize:17, fontWeight:800, color:c, letterSpacing:-0.3, fontFamily:"'Barlow Condensed',sans-serif" }}>{v}</div>
          <div style={{ fontSize:10, color:C.text3, marginTop:1, whiteSpace:"nowrap" }}>{s}</div>
        </div>
      ))}
    </div>
  </div>

  {/* ── TAB BAR ── */}
  <div style={{
    position:"sticky", top:0, zIndex:20,
    background:"rgba(255,255,255,0.94)", backdropFilter:"blur(20px)",
    WebkitBackdropFilter:"blur(20px)",
    borderBottom:`1px solid ${C.border}`,
    display:"flex", padding:"0 22px",
  }}>
    {tabs.map(t=>{
      const active=tab===t.id;
      return (
        <button key={t.id} onClick={()=>setTab(t.id)} style={{
          flex:1, padding:"13px 0 11px", background:"none", border:"none", cursor:"pointer",
          display:"flex", flexDirection:"column", alignItems:"center", gap:4,
          borderBottom: active?`2.5px solid ${C.purple}`:"2.5px solid transparent",
          transition:"border-color 0.2s",
        }}>
          {t.icon(active)}
          <span style={{ fontSize:10, fontWeight:700, color:active?C.purple:C.text3, letterSpacing:0.5, textTransform:"uppercase" }}>
            {t.label}
          </span>
        </button>
      );
    })}
  </div>

  {/* ── CONTENT ── */}
  <div style={{ padding:"18px 22px 100px" }}>

    {/* FIXTURES */}
    {tab==="predict" && (
      <>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
          <div>
            <div style={{ fontSize:18, fontWeight:800, color:C.text }}>Gameweek 32</div>
            <div style={{ fontSize:12, color:C.text3, marginTop:2 }}>Apr 18–21 · Tap to expand</div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
            {[[C.green,"Home"],[C.amber,"Draw"],[C.red,"Away"]].map(([c,l])=>(
              <div key={l} style={{ display:"flex", alignItems:"center", gap:5 }}>
                <div style={{ width:8, height:4, borderRadius:2, background:c }}/>
                <span style={{ fontSize:9, color:C.text3, fontWeight:600 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        {UPCOMING.map(m=>(
          <MatchCard key={m.id} m={m}
            expanded={expanded===m.id}
            onToggle={()=>setExpanded(expanded===m.id?null:m.id)}
          />
        ))}
      </>
    )}

    {/* RESULTS */}
    {tab==="results" && (
      <>
        <div style={{ fontSize:18, fontWeight:800, color:C.text, marginBottom:4 }}>GW31 Results</div>
        <div style={{ fontSize:12, color:C.text3, marginBottom:16 }}>Apr 10–13, 2026</div>
        {RECENT.map((r,i)=><ResultRow key={i} r={r}/>)}

        {/* Accuracy card */}
        <div style={{
          marginTop:24, borderRadius:22, padding:18,
          background:C.surface, border:`1px solid ${C.border}`,
          boxShadow:"0 2px 12px rgba(0,0,0,0.06)"
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
            <div style={{ width:40, height:40, borderRadius:12, background:C.greenBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>🎯</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:15, fontWeight:700, color:C.text }}>Model Accuracy</div>
              <div style={{ fontSize:11, color:C.text3 }}>Gameweek 31</div>
            </div>
            <div style={{ fontSize:32, fontWeight:900, color:C.green, fontFamily:"'Barlow Condensed',sans-serif" }}>6/10</div>
          </div>
          {[
            { l:"Correct results",  v:6, max:10, c:C.green,  bg:C.greenBg },
            { l:"Win predictions",  v:5, max:8,  c:"#3B82F6", bg:"#EFF6FF" },
            { l:"Draw predictions", v:1, max:2,  c:C.amber,  bg:C.amberBg },
          ].map(({l,v,max,c,bg})=>(
            <div key={l} style={{ marginBottom:13 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                <span style={{ fontSize:12, color:C.text2, fontWeight:500 }}>{l}</span>
                <span style={{ fontSize:12, fontWeight:700, color:c }}>{v}/{max}</span>
              </div>
              <div style={{ height:7, background:bg, borderRadius:4, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${(v/max)*100}%`, background:c, borderRadius:4, transition:"width 1s ease" }}/>
              </div>
            </div>
          ))}
        </div>
      </>
    )}

    {/* TABLE */}
    {tab==="table" && (
      <>
        <div style={{ fontSize:18, fontWeight:800, color:C.text, marginBottom:4 }}>League Table</div>
        <div style={{ fontSize:12, color:C.text3, marginBottom:16 }}>2025–26 · Matchday 31</div>

        <div style={{ background:C.surface, borderRadius:18, border:`1px solid ${C.border}`, padding:"4px 14px 8px", boxShadow:"0 1px 6px rgba(0,0,0,0.05)" }}>
          {/* Column headers */}
          <div style={{ display:"flex", alignItems:"center", paddingBottom:8, paddingTop:10, borderBottom:`1px solid ${C.border}`, marginBottom:2 }}>
            <div style={{ width:56 }}/>
            <div style={{ flex:1 }}/>
            <div style={{ marginRight:12, fontSize:9, color:C.text3, letterSpacing:0.8, width:47, textAlign:"center" }}>FORM</div>
            {["W","D","L","PTS"].map(h=>(
              <div key={h} style={{ width:h==="PTS"?34:22, textAlign:"center", fontSize:9, color:C.text3, letterSpacing:0.8 }}>{h}</div>
            ))}
          </div>
          {STANDINGS.map((s,i)=><StandingRow key={s.t} s={s} rank={i+1}/>)}
        </div>

        {/* Zone key */}
        <div style={{ marginTop:14, display:"flex", flexWrap:"wrap", gap:12, paddingLeft:4 }}>
          {[[C.green,"Champions League"],["#3B82F6","Europa League"],[C.red,"Relegation"]].map(([c,l])=>(
            <div key={l} style={{ display:"flex", alignItems:"center", gap:7 }}>
              <div style={{ width:4, height:14, borderRadius:2, background:c }}/>
              <span style={{ fontSize:11, color:C.text3 }}>{l}</span>
            </div>
          ))}
        </div>

        {/* Model card */}
        <div style={{ marginTop:20, borderRadius:20, padding:18, background:C.surface, border:`1px solid ${C.border}`, boxShadow:"0 1px 6px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize:13, fontWeight:700, color:C.text2, marginBottom:14 }}>🔬 How predictions work</div>
          {[
            { c:C.purple,  icon:"📊", l:"xG (3·10·38 games)", d:"Multi-window rolling avg" },
            { c:C.green,   icon:"🏠", l:"Home Advantage",     d:"Per-stadium measured boost" },
            { c:"#3B82F6", icon:"🔥", l:"Adaptive Form",      d:"Auto-resets on mgr change" },
            { c:C.amber,   icon:"🏥", l:"Injury Score",       d:"Player xG contribution" },
            { c:C.red,     icon:"😴", l:"Fatigue Index",      d:"Rest days + European games" },
          ].map(({c,icon,l,d})=>(
            <div key={l} style={{ display:"flex", alignItems:"center", gap:12, padding:"9px 0", borderBottom:`1px solid ${C.border}` }}>
              <div style={{ width:34, height:34, borderRadius:10, background:c+"18", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 }}>{icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:12, color:C.text, fontWeight:600 }}>{l}</div>
                <div style={{ fontSize:11, color:C.text3 }}>{d}</div>
              </div>
              <div style={{ width:7, height:7, borderRadius:"50%", background:c, flexShrink:0 }}/>
            </div>
          ))}
        </div>
      </>
    )}
  </div>

  {/* Bottom fade */}
  <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:420, height:60, pointerEvents:"none", zIndex:5, background:`linear-gradient(to top, ${C.bg} 20%, transparent)` }}/>
</div>
```

);
}
