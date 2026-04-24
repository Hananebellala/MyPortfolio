import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hanane Bellala — UI/UX & Frontend Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hanane Bellala, a Computer Science student at ESI Algiers focused on UI/UX, frontend, Flutter, and information systems.",
      },
      { property: "og:title", content: "Hanane Bellala — UI/UX & Frontend Portfolio" },
      {
        property: "og:description",
        content:
          "A polished lavender portfolio blending technical frontend projects, UI/UX leadership, and student experience.",
      },
    ],
  }),
  component: PortfolioPage,
});

const programming = ["C", "Java", "Dart", "Python", "TypeScript", "SQL"];
const frontend = ["HTML", "CSS", "Angular"];
const mobile = ["Flutter"];
const tools = ["Git", "GitHub", "VS Code", "IntelliJ"];
const design = ["Figma", "Adobe Illustrator", "FigJam"];
const softSkills = ["Leadership", "Team Work", "Communication", "Flexible", "Fast Learner", "Team Management"];

const projects = [
  {
    title: "Smart Switch Project",
    stack: "Flutter · IoT · SQLite · Figma",
    role: "Team Leader · UI/UX · Mobile Development",
    description:
      "Led a six-person team building a connected smart switch experience, designing the interface and developing the Flutter app used to control the device.",
    symbol: "✦",
  },
  {
    title: "Patient Records Management",
    stack: "Angular · GitHub · Figma",
    role: "Team Leader · Frontend · UI Design",
    description:
      "Managed a software engineering team and shaped a structured web application for patient record workflows with clean Angular front-end screens.",
    symbol: "✿",
  },
  {
    title: "ESI CUP Fantasy App",
    stack: "Flutter · GitHub",
    role: "Frontend Development",
    description:
      "Collaborated on a mobile fantasy game app for the ESI CUP event, contributing polished frontend implementation for the player experience.",
    symbol: "✧",
  },
];

const experiences = [
  {
    org: "Google Developers Group Algiers",
    role: "Design Member",
    date: "Aug 2024 — Present",
    details: "UX workshop hosting, DevFest 2024 website UI/UX, GDG community app, Welcome Day visuals, and GLP platform design.",
  },
  {
    org: "School of AI",
    role: "UI/UX Lead",
    date: "Sep 2024 — Present",
    details: "Led Haick25 website UI/UX and managed the design direction for the 2025/2026 season.",
  },
  {
    org: "Sport & Entertainment Club",
    role: "Communication Manager",
    date: "Jul 2024 — Present",
    details: "Managed communication members, coordinated event promotion plans, and aligned club messaging across channels.",
  },
];

