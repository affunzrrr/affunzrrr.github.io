import Head from "next/head";
import type { PageConfig } from "next";
import { siteConfig } from "@/lib/site-config";

export const config: PageConfig = {
  unstable_runtimeJS: false,
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Afra Nazeer",
  url: siteConfig.url,
  image: `${siteConfig.url}/images/afra-og.jpg`,
  jobTitle: "Freelance Business Analyst",
  description:
    "IT for Business undergraduate interested in business analysis, data analysis, public speaking, event hosting, and compering.",
  email: "mailto:affunzrrr18@gmail.com",
  sameAs: ["https://www.linkedin.com/in/afra-nazeer-8157493aa"],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "University of Cambridge" },
    { "@type": "EducationalOrganization", name: "National Institute of Business Management" },
  ],
  knowsAbout: [
    "Business Analysis",
    "Data Analysis",
    "Information Systems",
    "Public Speaking",
    "Event Hosting",
    "Leadership",
  ],
};

const interests = [
  {
    number: "01",
    title: "Business analysis",
    text: "Understanding needs, clarifying problems, and shaping practical solutions that connect people, processes, and technology.",
  },
  {
    number: "02",
    title: "Data analysis",
    text: "Turning information into useful insight and supporting thoughtful, evidence-led decisions.",
  },
  {
    number: "03",
    title: "Communication",
    text: "Making ideas clear through public speaking, facilitation, event hosting, and confident stakeholder communication.",
  },
];

const education = [
  { year: "2026", title: "HND in IT for Business / Information Systems", note: "Undergraduate pathway" },
  { year: "2025", title: "Advanced Level", note: "Completed" },
  { year: "2023 — 2024", title: "Diploma in Software Engineering", note: "November 2023 — December 2024" },
  { year: "2023", title: "Certificate in Software Engineering", note: "July — November 2023" },
  { year: "2023", title: "Ordinary Level", note: "Completed" },
];

const workshops = [
  "Search Engine Optimization",
  "AI for Learning",
  "Business Analyst or Project Manager?",
  "Will AI Replace Your Business or Transform It?",
  "How to Conduct Research as an Undergraduate",
];

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
    <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM19 12.98c0-3.16-1.69-4.63-3.94-4.63a3.4 3.4 0 0 0-3.08 1.69V8.5H8.6V19h3.38v-5.2c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.79V19H19v-6.02Z" />
  </svg>
);

const MailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Afra Nazeer | Business Analysis &amp; IT Portfolio</title>
        <meta name="description" content="Portfolio of Afra Nazeer, an IT for Business undergraduate and emerging business analyst with strengths in data, communication, leadership, and technology." />
        <meta name="keywords" content="Afra Nazeer, business analyst, IT for Business, data analysis, information systems, public speaking, Sri Lanka" />
        <meta name="author" content="Afra Nazeer" />
        <meta name="creator" content="Afra Nazeer" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="google-site-verification" content="mpJWiyBIFNFl5vE-d4L0CGrpvNMwADbpVVNkY8ITL9U" />
        <meta name="theme-color" content="#f6f3ed" />
        <link rel="canonical" href={siteConfig.url} />
        <link rel="icon" href={`${siteConfig.basePath}/icon.svg`} type="image/svg+xml" />
        <link rel="manifest" href={`${siteConfig.basePath}/manifest.webmanifest`} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_LK" />
        <meta property="og:site_name" content="Afra Nazeer" />
        <meta property="og:title" content="Afra Nazeer | Business Analysis &amp; IT Portfolio" />
        <meta property="og:description" content="IT for Business undergraduate connecting business analysis, data, technology, and communication." />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content={`${siteConfig.url}/images/afra-og.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Afra Nazeer — IT for Business undergraduate and emerging business analyst" />
        <meta property="profile:first_name" content="Afra" />
        <meta property="profile:last_name" content="Nazeer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Afra Nazeer | Business Analysis &amp; IT Portfolio" />
        <meta name="twitter:description" content="IT for Business undergraduate connecting business analysis, data, technology, and communication." />
        <meta name="twitter:image" content={`${siteConfig.url}/images/afra-og.jpg`} />
      </Head>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="wordmark" aria-label="AN. — Afra Nazeer — home">
            AN<span>.</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#journey">Journey</a>
            <a href="#contact" className="nav-cta">Let&apos;s talk</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-heading">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> IT for Business undergraduate</p>
              <h1 id="hero-heading">Where business insight meets <em>human connection.</em></h1>
              <p className="hero-intro">
                I&apos;m Afra Nazeer—an emerging business analyst who brings technology, data, and communication together to create practical solutions that matter.
              </p>
              <div className="hero-actions">
                <a href="#experience" className="button button-primary">Explore my journey <ArrowIcon /></a>
                <a href="mailto:affunzrrr18@gmail.com" className="button button-secondary">Get in touch</a>
              </div>
              <dl className="hero-facts" aria-label="Profile highlights">
                <div><dt>Focus</dt><dd>Business + Technology</dd></div>
                <div><dt>Strength</dt><dd>People + Communication</dd></div>
              </dl>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-frame">
                <picture>
                  <source type="image/avif" srcSet={`${siteConfig.basePath}/images/afra-portrait-640.avif 640w, ${siteConfig.basePath}/images/afra-portrait-960.avif 960w`} sizes="(max-width: 767px) 88vw, 42vw" />
                  <source type="image/webp" srcSet={`${siteConfig.basePath}/images/afra-portrait-640.webp 640w, ${siteConfig.basePath}/images/afra-portrait-960.webp 960w`} sizes="(max-width: 767px) 88vw, 42vw" />
                  <img src={`${siteConfig.basePath}/images/afra-portrait-960.jpg`} width="960" height="1280" alt="Afra Nazeer at a professional event" fetchPriority="high" decoding="async" />
                </picture>
              </div>
              <div className="portrait-note"><strong>Curious by nature.</strong><span>Purposeful by choice.</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-heading">
          <div className="shell about-grid">
            <div>
              <p className="section-label">01 / About me</p>
              <h2 id="about-heading">Ideas become valuable when they work for people.</h2>
            </div>
            <div className="about-copy">
              <p className="lead">I would describe myself as curious, adaptable, people-oriented, and always willing to learn.</p>
              <p>My goal is to build a career where I can combine technology, business, and communication to create practical solutions that make a meaningful difference.</p>
              <p>Beyond academics, I take an active role in leadership, student public-speaking training, event organizing, workshops, and professional communities. Each experience continues to strengthen how I communicate, collaborate, lead, and organize.</p>
              <div className="trait-row" aria-label="Personal qualities">
                <span>Curious</span><span>Adaptable</span><span>People-oriented</span><span>Always learning</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section expertise" aria-labelledby="expertise-heading">
          <div className="shell">
            <div className="section-heading-row">
              <div>
                <p className="section-label">02 / What I bring</p>
                <h2 id="expertise-heading">A multidisciplinary point of view.</h2>
              </div>
              <p>I work at the intersection of structured thinking and meaningful communication.</p>
            </div>
            <div className="expertise-grid">
              {interests.map((item) => (
                <article key={item.number} className="expertise-card">
                  <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience" aria-labelledby="experience-heading">
          <div className="shell">
            <p className="section-label light">03 / In practice</p>
            <div className="experience-title-row">
              <h2 id="experience-heading">Experience shaped by initiative.</h2>
              <p>Learning through real responsibility—across analysis, leadership, and professional communities.</p>
            </div>
            <div className="role-list">
              <article className="role">
                <div className="role-type">Experience</div>
                <div><p className="role-org">Astrix IoT Solutions</p><h3>Freelance Business Analyst</h3></div>
                <p>Contributing a business-focused perspective to technology initiatives and building practical analysis experience.</p>
              </article>
              <article className="role">
                <div className="role-type">Leadership</div>
                <div><p className="role-org">IEEE Student Branch · NIBM</p><h3>Team Lead — Membership Development</h3></div>
                <p>Supporting student engagement, team coordination, and a stronger professional community on campus.</p>
              </article>
              <article className="role">
                <div className="role-type">Community</div>
                <div><p className="role-org">CSSL GenZ Chapter · NIBM</p><h3>Committee Member</h3></div>
                <p>Helping organize student-led professional initiatives and opportunities within the technology community.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="journey" className="section journey" aria-labelledby="journey-heading">
          <div className="shell journey-grid">
            <div className="journey-intro">
              <p className="section-label">04 / Learning journey</p>
              <h2 id="journey-heading">Building a foundation across business and technology.</h2>
              <p>Formal study, independent learning, and professional development all contribute to how I approach new problems.</p>
              <div className="cambridge-card">
                <span>English qualifications</span>
                <strong>KET · PET · FCE</strong>
                <p>University of Cambridge certifications</p>
              </div>
            </div>
            <ol className="timeline" aria-label="Education timeline">
              {education.map((item) => (
                <li key={`${item.year}-${item.title}`}>
                  <time>{item.year}</time><div><h3>{item.title}</h3><p>{item.note}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section learning" aria-labelledby="learning-heading">
          <div className="shell learning-grid">
            <div>
              <p className="section-label light">05 / Continuous learning</p>
              <h2 id="learning-heading">Questions I&apos;m exploring.</h2>
              <p>Workshops and conversations that expand how I think about modern business, technology, and research.</p>
            </div>
            <ul className="workshop-list">
              {workshops.map((workshop, index) => (
                <li key={workshop}><span>{String(index + 1).padStart(2, "0")}</span>{workshop}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section voice" aria-labelledby="voice-heading">
          <div className="shell voice-grid">
            <div>
              <p className="section-label">Beyond the desk</p>
              <h2 id="voice-heading">A voice that brings people together.</h2>
            </div>
            <blockquote>“Communication is not just a soft skill—it&apos;s how good ideas earn understanding, trust, and momentum.”</blockquote>
            <div className="voice-points">
              <p><strong>Public speaking</strong><span>Training students and building confidence through practice.</span></p>
              <p><strong>Hosting &amp; compering</strong><span>Creating energy, clarity, and connection at events.</span></p>
              <p><strong>Event organizing</strong><span>Turning plans into well-coordinated shared experiences.</span></p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-heading">
          <div className="shell contact-inner">
            <p className="section-label light">Let&apos;s connect</p>
            <h2 id="contact-heading">Have an idea, opportunity, or conversation in mind?</h2>
            <p>I&apos;m always open to learning, collaborating, and meeting people who care about useful technology and thoughtful business.</p>
            <div className="contact-links">
              <a href="mailto:affunzrrr18@gmail.com"><MailIcon /> Email me <ArrowIcon /></a>
              <a href="https://www.linkedin.com/in/afra-nazeer-8157493aa" target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <a href="#top" className="wordmark" aria-label="AN. — Back to top">AN<span>.</span></a>
          <p>Afra Nazeer · Business, technology &amp; communication.</p>
          <p>© {new Date().getFullYear()} Afra Nazeer</p>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
