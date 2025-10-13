import {Project} from '@/app/models/project'
import {Contact} from '@/app/models/contact'

// Sample Projects Data
export const projects: Project[] = [
    {
        siteUrl: 'https://denrisk.github.io/fm-tech-book-club/',
        codeUrl: 'https://github.com/DenRisk/fm-tech-book-club',
        title: 'Tech Book Club',
        description: [
            'This project was created as part of a Frontend Mentor Challenge. The goal was to build a modern, responsive landing page for a fictional Tech Book Club based on a given design.',
            'The focus was on achieving a pixel-perfect layout, full responsiveness across devices, and proper hover and focus states for all interactive elements.',
            'I also used this project as an opportunity to experiment with Framer Motion and improve my understanding of animations and microinteractions. By adding smooth transitions and subtle motion effects, I aimed to make the user experience more dynamic and engaging.',
        ],
        image: {src: '/images/projects/TechBookPreview.jpg', alt: 'Tech Book Club'},
        technologies: ['html', 'css', 'javascript', 'separator', 'react'],
    },
    {
        siteUrl: 'https://denrisk.github.io/dessert-list-with-signals/',
        codeUrl: 'https://github.com/DenRisk/dessert-list-with-signals',
        title: 'Product List with Cart',
        description: [
            'This project was created as part of a Frontend Mentor Challenge. The goal was to build an interactive product list with a functional shopping cart. The goal was to create a dynamic and responsive interface where users can add and remove products, adjust quantities, confirm orders, and reset the cart.',
            'The focus was on managing UI state reactively across multiple components and providing a clear and intuitive user experience.',
            'Additionally, I used this project to explore the latest version of Angular and Signals, enhancing my skills in efficient state management and reactive user interactions.',
        ],
        image: {
            src: '/images/projects/ProductListWithCartPreview.jpg',
            alt: 'Product List with Cart with Angular',
        },
        technologies: ['html', 'css', 'typescript', 'separator','angular'],
    },
]

// Contact Information
export const contact: Contact = {
    email: 'Denis.R.95@hotmail.de',
    social: [
        {id: 'github', url: 'https://github.com/DenRisk'},
        {id: 'linkedin', url: 'https://linkedin.com/in/denis-niklas-risken-692b84214'},
    ],
}

// Legal information
export const legalInformationNav = {
    items: [
        {title: 'Impressum', url: '/impressum'},
        {title: 'Privacy Policy', url: '/privacy-policy'},
    ],
}
