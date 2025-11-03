import React from 'react'
import PresentationCard from '@/app/components/ui/PresentationCard'

function About() {
    return (
        <section id="about" className="page-container mb-28">
            <h2>About Me</h2>

            <div className="flex flex-col gap-8">
                <PresentationCard
                    title="Carrier"
                    content="My technical expertise lies in Angular, which I use daily together with TypeScript and SCSS. I also have solid experience in SEO, UX design, and enjoy working with Figma to create user-friendly interfaces. In my free time, I expand my skill set by building personal projects with React, Next.js, and Tailwind CSS, always staying up to date with new technologies. Additionally, I’m passionate about 3D modeling and use Blender to bring creative ideas to life in three-dimensional form."
                />
                <PresentationCard
                    title="Knowledge"
                    content="I studied Computer Visualization and Design at the Hamm-Lippstadt University of Applied Sciences – a program that combines technology and creativity. During my studies, I designed user interfaces, developed my first websites, and gained experience with CAD software as well as topics like Augmented and Virtual Reality. After graduating, I began my career as a Frontend Developer in the e-commerce sector, where I still work today. I develop shop interfaces using Angular and Composable Storefront – a role that perfectly blends technical precision with creative design."
                />
                <PresentationCard
                    title="Interests"
                    content="I’m passionate about new technologies and love experimenting on the computer—whether coding or playing video games. Away from the screen, I enjoy cooking, staying active through fitness, and am a devoted fan of series and films. Creativity, technology, and curiosity drive me—both professionally and personally."
                />
            </div>
        </section>
    )
}

export default About
