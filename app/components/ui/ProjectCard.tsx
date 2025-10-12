import React from 'react'
import Image from 'next/image'
import { Project } from '@/app/models/project'
import Icon from './Icon'

function ProjectCard({ title, description, image, technologies, url }: Project) {
  return (
    <a
      className="group card-bg border border-border rounded-3xl overflow-hidden transition-transform hover:border-neutral-40"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      type="card"
    >
      <div className="w-full h-auto overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={300}
          className="aspect-[2/1] object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col p-8 gap-4">
        <h4>{title}</h4>
        {description.map((paragraph, i) => (
          <p className="text-sm" key={i}>
            {paragraph}
          </p>
        ))}
        <div className="flex gap-4 py-2">
          {technologies.map(tech => (
            <Icon key={tech} id={tech} size={28} />
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
