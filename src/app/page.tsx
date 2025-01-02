'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Github, Mail, Linkedin, ChevronDown, ChevronUp } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const underlinedHeading = "relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-12 after:bg-red-500 after:rounded-full pb-2"

export default function Component() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllExperience, setShowAllExperience] = useState(false)
  const [showAllCertifications, setShowAllCertifications] = useState(false);


  // Function to handle smooth scrolling with TypeScript type
  const scrollToSection = (elementId: string): void => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const certifications = [
    {
      title: "Google Cloud Engineer",
      provider: "Dicoding Indonesia",
      icon: "/img/dicoding.png",
      url: "https://www.dicoding.com/certificates/MRZM82ENNZYQ"
    },
    {
      title: "Google Cloud Architect",
      provider: "Dicoding Indonesia",
      icon: "/img/dicoding.png",
      url: "https://www.dicoding.com/certificates/98XW23LE9PM3"
    },
    {
      title: "Implement Load Balancing",
      provider: "Cloud Skillboost",
      icon: "/img/cloud.svg",
      url: "https://www.cloudskillsboost.google/public_profiles/b08a67fd-635e-45d8-a876-5053c5d14ec8/badges/9240804?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      title: "Build Real World AI App",
      provider: "Cloud Skillboost",
      icon: "/img/cloud.svg",
      url: "https://www.cloudskillsboost.google/public_profiles/dac03a59-e840-456c-8c3a-ab24175af516/badges/9961848?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      title: "Go-Lang Basic",
      provider: "Codepolitan",
      icon: "/img/codepolitan.png",
      url: "https://www.codepolitan.com/c/Z9TABD2/"
    },
    {
      title: "Database Design",
      provider: "Oracle",
      icon: "/img/oracle.png",
      url: "https://drive.google.com/file/d/1joASiWPjvrfE2fq5affXvwphdpYekj5Y/view"
    },
    {
      title: "Intermediate Multimedia Designer",
      provider: "BNSP",
      icon: "/img/BNSP.png",
      url: "https://drive.google.com/file/d/10gSBByxLpIJvA0y1vcN74GCFyKzLdeKc/view"
    },
    {
      title: "Click Me For More Certifications",
      provider: "Linkedin",
      icon: "/img/LinkedIn.png",
      url: "https://www.linkedin.com/in/luqman-aldi/details/certifications/"
    },
  ];  
  
  const projects = [
    {
      title: "solifess",
      description: "Menfess that can send a song for Polines people. github is private for security purpose.",
      tech: ["Javascript", "React", "Next", "Tailwind", "Shadcn", "Postgresql"],
      demo: "https://www.solifess.fun/"
    },
    {
      title: "BeliJasa.com",
      description: "local marketplace for buying and selling services",
      tech: ["MangoDB", "Express", "React", "Node.js"],
      github: "https://github.com/HengkerKucing/belijasa.git",
      dokumentasi: "https://docs.google.com/document/d/1b0fteH99bMJiRPfwAoUHEdANIE-LwFOxK7EK9KI1Dts/edit?usp=sharing"
    },
    {
      title: "CCTV Analytic",
      description: "a web for counting vehicle and analytics. this project is private because NDA (Non-Disclosure Agreement). I can show the code in limited places",
      tech: ["Golang", "React", "PostgreSQL"],
      demo: "https://mam.jogjaprov.go.id/"
    },
    {
      title: "Kamus Gen-Z API",
      description: "Open-Source project from IMPHEN",
      tech: ["Javascript", "SQLite", "Prisma"],
      github: "https://github.com/IMPHNEN/kamus-gen-z-api.git",
      demo: "https://kamusgenz.vercel.app/"
    },
    {
      title: "Admin-Reviewer Module",
      description: "project admin and reviewer for SIPMAS (Research and Community Service Information System)",
      tech: ["Laravel", "MySQL"],
      github: "https://github.com/HengkerKucing/AdminReviewer-Module.git",
      dokumentasi: "https://docs.google.com/document/d/1T1gPkAoQ5pxwV4HXsPok4jD3Zn8eqVIep2cKJLAbmkY/edit?usp=sharing"
    },
    {
      title: "Personal Website V1",
      description: "Personal Website for portofolio",
      tech: ["HTML", "TailwindCSS", "JavaScript"],
      github: "https://github.com/HengkerKucing/web_aldi_tailwindcss.git",
      demo: "https://porto-aldi-v1.vercel.app/"
    },
    {
      title: "Bread E-Commerce",
      description: "Mobile E-Commerce for selling bread, this project when I test for BNSP Junior Mobile Programmer",
      tech: ["Dart", "Flutter", "PHP", "MySQL"],
      github: "https://github.com/HengkerKucing/Mobile_Roti_BNSP.git",
    },
    {
      title: "Random Pokemon Generator",
      description: "Website for generate a random pokemon with beatiful card",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/HengkerKucing/Pokemon-generator.git",
      demo: "https://pokemon-generator-vert.vercel.app/"
    },
    {
      title: "Cloud Architecture for E-Commerce",
      description: "Cloud Architecture for mini E-Commerce",
      tech: ["GCP", "Load Balancing", "VPC", "Cloud NAT", "Cloud Firewall"],
      dokumentasi: "https://docs.google.com/document/d/1IF4Q9_a69_dID79hkL42yA-kwU6KLWWqg-_B50Qsonw/edit?usp=sharing"
    },
    {
      title: "Deploy App using App Engine",
      description: "Deploy Money Tracker App using App Engine",
      tech: ["GCP", "App Engine", "Cloud SQL", "Cloud Storage Bucket"],
      dokumentasi: "https://docs.google.com/document/d/1HuGqJYvXdrfaiDM2oGIZd8Y2sToz4dpYrLI5osO7oUo/edit?usp=sharing"
    },
    {
      title: "Deploy App using Kubernetes Engine",
      description: "Deploy Notes App using Kubernetes Engine on GCP",
      tech: ["GCP", "GKE", "Artifact Registry"],
      dokumentasi: "https://docs.google.com/document/d/1VAGhq8HOpWxggv1TZiJ1KCQSzwVkNM8MOWd8SJbYT50/edit?usp=sharing"
    },
    {
      title: "Zombie Apocalypse",
      description: "Game Zombie",
      tech: ["Unity"],
      dokumentasi: "https://docs.google.com/document/d/1VC1sl7yZuRWtQYk9f8W7Mt9AFH6L-XoaevMyDavDH_E/edit?usp=sharing"
    },
  ]

  const experiences = [
    {
      year: "2024",
      role: "Backend Developer Intern (MSIB)",
      company: "Dinas Kominfo DIY",
      description: "Working on project CCTV Analytic",
      companyUrl: "https://diskominfo.jogjaprov.go.id/"
    },
    {
      year: "2023",
      role: "Media Creative",
      company: "Google Developer Students Club",
      description: "Make poster and feed",
      companyUrl: "https://www.instagram.com/gdsc.polines/"
    },
    {
      year: "2022",
      role: "Graduate",
      company: "From High School",
      description: "",
      companyUrl: ""
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="text-xl font-bold flex items-center gap-2" href="/">
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className=""
            />
          </Link>
          {/* <nav className="flex gap-6">
            <Link className="hover:text-primary transition-colors" href="#projects">
              Projects
            </Link>
            <Link className="hover:text-primary transition-colors" href="#experience">
              Experience
            </Link>
          </nav> */}
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <section className="pt-24 pb-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Aji Maulana</h1>
            <h2 className="text-lg sm:text-xl text-muted-foreground mb-3">Backend Developer & Machine Learning Engineer</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4">
              A passionate developer focused on crafting efficient and robust backend solutions with Laravel. Enjoys experimenting with side projects using Next.js for modern web development and TensorFlow for machine learning innovations.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => scrollToSection('projects')}>View Projects</Button>
              <Button variant="secondary" onClick={() => scrollToSection('contact')}>Contact Me</Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-8 border-t border-white/10">
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${underlinedHeading}`}>Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["Laravel", "Next.Js", "Tensorflow"].map((skill) => (
              <div
                key={skill}
                className="bg-white/10 text-white px-3 py-1 text-sm rounded-md hover:bg-white hover:text-black transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-8 border-t border-white/10">
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${underlinedHeading}`}>Certifications</h2>
          {/*<div className="grid gap-4 sm:grid-cols-3">
            {certifications.slice(0, showAllCertifications ? certifications.length : 3).map((cert, index) => (
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index} 
                className="no-underline"
              >
                <Card className="bg-white/5 border-white/10 flex flex-row items-center p-4 hover:bg-white/10 transition-colors cursor-pointer">
                  <Image 
                    src={cert.icon} 
                    alt={cert.provider} 
                    width={40} 
                    height={40} 
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
          {certifications.length > 3 && (
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                className="w-full bg-white/10 text-white px-3 py-1 text-sm rounded-md hover:bg-white hover:text-black transition-colors"
              >
                {showAllCertifications ? (
                  <>
                    Show Less <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show More Certifications <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}*/}
          <p>Coming soon</p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 border-t border-white/10">
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${underlinedHeading}`}>Featured Projects</h2>
         {/* <div className="grid gap-4 sm:grid-cols-2">
            {projects.slice(0, showAllProjects ? projects.length : 2).map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base sm:text-lg font-bold text-white mb-1">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </Button>
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            Live Demo
                          </Button>
                        </Link>
                      )}
                      {project.dokumentasi && (
                        <Link href={project.dokumentasi} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            Dokumentasi
                          </Button>
                        </Link>
                      )}
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {projects.length > 2 && (
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="w-full bg-white/10 text-white px-3 py-1 text-sm rounded-md hover:bg-white hover:text-black transition-colors"
              >
                {showAllProjects ? (
                  <>
                    Show Less <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show More Projects <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}*/}
          <p>Coming soon</p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8 border-t border-white/10">
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${underlinedHeading}`}>Experience</h2>
          {/*<div className="grid gap-6">
            {experiences.slice(0, showAllExperience ? experiences.length : 2).map((exp, index) => (
              <div key={index} className="grid sm:grid-cols-[140px,1fr] gap-2">
                <div className="text-sm text-muted-foreground">{exp.year}</div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1">{exp.role}</h3>
                  <Link href={exp.companyUrl} target="_blank" rel="noopener noreferrer" 
                    className="text-sm text-muted-foreground hover:text-white transition-colors mb-1 inline-block">
                    {exp.company}
                  </Link>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          {experiences.length > 2 && (
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => setShowAllExperience(!showAllExperience)}
                className="w-full bg-white/10 text-white px-3 py-1 text-sm rounded-md hover:bg-white hover:text-black transition-colors"
              >
                {showAllExperience ? (
                  <>
                    Show Less <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show More Experience <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}*/}
          <p>Coming soon</p>
        </section>

        {/* Get in Touch Section */}
        <section id="contact" className="py-8 border-t border-white/10">
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${underlinedHeading}`}>Get In Touch</h2>
         {/* <div className="flex flex-col items-center gap-4">
            <p className="text-base text-white text-center max-w-xl">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="mailto:luqmanaldp@gmail.com">
                <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white hover:text-black transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/luqman-aldi/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white hover:text-black transition-colors">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/HengkerKucing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white hover:text-black transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>*/}
          <p>Coming soon</p>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aji Maulana
          </p>
          <nav className="mt-3">
            <ul className="flex justify-center space-x-4">
              {/* <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li> */}
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  )
}