function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-hero-gradient px-5 pb-16 pt-8 sm:px-8 lg:px-12">
      <div className="soft-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <Decorations />
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-glass px-5 py-3 shadow-soft backdrop-blur-xl">
        <a href="#top" className="font-script text-3xl text-primary" aria-label="Hanane Bellala home">
          Hanane
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex">
          <a className="transition hover:text-primary" href="#about">About</a>
          <a className="transition hover:text-primary" href="#skills">Skills</a>
          <a className="transition hover:text-primary" href="#projects">Projects</a>
          <a className="transition hover:text-primary" href="#contact">Contact</a>
        </div>
      </nav>

      <div id="top" className="relative z-10 mx-auto grid max-w-6xl gap-10 pb-8 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20">
        <div className="fade-up">
          <p className="mb-3 inline-flex rounded-full border border-border bg-glass px-4 py-2 text-sm font-semibold text-primary shadow-glow backdrop-blur-xl">
            UI/UX soul · Frontend mindset · CS foundation
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            Hanane <span className="font-script text-7xl font-normal text-primary sm:text-8xl lg:text-9xl">Bellala</span>
          </h1>
          <h2 className="mt-4 text-xl font-bold text-lavender-foreground sm:text-2xl">
            Computer Science Student | UI/UX & Frontend Developer
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            I blend structured engineering with soft, intuitive product design — building interfaces that feel calm, readable, and technically thoughtful.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-primary-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-ring">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-border bg-glass px-6 py-3 text-sm font-bold text-foreground shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring">
              Contact Me
            </a>
          </div>
        </div>

        <div className="fade-up relative mx-auto w-full max-w-md" style={{ animationDelay: "120ms" }}>
          <div className="glass-panel relative aspect-[4/5] overflow-hidden rounded-[2rem] p-6">
            <div className="absolute inset-x-8 top-8 h-32 rounded-full bg-lavender blur-3xl" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-border bg-card/70 p-6">
              <div>
                <p className="font-script text-5xl text-primary">Portfolio</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-normal text-muted-foreground">Information Systems · Interface Design</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["04", "Year CS"],
                  ["03", "Major Projects"],
                  ["UI", "Design Lead"],
                  ["FE", "Builder"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-border bg-glass p-4 shadow-glow backdrop-blur-xl transition hover:-translate-y-1">
                    <p className="text-2xl font-extrabold text-primary">{value}</p>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl bg-secondary p-5">
                <p className="text-sm leading-6 text-secondary-foreground">
                  Designing thoughtful products with Figma, building them with Angular, Flutter, and TypeScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Decorations() {
  return (
    <div aria-hidden="true">
      <span className="sparkle-float absolute left-[8%] top-36 text-3xl text-sparkle">✦</span>
      <span className="sparkle-float absolute right-[10%] top-28 text-2xl text-primary">✧</span>
      <span className="sparkle-float absolute bottom-16 left-[42%] text-2xl text-sparkle">✿</span>
      <div className="absolute right-[18%] top-52 h-20 w-20 rounded-full bg-blush blur-2xl" />
      <div className="absolute left-[4%] bottom-20 h-28 w-28 rounded-full bg-lavender blur-3xl" />
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="glass-panel rounded-[2rem] p-6">
          <div className="aspect-square rounded-[1.5rem] bg-hero-gradient p-8">
            <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-border bg-glass p-6 backdrop-blur-xl">
              <span className="text-5xl text-primary">✿</span>
              <div>
                <p className="font-script text-6xl text-primary">Soft tech</p>
                <p className="mt-3 text-sm font-semibold text-muted-foreground">Calm visuals, clear systems, useful interfaces.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionKicker>About Me</SectionKicker>
          <h2 className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">
            A designer-developer shaped by systems, empathy, and beautiful details.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I’m Hanane, a 4th year Computer Science student at ESI Algiers specialized in Information and Technology Systems. My work sits between UI/UX thinking and frontend implementation, where user flows, visual hierarchy, and clean code meet.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["ESI Algiers", "Computer Science Engineering"],
              ["UI/UX", "Workshops, flows, wireframes"],
              ["Frontend", "Angular, Flutter, TypeScript"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-border bg-card-gradient p-5 shadow-soft">
                <p className="font-bold text-primary">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const groups = [
    ["Programming", programming],
    ["Frontend", frontend],
    ["Mobile", mobile],
    ["Tools", tools],
    ["Design", design],
  ];
  return (
    <section id="skills" className="bg-secondary/55 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionKicker>Skills</SectionKicker>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">Technical structure with a soft product sensibility.</h2>
          <p className="max-w-md text-muted-foreground">A focused toolkit for interfaces, mobile experiences, visual systems, and collaborative product work.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {groups.map(([title, items]) => (
            <SkillCard key={title as string} title={title as string} items={items as string[]} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {softSkills.map((skill) => (
            <span key={skill} className="rounded-full border border-border bg-glass px-4 py-2 text-sm font-semibold text-lavender-foreground shadow-glow backdrop-blur-xl">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-card-gradient p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
      <p className="font-bold text-primary">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionKicker>Projects</SectionKicker>
        <h2 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">Card-based builds with leadership, UI ownership, and frontend delivery.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group rounded-[2rem] border border-border bg-card-gradient p-6 shadow-soft transition hover:-translate-y-2 hover:shadow-glow">
              <div className="mb-6 flex h-28 items-center justify-center rounded-[1.5rem] bg-hero-gradient text-5xl text-primary transition group-hover:scale-[1.02]">
                {project.symbol}
              </div>
              <h3 className="text-2xl font-extrabold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm font-bold text-primary">{project.role}</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <p className="mt-5 rounded-2xl bg-secondary px-4 py-3 text-xs font-bold text-secondary-foreground">{project.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="bg-hero-gradient px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionKicker>Experience</SectionKicker>
        <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Community work where design becomes leadership.</h2>
        <div className="mt-10 space-y-5">
          {experiences.map((item) => (
            <div key={item.org} className="glass-panel grid gap-4 rounded-[1.5rem] p-6 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-bold text-primary">{item.date}</p>
                <h3 className="mt-2 text-xl font-extrabold">{item.org}</h3>
                <p className="text-sm font-semibold text-muted-foreground">{item.role}</p>
              </div>
              <p className="leading-7 text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-secondary p-6 shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <SectionKicker>Contact</SectionKicker>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Let’s design something thoughtful.</h2>
          <div className="mt-8 space-y-3 text-sm font-semibold text-muted-foreground">
            <p>Email · <a className="text-primary hover:underline" href="mailto:mh_bellala@esi.dz">mh_bellala@esi.dz</a></p>
            <p>Phone · <a className="text-primary hover:underline" href="tel:+213664657992">0664657992</a></p>
            <p>LinkedIn · <a className="text-primary hover:underline" href="https://linkedin.com/in/hanane-bellala">/in/hanane-bellala</a></p>
            <p>Behance · <a className="text-primary hover:underline" href="https://behance.net/hananebellala">hananebellala</a></p>
          </div>
        </div>
        <form className="glass-panel rounded-[1.5rem] p-5" aria-label="Contact form">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring" placeholder="Your name" aria-label="Your name" />
            <input className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring" placeholder="Email address" aria-label="Email address" type="email" />
          </div>
          <input className="mt-4 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring" placeholder="Subject" aria-label="Subject" />
          <textarea className="mt-4 min-h-32 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring" placeholder="Message" aria-label="Message" />
          <button className="mt-4 w-full rounded-full bg-primary-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring" type="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-border px-5 py-10 text-center sm:px-8 lg:px-12">
      <p className="font-script text-5xl text-primary">Hanane Bellala</p>
      <p className="mt-2 text-sm font-semibold text-muted-foreground">Designed with lavender pixels, clear hierarchy, and a tiny sparkle ✦</p>
    </footer>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <p className="font-script text-5xl text-primary">{children}</p>;
}