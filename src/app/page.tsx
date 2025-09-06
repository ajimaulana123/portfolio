"use client";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState, useMemo } from 'react';
import { motion } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;
const PROJECTS_PER_PAGE = 4;
const WORK_PER_PAGE = 4;

export default function Page() {
  const [projectFilter, setProjectFilter] = useState('All');
  const [workFilter, setWorkFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);
  const [visibleWork, setVisibleWork] = useState(WORK_PER_PAGE);

  const filteredProjects = useMemo(() => {
    return DATA.projects.filter(project => {
      if (projectFilter === 'All') return true;
      return project.type === projectFilter;
    });
  }, [projectFilter]);

  const filteredWork = useMemo(() => {
    return DATA.work.filter(w => {
      if (workFilter === 'All') {
        return true;
      }
      if (workFilter === 'Lainnya') {
        return w.company !== 'Freelance' && w.company !== 'Bangkit Academy';
      }
      return w.company === workFilter;
    });
  }, [workFilter]);

  const projectsToShow = useMemo(() => {
    return filteredProjects.slice(0, visibleProjects);
  }, [filteredProjects, visibleProjects]);
  
  const workToShow = useMemo(() => {
    return filteredWork.slice(0, visibleWork);
  }, [filteredWork, visibleWork]);

  const handleLoadMoreProjects = () => {
    setVisibleProjects(prev => prev + PROJECTS_PER_PAGE);
  };

  const handleLoadMoreWork = () => {
    setVisibleWork(prev => prev + WORK_PER_PAGE);
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: BLUR_FADE_DELAY }}
                dangerouslySetInnerHTML={{ __html: DATA.description }}
                className="max-w-[600px] md:text-xl"
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 4 }}
        >
          <Markdown
            className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
            components={{
              mark: ({ children }) => <span className="highlight highlight-animated">{children}</span>,
            }}
          >
            {DATA.summary}
          </Markdown>
        </motion.div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <div className="flex justify-center space-x-4">
            <button onClick={() => { setWorkFilter('All'); setVisibleWork(WORK_PER_PAGE); }} className={`px-4 py-2 rounded-md ${workFilter === 'All' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>All</button>
            <button onClick={() => { setWorkFilter('Freelance'); setVisibleWork(WORK_PER_PAGE); }} className={`px-4 py-2 rounded-md ${workFilter === 'Freelance' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>Freelance</button>
            <button onClick={() => { setWorkFilter('Bangkit Academy'); setVisibleWork(WORK_PER_PAGE); }} className={`px-4 py-2 rounded-md ${workFilter === 'Bangkit Academy' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>Bangkit Academy</button>
            <button onClick={() => { setWorkFilter('Lainnya'); setVisibleWork(WORK_PER_PAGE); }} className={`px-4 py-2 rounded-md ${workFilter === 'Lainnya' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>Lainnya</button>
          </div>
          {workToShow.map((work, id) => (
            <BlurFade
              key={work.title}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.title}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
          {visibleWork < filteredWork.length && (
            <div className="flex justify-center mt-4">
              <Button onClick={handleLoadMoreWork}>Tampilkan Lebih Banyak</Button>
            </div>
          )}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Proyek Saya
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Lihat Karya Terbaru Saya
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Saya telah mengerjakan berbagai proyek, mulai dari website sederhana
                  hingga aplikasi web yang kompleks. Berikut beberapa proyek favorit saya.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex justify-center space-x-4">
            <button onClick={() => { setProjectFilter('All'); setVisibleProjects(PROJECTS_PER_PAGE); }} className={`px-4 py-2 rounded-md ${projectFilter === 'All' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>All</button>
            <button onClick={() => { setProjectFilter('n8n'); setVisibleProjects(PROJECTS_PER_PAGE); }} className={`px-4 py-2 rounded-md ${projectFilter === 'n8n' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>n8n</button>
            <button onClick={() => { setProjectFilter('Machine Learning'); setVisibleProjects(PROJECTS_PER_PAGE); }} className={`px-4 py-2 rounded-md ${projectFilter === 'Machine Learning' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>Machine Learning</button>
            <button onClick={() => { setProjectFilter('Web'); setVisibleProjects(PROJECTS_PER_PAGE); }} className={`px-4 py-2 rounded-md ${projectFilter === 'Web' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>Web</button>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {projectsToShow.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
          {visibleProjects < filteredProjects.length && (
            <div className="flex justify-center">
              <Button onClick={handleLoadMoreProjects}>Tampilkan Lebih Banyak</Button>
            </div>
          )}
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Kontak
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Hubungi Saya
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ingin mengobrol? Kirim pesan langsung{" "}
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aji658911@gmail.com"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  melalui gmail
                </Link>{""}
                dan saya akan meresponnya segera. Mohon maaf, saya tidak menanggapi
                pesan promosi.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
