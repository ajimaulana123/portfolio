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

  type Certification = {
    title: string;
    provider: string;
    icon: string;
    url: string;
  };

  type Project = {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo?: string; // demo is optional
    dokumentasi?: string; // dokumentasi is optional
  };

  type Experience = {
    year: string;
    role: string;
    company: string;
    description: string;
    companyUrl: string;
  };


  const certifications: Certification[] = [
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      provider: "Dicoding Indonesia",
      icon: "/img/dicoding.png",
      url: "https://www.dicoding.com/certificates/NVP7Q27G4ZR0"
    },
    {
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      provider: "Dicoding Indonesia",
      icon: "/img/dicoding.png",
      url: "https://www.dicoding.com/certificates/1RXYL8QYQPVM"
    },
    {
      title: "Belajar Dasar Git dengan GitHub",
      provider: "Dicoding Indonesia",
      icon: "/img/dicoding.png",
      url: "https://www.dicoding.com/certificates/81P2VM38YPOY"
    },
    {
      title: "Belajar Analisis Data dengan Python",
      provider: "Dicoding Indonesia",
      icon: "/img/dicoding.png",
      url: "https://www.dicoding.com/certificates/6RPNY6G89Z2M"
    },
    {
      title: "System Administration and IT Infrastructure Services",
      provider: "Coursera",
      icon: "/img/coursera.png",
      url: "https://www.coursera.org/account/accomplishments/verify/EFELCDZETFHS"
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      provider: "Coursera",
      icon: "/img/coursera.png",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/6LVVPJCAZP7B"
    },


  ];

  const projects: Project[] = [
     {
      title: "Meida Editor",
      description: "Aplikasi berbasis web untuk memproses berbagai jenis media.",
      tech: ["Next.Js 14", "Shadcn UI"],
      github: "https://github.com/ajimaulana123/media-editor",
      demo: "https://media-editor-bay.vercel.app/"
    },
    {
      title: "Indovel",
      description: "Indovel adalah start-up yang berjalan untuk menyediakan lapak bagi siapapun yang ingin menjual novel. Kami hadir karena kurangnya minat baca pada remaja sekarang",
      tech: ["Boostrapt"],
      github: "https://github.com/ajimaulana123/Indovel",
      demo: "https://rickyricko302.github.io/Indovel/"
    },
    {
      title: "Analaisi Dataset Bike Sharing dengan Python",
      description: "Menganalisis data pada Bike Sharing Dataset dengan tujuan untuk memahami berapa banyak dan sedikit penyewaan sepeda didasarkan pada waktu dan musim.",
      tech: ["Python", "numpy", "pandas"],
      github: "https://github.com/ajimaulana123/bike-sharing-data-analis",
      demo: "https://8f88lbtrdjjbfu7fmp8pgh.streamlit.app/"
    },
    {
      title: "EsTeh",
      description: "Jasa pembuatan web EsTeh",
      tech: ["Next.Js"],
      github: "https://github.com/ajimaulana123/estech",
      demo: "https://estech.vercel.app/"
    },
    {
      title: "API Blind Code",
      description: "Open API komunitas Blind Code",
      tech: ["Express Js", "MySQL"],
      github: "https://github.com/ajimaulana123/api-blind-code"
    },
    {
      title: "HMJ MI",
      description: "Memperkenalkan dan mengorganisir berbagai kegiatan serta informasi penting bagi mahasiswa jurusan Manajemen Informatika",
      tech: ["Bootstrapt"],
      github: "https://github.com/ajimaulana123/HMJ-MI-v2",
      demo: "https://tamakuz.github.io/HMJ-MI-Project/"
    },
    {
      title: "Blind Code",
      description: "Mengembangkan pengetahuan kita terkait Frontend Development",
      tech: ["Html", "CSS", "Js"],
      github: "https://github.com/ajimaulana123/blind-code-web-profile",
      demo: "https://mancode77.github.io/frontend-dev-portofolio/"
    },
    {
      title: "Akreditasi MI",
      description: "Menyediakan platform yang efisien dalam pengelolaan data akreditasi untuk Jurusan Manajemen Informatika",
      tech: ["Express Js", "React Js"],
      github: "https://github.com/ajimaulana123/akreditasi-mi",
      demo: "https://akreditasi-6c3jsmx6f-tamakuz.vercel.app/"
    },
    {
      title: "HOFE",
      description: "Aplikasi deteksi Hoax artikel",
      tech: ["Tensorflow", "Google Cloud", "Kotlin"],
      github: "https://github.com/ajimaulana123/HOFE-hoax-detection-for-everyone",
    },
    {
      title: "HOFE Website",
      description: "HOFE Website adalah sebuah aplikasi yang dirancang untuk mendeteksi hoax pada artikel berbasis teks dan url",
      tech: ["Astro"],
      github: "https://github.com/ajimaulana123/official-HOFE-website,
      demo: "https://official-hofe-website.vercel.app",
    },
    {
      title: "Simple Microservice Architercture",
      description: "Membangun dan mengelola beberapa microservices sederhana menggunakan Docker dan Nginx sebagai reverse proxy",
      tech: ["Docker", "Nginx", "Express Js"],
      github: "https://github.com/ajimaulana123/microservice-be",
    },
  ]

  const experiences: Experience[] = [
    {
      year: "2024",
      role: "Machine Learning path (MSIB)",
      company: "Bangkit Academy",
      description: "Analisis data, Membuat model, Mendeploy model",
      companyUrl: "https://grow.google/intl/id_id/bangkit/"
    },
    {
      year: "2024",
      role: "JuaraGCP Participant",
      company: "Google Cloud Skills Boost",
      description: "Event AI",
      companyUrl: "https://www.cloudskillsboost.google/"
    },
    {
      year: "2024",
      role: "Cloud Computing learning path (MSIB)",
      company: "Bangkit Academy",
      description: "Mendeploy API dengan layanan Google Cloud",
      companyUrl: "https://grow.google/intl/id_id/bangkit/"
    },
    {
      year: "2023 - 2024",
      role: "Fullstack Web Dev",
      company: "Politama",
      description: "Membuat Web Akreditasi MI",
      companyUrl: "politama.ac.id"
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
            {["Laravel", "Next.Js", "Tensorflow", "Docker", "Linux"].map((skill) => (
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
          <div className="grid gap-4 sm:grid-cols-3">
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
          )}
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 border-t border-white/10">
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${underlinedHeading}`}>Featured Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
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
          )}
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8 border-t border-white/10">
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${underlinedHeading}`}>Experience</h2>
          <div className="grid gap-6">
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
          )}
        </section>

        {/* Get in Touch Section */}
        <section id="contact" className="py-8 border-t border-white/10">
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${underlinedHeading}`}>Get In Touch</h2>
          <div className="flex flex-col items-center gap-4">
            <p className="text-base text-white text-center max-w-xl">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="mailto:aji658911@gmail.com">
                <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white hover:text-black transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/aji-maulana-0bb20921b/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white hover:text-black transition-colors">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/ajimaulana094@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white hover:text-black transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aji Maulana
          </p>
          <nav className="mt-3">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  )
}
