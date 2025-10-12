import React from 'react'
import ProjectCard from '@/app/components/ui/ProjectCard'
import { projects } from '@/app/data/data'

function Projects() {
  return (
    <section id="projects" className="page-container mb-28">
      <h2>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
