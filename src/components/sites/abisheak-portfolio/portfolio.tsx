"use client";

import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";

const asset = "/sites/abisheak-portfolio/images";

type Project = {
  title: string;
  subtitle: string;
  category: string;
  poster: string;
  description: string;
  embedUrl: string;
  driveUrl: string;
  tags: string[];
  badge?: string;
};

const projects: Project[] = [
  {
    title: "SaaS UI Animation",
    subtitle: "Claude AI Workflow Velocity",
    category: "SaaS Animation",
    poster: "claude-saas-1.jpg",
    description: "Dynamic UI walkthrough with custom kinetic transitions, highlighting AI workflow velocity.",
    embedUrl: "https://www.youtube.com/embed/43pXb4PQ9JU",
    driveUrl: "https://drive.google.com/file/d/14_9L8mF6eRj15hR91aIu7S0h96WpUu6e/view",
    tags: ["SaaS", "After Effects", "UI Animation"],
    badge: "Featured",
  },
  {
    title: "SaaS Product Motion",
    subtitle: "Nokujob Product Demo",
    category: "SaaS Animation",
    poster: "nokujob-1.jpg",
    description: "High-conversion product motion explaining platform capabilities with fluid typography and pacing.",
    embedUrl: "https://www.youtube.com/embed/NModm3Vh33Q",
    driveUrl: "https://drive.google.com/file/d/1NMlcI9ss79HhGl6AfWdI713olJkFcJRe/view",
    tags: ["SaaS Motion", "Product Demo", "Pacing"],
  },
  {
    title: "Tech Verse Cinematic",
    subtitle: "Talking-Head Retention Edit",
    category: "Talking-Head Videos",
    poster: "tech-verse-1.jpg",
    description: "Fast-paced YouTube and podcast edit with seamless sound design, motion graphics, and graphic callouts.",
    embedUrl: "https://www.youtube.com/embed/Lm6ux1O4V8w",
    driveUrl: "https://drive.google.com/file/d/1HCuDpH9Ag7exS-2aGDkwoSozWPocSC9u/view",
    tags: ["Cinematic", "Sound Design", "Storytelling"],
    badge: "YouTube",
  },
  {
    title: "Figma Brand Motion",
    subtitle: "Design Tool Motion Graphics",
    category: "Motion Graphics",
    poster: "figma-f-1.jpg",
    description: "Sleek geometric motion design emphasizing modern design tool features and collaboration.",
    embedUrl: "https://www.youtube.com/embed/V-QR7KA5xN0",
    driveUrl: "https://drive.google.com/file/d/1-Nk8UP9FA3c5dsfkpQyY1614zI7vMUAd/view",
    tags: ["Motion Design", "Typography", "Figma"],
    badge: "Brand",
  },
  {
    title: "Gemini AI Showcase",
    subtitle: "Multimodal AI Motion Walkthrough",
    category: "SaaS Animation",
    poster: "gemini-f1-1.jpg",
    description: "Visualizing multimodal AI intelligence with responsive motion typography, custom sound design, and clean interfaces.",
    embedUrl: "https://www.youtube.com/embed/pBmb6PSuWgM",
    driveUrl: "https://drive.google.com/file/d/1XIFv2S_6Iesn-ZhtcchTkbW9dfntWSQ4/view",
    tags: ["AI Motion", "Kinetic UI", "Sound SFX"],
  },
  {
    title: "Spotify 2D Animation",
    subtitle: "Beat-Synced Lyrical Motion",
    category: "2D Lyrical Animation",
    poster: "spotify-1.jpg",
    description: "Expressive rhythm-synced text animation, fluid shape morphing, and musical beat matching.",
    embedUrl: "https://www.youtube.com/embed/F4J8qzsi_WQ",
    driveUrl: "https://drive.google.com/file/d/1b68cJTLF4auqq_EtLYln3E58vgmB2iss/view",
    tags: ["2D Lyrical", "Music Sync", "Typography"],
  },
  {
    title: "Documentary Pacing",
    subtitle: "Cinematic Archival Grade",
    category: "Documentary Videos",
    poster: "document-pr-1.jpg",
    description: "Cinematic storytelling with rhythm-matched pacing, archival sound design, and color grading.",
    embedUrl: "https://drive.google.com/file/d/1UKzBsI1eAUcyj4TEUmj863gUoDBPLIWa/preview",
    driveUrl: "https://drive.google.com/file/d/1UKzBsI1eAUcyj4TEUmj863gUoDBPLIWa/view",
    tags: ["Documentary", "Color Grading", "Sound Design"],
  },
  {
    title: "Nosana Story",
    subtitle: "High Engagement Narrative",
    category: "Talking-Head Videos",
    poster: "nosana-f2-1.jpg",
    description: "Retention-optimized tech video with punch-ins, B-roll overlays, and kinetic typography.",
    embedUrl: "https://drive.google.com/file/d/1fdE3nw9VYOjt2jpDwE-nVsL8CiI-a10Z/preview",
    driveUrl: "https://drive.google.com/file/d/1fdE3nw9VYOjt2jpDwE-nVsL8CiI-a10Z/view",
    tags: ["Short Film", "Engagement", "YouTube"],
    badge: "The Journey",
  },
];

