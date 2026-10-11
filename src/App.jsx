import React, { useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation, useParams } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Menu, X, Zap, Lightbulb, Code2, Bot,
  Users, Trophy, Rocket, Mail, Phone, MapPin, Instagram, Linkedin,
  Github, CheckCircle2, CalendarDays, ExternalLink, Sparkles, Target,
  ChevronLeft, ChevronRight
} from 'lucide-react'
import { events } from './data'
import sanskritiPhoto from './assets/team/sanskriti-shrivastava.png'
import krishnaPhoto from './assets/team/krishna-shrivastav.jpg'
import heroImage from './assets/DPBA.png'

import teamSprintLogo from './assets/team-sprint-logo.png'


const navItems = [
  ['Home', '/'],
  ['Events', '/events'],
  ['Gallery', '/gallery'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  React.useEffect(() => setOpen(false), [location.pathname])
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="Team Sprint home">
          
<img
  className="brand-logo"
  src={teamSprintLogo}
  alt="Team Sprint Logo"
/>

          <span className="brand-copy"><strong>TEAM SPRINT</strong><small>INNOVATION • BUILD • THRIVE</small></span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === '/'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>
          ))}
          <Link className="button button-small button-primary nav-cta" to="/contact">Collaborate <ArrowUpRight size={16}/></Link>
        </nav>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}>
    {eyebrow && <span className="eyebrow"><span className="eyebrow-dot"/> {eyebrow}</span>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
}

