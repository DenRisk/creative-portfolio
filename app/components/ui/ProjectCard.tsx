import React from 'react'
import Image from 'next/image'
import {Project} from '@/app/models/project'
import Icon from './Icon'
import ButtonLink from '@/app/components/ui/ButtonLink'

function ProjectCard({ title, description, image, techIcons, siteUrl, codeUrl }: Project) {
    return (
        <div className="project flex flex-col card-bg border border-neutral-80 rounded-3xl overflow-hidden">
            <div className="w-full h-auto overflow-hidden">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={300}
                    className="aspect-[2/1] object-cover w-full h-full transform transition-transform duration-500 object-top"
                />
            </div>

            <div className="flex flex-col p-8 gap-8 grow">
                <div className="flex flex-col gap-4">
                    <h3 className="mb-0">{title}</h3>
                    {description.map((paragraph, i) => (
                        <p className="text-sm" key={i}>
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="flex flex-col gap-8 mt-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <ButtonLink variant='primary' href={siteUrl}>
                            Live Site
                        </ButtonLink>
                        {codeUrl && (
                            <ButtonLink variant='secondary' href={codeUrl}>
                                View Code
                            </ButtonLink>
                        )}
                    </div>

                    <div className="flex gap-4 text-neutral-30 flex-wrap">
                        {techIcons.map((tech, index) =>
                            tech === 'separator' ? (
                                <div key={index} className="mx-2 h-full w-0.5 bg-neutral-30" />
                            ) : (
                                <Icon key={index} id={tech} size={20} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
