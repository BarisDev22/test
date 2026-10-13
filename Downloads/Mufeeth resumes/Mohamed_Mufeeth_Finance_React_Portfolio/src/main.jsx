import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Icon = ({name, size=22}) => {
  const common={width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true};
  const paths={
    mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone:<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></>,
    location:<><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2"/></>,
    linkedin:<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    chart:<><path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/></>,
    briefcase:<><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></>,
    education:<><path d="m3 10 9-5 9 5-9 5-9-5z"/><path d="M7 12v5c3 2 7 2 10 0v-5"/></>,
    arrow:<><path d="M5 12h14M13 6l6 6-6 6"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const skills=['Financial Reporting','Management Accounting','Budgeting & Forecasting','Variance Analysis','Accounts Payable','Accounts Receivable','Bank Reconciliation','MIS Reporting','Microsoft Excel','Power BI','IBM Cognos Analytics','KPI Monitoring'];
const jobs=[
 {role:'Finance Associate',company:'Zenith Logistics',period:'May 2026 – Aug 2026',place:'Chennai, India',points:['Prepared financial reports, MIS reports, and management summaries for business decisions.','Processed invoices, verified documents, and maintained accurate financial records.','Supported accounts payable and receivable, reconciliation, budgeting, expense tracking, and variance analysis.','Created Excel, Power BI, and IBM Cognos dashboards to track financial performance and KPIs.']},
 {role:'Customer Experience Analyst',company:'Pickyourtrail',period:'Dec 2025 – May 2026',place:'Chennai, India',points:['Analyzed customer feedback and recurring service concerns to identify trends','Maintained accurate CRM records and coordinated cross-functional issue resolution.','Created Excel reports and trackers for requests, resolution status, and service performance.','Converted customer insights into practical process improvement recommendations.']}
];

function App(){
 const [menu,setMenu]=useState(false); const [photoError,setPhotoError]=useState(false);
 useEffect(()=>{const close=()=>window.innerWidth>760&&setMenu(false);window.addEventListener('resize',close);return()=>window.removeEventListener('resize',close)},[]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
 return <>
  <header><button className="logo" onClick={()=>go('home')}>MOHAMED MUFEETH<span>.</span></button><button className="menu-btn" onClick={()=>setMenu(v=>!v)} aria-label="Toggle navigation">{menu?'×':'☰'}</button><nav className={menu?'open':''}>{['about','experience','expertise','education','contact'].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}</nav></header>
  <main>
   <section className="hero" id="home"><div className="hero-copy"><p className="eyebrow">Finance · Accounting · Business Analysis</p><h1>Financial insight for <span>better decisions.</span></h1><p className="intro">MBA graduate with 9 ACCA papers completed and hands-on experience in financial reporting, MIS, budgeting, reconciliation, analytics, and performance dashboards.</p><div className="cta"><button className="primary" onClick={()=>go('contact')}>Contact me <Icon name="arrow" size={18}/></button><button className="outline" onClick={()=>go('experience')}>View experience</button></div><div className="quick"><span><Icon name="location" size={17}/> Doha, Qatar</span><span><Icon name="chart" size={17}/> Excel · Power BI · Cognos</span></div></div>
   <div className="photo-shell">{photoError?<div className="photo-fallback" aria-label="Candidate photo unavailable">MOHAMED MUFEETH</div>:<img src="/candidate-photo.jpg" alt="Candidate portrait" onError={()=>setPhotoError(true)}/>}</div></section>

   <section id="about" className="dark section"><div><p className="eyebrow light">Professional profile</p><h2>Detail-focused finance professional.</h2></div><p className="large">Strong grounding in financial reporting, management accounting, budgeting, and financial analysis, supported by practical experience producing reports and dashboards. Comfortable transforming data into clear insights while working accurately with records, stakeholders, and deadlines.</p></section>

   <section id="experience" className="section"><p className="eyebrow">Career journey</p><h2>Professional experience</h2><div className="timeline">{jobs.map((j,i)=><article className="job" key={j.company}><div className="number">0{i+1}</div><div className="job-title"><div><h3>{j.role}</h3><h4>{j.company}</h4></div><p>{j.period}<br/>{j.place}</p></div><ul>{j.points.map(p=><li key={p}>{p}</li>)}</ul></article>)}</div></section>

   <section id="expertise" className="section pale"><div className="section-intro"><p className="eyebrow">Core expertise</p><h2>Finance meets analytics.</h2><p>A practical toolkit for accurate reporting, financial control, planning, and management insight.</p></div><div className="skills">{skills.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,'0')}</span>{s}</div>)}</div></section>

   <section className="section"><p className="eyebrow">Featured project</p><h2>Customer experience analytics</h2><div className="project"><Icon name="chart" size={42}/><div><h3>Online Travel Platform and Brand Loyalty</h3><p>Designed a structured questionnaire and analyzed customer feedback in Excel to identify experience patterns, service gaps, and factors influencing satisfaction, trust, repeat-purchase intention, and retention.</p><div className="tags"><span>Excel Analysis</span><span>Survey Design</span><span>Trend Identification</span><span>Business Insights</span></div></div></div></section>

   <section id="education" className="section education"><p className="eyebrow">Academic foundation</p><h2>Education and leadership</h2><div className="cards"><article><Icon name="education"/><h3>Master of Business Administration</h3><p>Vels Institute of Science, Technology & Advanced Studies</p><strong>2024–2026 · 81%</strong></article><article><Icon name="education"/><h3>Bachelor of Commerce</h3><p>B. S. Abdur Rahman Crescent Institute of Science and Technology</p><strong>2021–2024 · 86%</strong></article><article className="wide"><Icon name="briefcase"/><h3>Leadership</h3><p>Overall Coordinator for TYCOON 2025, Bazaar Event, and a 12-day Freshers’ Inauguration Programme. Volunteer at VISTAS HR Conclave 2025.</p></article></div></section>

   <section id="contact" className="contact"><p className="eyebrow light">Available for opportunities</p><h2>Let’s discuss finance, reporting, and analysis roles.</h2><div className="contact-links"><a href="mailto:mufeethmak4@gmail.com"><Icon name="mail"/>mufeethmak4@gmail.com</a><a href="tel:+97471264380"><Icon name="phone"/>+974 71264380</a><a href="https://www.linkedin.com/in/mmufeeth/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin"/>LinkedIn</a></div></section>
  </main><footer><span>© 2026 Mohamed Mufeeth</span><span>Finance & Business Analysis Portfolio</span></footer>
 </>
}
createRoot(document.getElementById('root')).render(<App/>);