const services = [
  ["01", "SaaS Animation", "SPECIALTY", "STARTS FROM", "₹10,000"],
  ["02", "Motion Graphics Video", "", "FROM – TO", "₹2,000 – ₹10,000"],
  ["03", "Talking-Head Videos", "", "FROM – TO", "₹1,500 – ₹4,000"],
  ["04", "Documentary Videos", "", "FROM – TO", "₹3,000 – ₹8,000"],
  ["05", "2D Lyrical Animation", "", "FROM – TO", "₹3,000 – ₹10,000"],
];

const skillCards = [
  ["SaaS UI Animation", "Specialty", "Master"],
  ["Motion Graphics", "Motion Design", "Advanced"],
  ["Speed Ramps", "Dynamic Edits", "Advanced"],
  ["AI Video Creation", "Generative AI", "Advanced"],
  ["Kinetic Typography", "Motion Text", "Advanced"],
  ["Foley & Sound Design", "Audio", "Advanced"],
  ["Talking-Head Retention", "YouTube", "Master"],
  ["2D Lyrical Animation", "Music Sync", "Proficient"],
];

const tools = [
  ["F", "Figma", "#1abcfe"],
  ["Fr", "Framer", "#f4f4f5"],
  ["</>", "Code", "#f4f4f5"],
  ["Ai", "Adobe Illustrator", "#ff9a00"],
  ["Ps", "Adobe Photoshop", "#31a8ff"],
  ["Ae", "Adobe After Effects", "#cf96ff"],
  ["Pr", "Adobe Premiere Pro", "#9999ff"],
];