function EventCard({ event, compact = false, onOpen }) {
  return <article className={`event-card ${compact ? 'compact' : ''}`}>
    <button className="poster-button" onClick={() => onOpen?.(event)} aria-label={`View ${event.title} poster`}>
      <img src={event.poster} alt={`${event.title} event poster`} loading="lazy" />
      <span className="poster-overlay">View poster <ArrowUpRight size={17}/></span>
    </button>
    <div className="event-card-body">
      <div className="event-meta"><span className={`category-pill ${event.accent}`}>{event.category}</span><span className="event-status"><span/> {event.status}</span></div>
      <h3>{event.title}</h3>
      {!compact && <p>{event.description}</p>}
      <div className="tag-row">{event.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      



<Link
  to={!compact ? '/gallery' : `/events#${event.id}`}
  className="text-link"
>
  Explore event <ArrowRight size={16} />
</Link>



    </div>
  </article>
}

function PosterModal({ event, onClose }) {
  React.useEffect(() => {
    if (!event) return
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [event, onClose])
  if (!event) return null
  return <div className="modal-backdrop" onClick={onClose} role="presentation">
    <div className="poster-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={event.title}>
      <button className="modal-close" onClick={onClose} aria-label="Close poster"><X/></button>
      <img src={event.poster} alt={`${event.title} full poster`} />
      <div className="modal-caption"><strong>{event.title}</strong><span>Team Sprint event poster</span></div>
    </div>
  </div>
}

function Footer() {
  return <footer className="footer">
    <div className="container footer-top">
      <div className="footer-brand">
        <Link className="brand brand-light" to="/">
<img
  className="brand-logo"
  src={teamSprintLogo}
  alt="Team Sprint Logo"
/>
<span className="brand-copy"><strong>TEAM SPRINT</strong><small>INNOVATION • BUILD • THRIVE</small></span></Link>
        <p>Creating hands-on learning experiences that help students turn curiosity into capability.</p>
      </div>
      <div className="footer-col"><h4>Explore</h4>{navItems.map(([label,path]) => <Link key={path} to={path}>{label}</Link>)}</div>
      <div className="footer-col"><h4>Get in touch</h4><a href="mailto:swadrive.in@gmail.com"><Mail size={15}/> swadrive.in@gmail.com</a><a href="tel:+918601445260"><Phone size={15}/> +91 86014 45260</a><span><MapPin size={15}/> GIDA, Gorakhpur, Uttar Pradesh</span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Team Sprint. Built for curious minds.</span><span>Learn. Build. Innovate. Together.</span></div>
  </footer>
}

function Home({ onOpen }) {
  return <>
    <main>
      <section className="hero">
        <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow"><span className="eyebrow-dot"/> STUDENT INNOVATION COMMUNITY</span>
            <h1>Ideas into action.<br/><span>Skills into impact.</span></h1>
            <p className="hero-description">A space for students to learn by doing, experiment with technology and build things that matter.</p>
            <div className="hero-actions"><Link to="/events" className="button button-primary">Explore our events <ArrowRight size={18}/></Link><Link to="/about" className="button button-ghost">Meet Team Sprint</Link></div>
            <div className="hero-proof"><div className="avatar-stack"><span>TS</span><span>+</span><span>∞</span></div><p><strong>Learn together.</strong><br/>Create what’s next.</p></div>
          </div>
          <div className="hero-visual">
            <div className="visual-backdrop"/>
            <div className="floating-note note-top"><span className="note-icon purple"><Lightbulb size={20}/></span><span><strong>Think boldly</strong><small>Ideas start here</small></span></div>
            <div className="hero-poster-frame"><img src={heroImage} alt="Build Sprint Robotics and IoT workshop poster"/></div>
            <div className="floating-note note-bottom"><span className="note-icon orange"><Rocket size={20}/></span><span><strong>Build for real</strong><small>Learn by doing</small></span></div>
            <div className="visual-spark spark-a"><Sparkles size={24}/></div><div className="visual-spark spark-b"><Code2 size={26}/></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>OUR SPIRIT</span><div/><strong>Learn <b>·</b> Build <b>·</b> Showcase <b>·</b> Thrive</strong></div>
      </section>

      <section className="pillars-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE DO" title={<>Make learning <span className="gradient-text">hands-on.</span></>} description="Beyond theory, we create opportunities to explore, experiment and bring ideas to life." centered/>
          <div className="pillars-grid">
            {[
              [Lightbulb,'Learn by doing','Interactive workshops that make complex ideas approachable.','lavender'],
              [Code2,'Build real things','Projects that turn new skills into something you can show.','peach'],
              [Users,'Grow together','Team challenges that build collaboration and confidence.','mint'],
              [Trophy,'Celebrate progress','Showcase your work, learn from others and keep improving.','sky'],
            ].map(([Icon,title,desc,tint]) => <div className="pillar-card" key={title}><div className={`pillar-icon ${tint}`}><Icon size={23}/></div><h3>{title}</h3><p>{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="events-section section-pad">
        <div className="container">
          <div className="section-row"><SectionHeading eyebrow="MADE HAPPEN WITH TEAM SPRINT" title={<>Experiences that <span className="gradient-text">spark growth.</span></>} description="A look at workshops and challenges designed around practical learning."/><Link to="/events" className="button button-outline">All events <ArrowRight size={17}/></Link></div>
          <div className="events-grid">{events.map(event => <EventCard key={event.id} event={event} compact onOpen={onOpen}/>)}</div>
        </div>
      </section>

      <section className="journey-section section-pad">
        <div className="container journey-panel">
          <div className="journey-copy"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot"/> THE TEAM SPRINT JOURNEY</span><h2>From first idea<br/>to <span>real-world impact.</span></h2><p>We help students take the next step: discover a problem, explore a solution, build a prototype and share what they’ve learned.</p><Link to="/about" className="button button-white">Our approach <ArrowRight size={17}/></Link></div>
          <div className="journey-steps">{[['01','Explore','Find a question worth asking.'],['02','Create','Turn ideas into prototypes.'],['03','Showcase','Share your work with confidence.'],['04','Grow','Build skills for what comes next.']].map(([n,t,d]) => <div className="journey-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={18}/></div>)}</div>
        </div>
      </section>

      <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow"><span className="eyebrow-dot"/> LET'S BUILD SOMETHING</span><h2>Have a workshop idea?</h2><p>Let’s collaborate with schools, institutions and student communities.</p></div><Link to="/contact" className="button button-primary">Start a conversation <ArrowUpRight size={18}/></Link></div></section>
    </main>
  </>
}

function PageHero({ eyebrow, title, description }) {
  return <section className="page-hero"><div className="container page-hero-inner"><span className="eyebrow"><span className="eyebrow-dot"/>{eyebrow}</span><h1>{title}</h1><p>{description}</p></div><div className="page-hero-decoration"><Sparkles/><span/><span/></div></section>
}

function EventsPage({ onOpen }) {
  return <><PageHero eyebrow="EVENTS & WORKSHOPS" title={<>Experiences built<br/>to <span className="gradient-text">move you forward.</span></>} description="Explore Team Sprint's hands-on workshops and innovation challenges. Every event is an opportunity to learn something, make something and grow."/><section className="section-pad"><div className="container"><div className="events-intro"><span className="result-count">03 FEATURED EXPERIENCES</span><span className="past-label"><span/> Past event archive</span></div><div className="events-grid events-grid-large">{events.map(event => <div id={event.id} key={event.id}><EventCard event={event} onOpen={onOpen}/><div className="event-highlights"><h4>Workshop highlights</h4>{event.highlights.map(item => <span key={item}><CheckCircle2 size={15}/>{item}</span>)}</div></div>)}</div><div className="notice-box"><Sparkles size={20}/><p><strong>More experiences are on the way.</strong><br/>Follow Team Sprint or contact us to discuss a future workshop for your institution.</p><Link to="/contact" className="text-link">Plan an event <ArrowRight size={16}/></Link></div></div></section></>
}

const galleryFiles = import.meta.glob('./assets/gallery/*', { eager: true, query: '?url', import: 'default' })
const galleryPhoto = (prefix, index) => {
  const key = Object.keys(galleryFiles).find(k => k.includes(`/${prefix}-${String(index).padStart(2, '0')}.`))
  return key ? galleryFiles[key] : ''
}
const galleryEditions = [
  { id: 'design-1', title: 'Design Thinking 1.0', category: 'Design Thinking', photos: Array.from({length:5}, (_,i)=>galleryPhoto('design-thinking', i+1)).filter(Boolean), description: 'Problem-solving, ideation and collaborative innovation.' },
  { id: 'design-2', title: 'Design Thinking 2.0', category: 'Design Thinking', photos: Array.from({length:5}, (_,i)=>galleryPhoto('design-thinking', i+6)).filter(Boolean), description: 'A second chapter of creativity, teamwork and prototyping.' },
  { id: 'portfolio-1', title: 'Portfolio Development Workshop 1.0', category: 'Portfolio Development', photos: [1,2,3,4].map(i=>galleryPhoto('portfolio',i)).filter(Boolean), description: 'Build a digital identity and publish your work online.' },
  { id: 'portfolio-2', title: 'Portfolio Development Workshop 2.0', category: 'Portfolio Development', photos: [5,6,7].map(i=>galleryPhoto('portfolio',i)).filter(Boolean), description: 'Practical portfolio building with HTML, CSS and deployment.' },
  { id: 'portfolio-3', title: 'Portfolio Development Workshop 3.0', category: 'Portfolio Development', photos: [8,9,10].map(i=>galleryPhoto('portfolio',i)).filter(Boolean), description: 'Showcase projects, skills and achievements with confidence.' },
  { id: 'iot-1', title: 'Robotics & IoT Workshop', category: 'Robotics & IoT', photos: Array.from({length:10}, (_,i)=>galleryPhoto('iot',i+1)).filter(Boolean), description: 'For Abhyuday Public School and Kris Kringle Academy -Hands-on learning with sensors, electronics and practical projects.' },
  { id: 'iot-2', title: 'Build Sprint: Robotics & IoT', category: 'Robotics & IoT', photos: Array.from({length:10}, (_,i)=>galleryPhoto('iots',i+1)).filter(Boolean), description: 'For St. Ishvi Public School' }
]

function GalleryPage({ onOpen }) {
  const [filter, setFilter] = useState('All')
  const [activeEdition, setActiveEdition] = useState(null)
  const [lightbox, setLightbox] = useState(null)
  const categories = ['All', 'Design Thinking', 'Portfolio Development', 'Robotics & IoT']
  const filtered = galleryEditions.filter(e => filter === 'All' || e.category === filter)
  React.useEffect(() => {
    if (!lightbox) return
    const onKey = e => { if (e.key === 'Escape') setLightbox(null); if (e.key === 'ArrowRight') setLightbox(v => ({...v, index:(v.index+1)%v.edition.photos.length})); if (e.key === 'ArrowLeft') setLightbox(v => ({...v, index:(v.index-1+v.edition.photos.length)%v.edition.photos.length})) }
    window.addEventListener('keydown', onKey); document.body.style.overflow='hidden'
    return () => { window.removeEventListener('keydown',onKey); document.body.style.overflow='' }
  }, [lightbox])
  return <><PageHero eyebrow="THE GALLERY" title={<>A collection of ideas,<br/><span className="gradient-text">energy and action.</span></>} description="Explore each Team Sprint workshop edition through moments of learning, building and collaboration."/><section className="section-pad"><div className="container"><div className="filter-row">{categories.map(c => <button key={c} onClick={() => {setFilter(c);setActiveEdition(null)}} className={filter === c ? 'filter-chip selected' : 'filter-chip'}>{c}</button>)}</div>
    {!activeEdition ? <div className="edition-grid">{filtered.map((edition, i) => <button className="edition-card" key={edition.id} onClick={() => setActiveEdition(edition)}><div className="edition-cover">{edition.photos.slice(0,3).map((photo,j)=><img key={photo} src={photo} alt="Workshop moment" className={`cover-photo cover-photo-${j+1}`} loading="lazy"/>)}<span className="edition-count">{edition.photos.length} photos</span></div><div className="edition-copy"><small>{edition.category}</small><h3>{edition.title}</h3><p>{edition.description}</p><span className="text-link">Open photo gallery <ArrowRight size={16}/></span></div></button>)}</div> : <div className="edition-detail"><div className="edition-detail-heading"><button className="button button-outline" onClick={() => setActiveEdition(null)}><ChevronLeft size={16}/> All editions</button><div><span className="eyebrow"><span className="eyebrow-dot"/>{activeEdition.category}</span><h2>{activeEdition.title}</h2><p>{activeEdition.description}</p></div></div><div className="photo-grid">{activeEdition.photos.map((photo,i)=><button key={photo} className="photo-tile" onClick={() => setLightbox({edition:activeEdition,index:i})} aria-label={`Open photo ${i+1}`}><img src={photo} alt={`${activeEdition.title} — photo ${i+1}`} loading="lazy"/><span><ArrowUpRight size={18}/></span></button>)}</div></div>}
    {lightbox && <div className="photo-lightbox" role="dialog" aria-modal="true" onClick={()=>setLightbox(null)}><button className="lightbox-close" onClick={()=>setLightbox(null)} aria-label="Close photo"><X/></button><button className="lightbox-prev" onClick={e=>{e.stopPropagation();setLightbox(v=>({...v,index:(v.index-1+v.edition.photos.length)%v.edition.photos.length}))}} aria-label="Previous photo"><ChevronLeft/></button><img src={lightbox.edition.photos[lightbox.index]} alt={`${lightbox.edition.title} photo ${lightbox.index+1}`} onClick={e=>e.stopPropagation()}/><button className="lightbox-next" onClick={e=>{e.stopPropagation();setLightbox(v=>({...v,index:(v.index+1)%v.edition.photos.length}))}} aria-label="Next photo"><ChevronRight/></button><span className="lightbox-caption">{lightbox.edition.title} · {lightbox.index+1} / {lightbox.edition.photos.length}</span></div>}
  </div></section></>
}

const teamProfiles = {
  sanskriti: { slug:'sanskriti', name:'Sanskriti Shrivastava', role:'CEO — SwaDrive Technologies Private Limited', photo:sanskritiPhoto, intro:'A student entrepreneur and team leader focused on building meaningful initiatives, bringing people together and helping ideas move from discussion to execution.', about:'As CEO of SwaDrive Technologies Private Limited, Sanskriti contributes to the company’s direction and growth. Through Team Sprint, she supports collaborative learning experiences that encourage students to explore ideas, strengthen practical skills and work together on solutions.', focus:['Leadership & team coordination','Startup growth and product vision','Student engagement and collaboration'], links:[{label:'LinkedIn',url:'https://www.linkedin.com/in/sanskriti-shrivastava-kks',icon:'linkedin'},{label:'GitHub',url:'https://github.com/sanskritishri',icon:'github'},{label:'Portfolio',url:'https://sanskritishri.github.io/Portfolio/',icon:'external'},{label:'Email Team Sprint',url:'mailto:swadrive.in@gmail.com',icon:'mail'}] },
  krishna: { slug:'krishna', name:'Krishna Shrivastav', role:'CTO — SwaDrive Technologies Private Limited', photo:krishnaPhoto, intro:'A computer science and engineering student who enjoys building digital products, exploring technology and turning practical problems into useful solutions.', about:'As CTO of SwaDrive Technologies Private Limited, Krishna focuses on technology and product development. He is also involved in Team Sprint’s hands-on workshops, helping learners build practical skills through web development, robotics, IoT and innovation activities.', focus:['Technology & product development','Web development and digital portfolios','Robotics, IoT and hands-on learning'], links:[{label:'LinkedIn',url:'https://www.linkedin.com/in/krishnashrivastav-kks',icon:'linkedin'},{label:'GitHub',url:'https://github.com/krishna-shrivastav',icon:'github'},{label:'Instagram',url:'https://www.instagram.com/_krishna._shrivastav',icon:'instagram'},{label:'Portfolio',url:'https://krishna-shrivastav.github.io/Portfolio/',icon:'external'}] }
}
function TeamCard({profile}) { return <Link to={`/team/${profile.slug}`} className="team-card"><div className="team-photo-wrap"><img src={profile.photo} alt={profile.name}/><span className="team-view"><ArrowUpRight size={20}/></span></div><div className="team-card-copy"><span className="team-role-label">TEAM SPRINT ORGANIZER</span><h3>{profile.name}</h3><p>{profile.role}</p><span className="text-link">View profile <ArrowRight size={16}/></span></div></Link> }
function TeamProfilePage() {
  const { slug } = useParams(); const profile = Object.values(teamProfiles).find(p=>p.slug===slug)
  if (!profile) return <PageHero eyebrow="PROFILE NOT FOUND" title={<>Let's get you<br/><span className="gradient-text">back on track.</span></>} description="This team profile could not be found."/>
  const LinkIcon = ({type}) => type==='linkedin'?<Linkedin size={17}/>:type==='github'?<Github size={17}/>:type==='instagram'?<Instagram size={17}/>:type==='mail'?<Mail size={17}/>:<ExternalLink size={17}/>
  return <><section className="profile-hero"><div className="container"><Link to="/about" className="back-link"><ChevronLeft size={17}/> Meet Team Sprint</Link><div className="profile-layout"><div className="profile-photo"><img src={profile.photo} alt={profile.name}/></div><div className="profile-content"><span className="eyebrow"><span className="eyebrow-dot"/> TEAM SPRINT ORGANIZER</span><h1>{profile.name}</h1><p className="profile-role">{profile.role}</p><p className="profile-intro">{profile.intro}</p><div className="profile-socials">{profile.links.map(link=><a key={link.label} className="button button-primary" href={link.url} target={link.url.startsWith('mailto:')?'_self':'_blank'} rel="noreferrer"><LinkIcon type={link.icon}/>{link.label}<ArrowUpRight size={15}/></a>)}</div></div></div></div></section><section className="section-pad profile-details"><div className="container profile-details-grid"><div><span className="eyebrow"><span className="eyebrow-dot"/> ABOUT</span><h2>Building ideas into <span className="gradient-text">real impact.</span></h2><p>{profile.about}</p></div><div className="profile-focus"><h3>Areas of focus</h3>{profile.focus.map(item=><div key={item}><span><CheckCircle2 size={17}/></span>{item}</div>)}<a href="mailto:swadrive.in@gmail.com?subject=Connect%20with%20Team%20Sprint" className="text-link">Connect with Team Sprint <ArrowRight size={16}/></a></div></div></section><section className="team-back-strip"><div className="container"><p>Want to meet the rest of the team?</p><Link className="button button-outline" to="/about">Meet the organizers <ArrowRight size={17}/></Link></div></section></>
}

function AboutPage() {
  const values = [
    [Target,'Purposeful learning','Every activity should help students build a useful skill or perspective.'],
    [Bot,'Experimentation','We make room to test ideas, learn from mistakes and try again.'],
    [Users,'Collaboration','Good work grows through teamwork, shared curiosity and feedback.'],
    [Rocket,'Action over theory','We aim to turn concepts into projects, prototypes and experiences.'],
  ]
  return <><PageHero eyebrow="ABOUT TEAM SPRINT" title={<>A community for<br/><span className="gradient-text">curious builders.</span></>} description="Team Sprint brings students together through practical workshops, innovation challenges and project-based learning."/><section className="section-pad"><div className="container about-intro-grid"><div><span className="eyebrow"><span className="eyebrow-dot"/> OUR STORY</span><h2>Learning feels different when you <span className="gradient-text">build it yourself.</span></h2></div><div className="about-body"><p>Team Sprint is a student-focused initiative built around hands-on technology, creative problem-solving and collaborative experiences. From digital portfolios to robotics and design thinking, we create spaces where students can explore their interests and put new skills into practice.</p><p>Our goal is simple: make learning active, welcoming and connected to real-world possibilities.</p><div className="affiliation"><span className="affiliation-icon"><Sparkles/></span><div><strong>Connected to an innovation ecosystem</strong><p>Associated with the learning and innovation community at KIPM Innovators Foundation, GIDA, Gorakhpur.</p></div></div></div></div></section><section className="team-section section-pad"><div className="container"><SectionHeading eyebrow="MEET TEAM SPRINT" title={<>The people behind the <span className="gradient-text">momentum.</span></>} description="Meet the organizers helping ideas become hands-on learning experiences." centered/><div className="team-grid"><TeamCard profile={teamProfiles.sanskriti}/><TeamCard profile={teamProfiles.krishna}/></div></div></section><section className="values-section section-pad"><div className="container"><SectionHeading eyebrow="WHAT GUIDES US" title={<>Our values, in <span className="gradient-text">action.</span></>} description="The principles behind every workshop, challenge and collaboration." centered/><div className="values-grid">{values.map(([Icon,title,desc])=><article className="value-card" key={title}><div className="pillar-icon lavender"><Icon size={23}/></div><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section><section className="about-quote"><div className="container"><span>“</span><h2>Learn something new.<br/>Build something meaningful.<br/><em>Help someone else do the same.</em></h2><Link to="/events" className="text-link">Explore our experiences <ArrowRight size={17}/></Link></div></section></>
}

function ContactPage() {
  const [form, setForm] = useState({name:'', email:'', topic:'Workshop collaboration', message:''})
  const [submitted, setSubmitted] = useState(false)
  const update = e => setForm({...form, [e.target.name]: e.target.value})
  const submit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Team Sprint enquiry: ${form.topic}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`)
    window.location.href = `mailto:swadrive.in@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }
  return <><PageHero eyebrow="CONTACT & COLLABORATE" title={<>Let's make good<br/><span className="gradient-text">things happen.</span></>} description="Want to host a workshop, collaborate on a student event or bring Team Sprint to your institution? We'd love to hear from you."/><section className="section-pad contact-section"><div className="container contact-grid"><div className="contact-info"><span className="eyebrow"><span className="eyebrow-dot"/> SAY HELLO</span><h2>Every great project starts with a conversation.</h2><p>Tell us what you have in mind. We can explore workshop ideas, institution partnerships and student-focused activities together.</p><a className="contact-method" href="mailto:swadrive.in@gmail.com"><span><Mail/></span><div><small>Email us</small><strong>swadrive.in@gmail.com</strong></div><ArrowUpRight/></a><a className="contact-method" href="tel:+918601445260"><span><Phone/></span><div><small>Call us</small><strong>+91 86014 45260</strong></div><ArrowUpRight/></a><div className="contact-method"><span><MapPin/></span><div><small>Based around</small><strong>KIPM Technical Campus, GIDA, Gorakhpur</strong></div></div><div className="contact-note"><Sparkles size={19}/><p><strong>For schools and institutions</strong><br/>We can discuss a session suited to your students, goals and available time.</p></div></div><form className="contact-form" onSubmit={submit}><h3>Send an enquiry</h3><p>Fill in the details and your email app will open with a ready-to-send message.</p><label>Your name<input name="name" value={form.name} onChange={update} placeholder="Enter your name" required/></label><label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label><label>What would you like to discuss?<select name="topic" value={form.topic} onChange={update}><option>Workshop collaboration</option><option>School or institution partnership</option><option>Upcoming event</option><option>Volunteer with Team Sprint</option><option>Other enquiry</option></select></label><label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell us a little about your idea..." rows="5" required/></label><button className="button button-primary form-submit" type="submit">Prepare email <ArrowRight size={17}/></button>{submitted && <p className="form-feedback">Your email app should open with the message details. Send it there to contact Team Sprint.</p>}<small className="form-disclaimer">This form opens your default email application; it does not submit data to a server.</small></form></div></section></>
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  React.useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  const [activePoster, setActivePoster] = useState(null)
  const closePoster = React.useCallback(() => setActivePoster(null), [])
  return <><ScrollToTop/><Header/><Routes>
    <Route path="/" element={<Home onOpen={setActivePoster}/>}/>
    <Route path="/events/" element={<EventsPage onOpen={setActivePoster}/>}/>
    <Route path="/gallery" element={<GalleryPage onOpen={setActivePoster}/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/team/:slug" element={<TeamProfilePage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="*" element={<PageHero eyebrow="PAGE NOT FOUND" title={<>Let's get you<br/><span className="gradient-text">back on track.</span></>} description="The page you're looking for isn't here."/>}/>
  </Routes><Footer/><PosterModal event={activePoster} onClose={closePoster}/></>
}
