'use client'
import React, {useState} from 'react'
import ProjectCard from '@/app/components/ui/ProjectCard'
import {projects} from '@/app/data/data'
import Button from '@/app/components/ui/Button'
import {ProjectFilter, ProjectFilterCodes} from '@/app/models/project'
import Icon from '@/app/components/ui/Icon'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function Projects() {
    const [showAll, setShowAll] = useState(false)
    const [filter, setFilter] = useState<ProjectFilterCodes>('all')

    const techFilter: ProjectFilter[] = [
        {
            code: 'all',
            label: 'All'
        },
        {
            code: 'react',
            label: 'React'
        },
        {
            code: 'angular',
            label: 'Angular'
        },
        {
            code: 'tailwind',
            label: 'Tailwind'
        }
    ]

    const filteredProjects = projects.filter(project => project.techFilter.includes(filter))

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

    return (
        <section id="projects" className="page-container mb-28">
            <h2 className="text-2xl font-bold">Projects</h2>

            <div className="mb-12 w-full flex justify-end">
                <Select value={filter} onValueChange={value => setFilter(value as ProjectFilterCodes)}>
                    <SelectTrigger className="min-w-48">
                        <SelectValue placeholder="Filter by tech" />
                    </SelectTrigger>

                    <SelectContent className="bg-[var(--bg-gradient-end)] focus:bg-[var(--bg-gradient-end)]">
                        {techFilter.map(tech => (
                            <SelectItem
                                className="hover:bg-neutral-100 focus:bg-neutral-100"
                                key={tech.code}
                                value={tech.code}
                            >
                                {tech.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visibleProjects.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>


            {filteredProjects.length > 4 && (
                <div className="flex justify-center mt-8">
                    <Button variant='linkWithBorder' onClick={() => setShowAll(prev => !prev)}>
                        {showAll ? 'Show Less' : 'Show More'}
                    </Button>
                </div>
            )}

        </section>
    )
}

export default Projects