const navItems = [
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function AbisheakPortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!selectedProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject]);

  useEffect(() => {
    if (!sent) return;
    const timeout = window.setTimeout(() => setSent(false), 4000);
    return () => window.clearTimeout(timeout);
  }, [sent]);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className={styles.portfolio}>
      <div className={styles.ambient} aria-hidden="true" />
      <header className={styles.header}>
        <div className={styles.navBar}>
          <a className={styles.wordmark} href="#hero" aria-label="Abisheak, top">
            <span>A</span>BISHEAK.
          </a>
          <nav aria-label="Main navigation" className={styles.navLinks}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <a className={styles.talkButton} href="#contact">LET&apos;S TALK</a>
        </div>
      </header>

      <section className={styles.hero} id="hero">
        <div className={styles.heroPhoto} aria-hidden="true">
          <div className={styles.heroGlass} />
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>VISUAL STORYTELLER <i /> DIGITAL CREATIVE</p>
          <h1>ABISHEAK</h1>
          <p className={styles.role}>VIDEO EDITOR <b>/</b> MOTION DESIGNER</p>
          <p className={styles.tagline}>Crafting visuals that make brands stand out.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#projects">EXPLORE MY WORK</a>
            <a className={styles.secondaryButton} href="#contact">GET IN TOUCH</a>
          </div>
        </div>
        <a className={styles.scrollCue} href="#stats" aria-label="Scroll to client results"><span /></a>
      </section>

      <section className={styles.statsSection} id="stats" aria-labelledby="stats-heading">
        <div className={styles.statsPanel}>
          <span className={styles.sectionEyebrow}>A TRACK RECORD BUILT ON TRUST</span>
          <h2 id="stats-heading">Client results</h2>
          <div className={styles.statsGrid}>
            <div><strong>150<span>+</span></strong><small>SATISFIED CLIENTS</small></div>
            <div><strong>100<span>%</span></strong><small>PREMIUM EDITS</small></div>
            <div><strong>100<span>K+</span></strong><small>VIEWS ON CLIENT EDITS</small></div>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection} id="projects" aria-label="Featured projects">
        <div className={styles.projectsStage}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>FEATURED WORKS</span>
            <h2>PROJECTS.</h2>
            <div className={styles.headingRule} />
            <a className={styles.driveLink} href="https://drive.google.com/drive/folders/14_2M8Wb30JZb4QGX0_vJ-jiAR_XU-e-U" target="_blank" rel="noreferrer">
              <span aria-hidden="true">◉</span> Open Full Quality Master Drive Folder <b>↗</b>
            </a>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <button className={styles.projectCard} key={project.title} onClick={() => setSelectedProject(project)} aria-label={`Preview ${project.title}`}>
                <Image src={`${asset}/${project.poster}`} alt="" width={1280} height={720} sizes="(max-width: 767px) 48vw, 31vw" />
                <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                {project.badge && <span className={styles.cardBadge}>{project.badge}</span>}
                <span className={styles.cardInfo}>
                  <small>{project.category}</small>
                  <strong>{project.title}</strong>
                  <em>VIEW PROJECT <b>↗</b></em>
                </span>
              </button>
            ))}
          </div>
          <p className={styles.projectHint}>SELECT A PROJECT TO VIEW THE MOTION REEL</p>
        </div>
      </section>

      <section className={styles.aboutSection} id="about" aria-labelledby="about-heading">
        <div className={styles.aboutWrap}>
          <div className={styles.aboutHeading}>
            <span className={styles.sectionEyebrow}>THE STORY BEHIND THE CUTS</span>
            <h2 id="about-heading">ABOUT<br className={styles.mobileBreak} /> ABISHEAK.</h2>
            <div className={styles.headingRule} />
          </div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutPanel}>
              <p className={styles.aboutText}>I am a professional video editor and motion designer dedicated to visual velocity, kinetic storytelling, and SaaS product demos that convert. Pacing, beat-sync sound design, and razor-sharp animation turn every frame into an unforgettable experience.</p>
              <h3>CORE TOOLKIT &amp; PROFICIENCIES</h3>
              <div className={styles.toolTags}>
                {["Adobe Premiere Pro", "After Effects", "SaaS UI Motion", "DaVinci Resolve", "Sound Design & SFX", "Kinetic Typography", "2D Lyrical Animation", "4K/60 Delivery"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <div className={styles.profileCard}>
              <Image src={`${asset}/abi-profile.jpg`} alt="Abisheak standing beside a brick wall" width={5184} height={3456} sizes="(max-width: 767px) 100vw, 40vw" />
              <div className={styles.profileCaption}><strong>ABISHEAK</strong><span>MOTION DIRECTOR</span></div>
              <span className={styles.profileFrame} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} id="services" aria-labelledby="services-heading">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>TRANSPARENT RATES</span>
          <h2 id="services-heading">SERVICES &amp;<br className={styles.mobileBreak} /> PRICING.</h2>
          <div className={styles.headingRule} />
        </div>
        <div className={styles.servicesList}>
          {services.map(([number, title, badge, label, price]) => (
            <a className={styles.serviceRow} href="#contact" key={number}>
              <span className={styles.serviceNumber}>{number}</span>
              <span className={styles.serviceTitle}>{title}{badge && <small>{badge}</small>}</span>
              <span className={styles.servicePrice}><small>{label}</small><strong>{price}</strong></span>
              <span className={styles.serviceArrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className={styles.priceNote}>*Final pricing depends on video duration, complexity, animation requirements, and project scope.</p>
      </section>

      <section className={styles.skillsSection} id="skills" aria-labelledby="skills-heading">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>ARSENAL &amp; EXPERTISE</span>
          <h2 id="skills-heading">TECHNICAL SKILLS.</h2>
          <div className={styles.headingRule} />
        </div>
        <div className={styles.skillsGrid}>
          {skillCards.map(([title, category, level], index) => (
            <article className={styles.skillCard} key={title}>
              <span className={styles.skillNumber}>0{index + 1}</span>
              <h3>{title}</h3>
              <div><span>{category}</span><b>{level}</b></div>
            </article>
          ))}
        </div>
        <div className={styles.toolsSection}>
          <span className={styles.sectionEyebrow}>SOFTWARE &amp; TOOLS</span>
          <h3>MY ARSENAL.</h3>
          <div className={styles.toolsGrid}>
            {tools.map(([mark, label, color]) => (
              <div className={styles.toolCard} key={label}>
                <span style={{ "--tool-color": color } as CSSProperties}>{mark}</span>
                <small>{label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection} id="contact" aria-labelledby="contact-heading">
        <Image className={styles.spider} src={`${asset}/spider.png`} alt="" aria-hidden="true" width={1600} height={809} />
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>GET IN TOUCH</span>
          <h2 id="contact-heading">CONTACT.</h2>
          <div className={styles.headingRule} />
        </div>
        <div className={styles.contactPanel}>
          <a className={styles.whatsappCard} href="https://wa.me/918438984062?text=Hi%20Abisheak%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">
            <span className={styles.whatsappIcon} aria-hidden="true">◉</span>
            <span><small>WHATSAPP</small><strong>+91 84389 84062</strong></span>
            <em>CHAT NOW →</em>
          </a>
          {sent ? (
            <div className={styles.sentState} role="status">
              <strong>✓</strong>
              <h3>MESSAGE SENT!</h3>
              <p>Thanks for reaching out to Abisheak. I&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form className={styles.contactForm} onSubmit={submitForm}>
              <div className={styles.formRow}>
                <label>YOUR NAME<input name="name" type="text" required placeholder="Your Name" /></label>
                <label>YOUR EMAIL<input name="email" type="email" required placeholder="your.email@example.com" /></label>
              </div>
              <label>MESSAGE &amp; PROJECT SCOPE<textarea name="message" required rows={5} placeholder="Let's build something cinematic together..." /></label>
              <button className={styles.primaryButton} type="submit">Send Message</button>
            </form>
          )}
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.wordmark} href="#hero"><span>A</span>BISHEAK.</a>
        <p>© 2026 ABISHEAK. VIDEO EDITOR &amp; MOTION DESIGNER.</p>
        <nav aria-label="Footer navigation">
          <a href="#hero">TOP</a><a href="#about">ABOUT</a><a href="#projects">PROJECTS</a><a href="#contact">CONTACT</a>
        </nav>
      </footer>

      {selectedProject && (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
          <section className={styles.projectModal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className={styles.modalClose} type="button" onClick={() => setSelectedProject(null)} aria-label="Close project preview">×</button>
            <div className={styles.modalMedia}>
              <iframe src={selectedProject.embedUrl} title={`${selectedProject.title} video`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
            </div>
            <div className={styles.modalCopy}>
              <span className={styles.sectionEyebrow}>{selectedProject.category}</span>
              <h2 id="modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className={styles.modalTags}>{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href={selectedProject.driveUrl} target="_blank" rel="noreferrer">OPEN DRIVE FILE ↗</a>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
