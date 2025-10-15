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
        techIcons: ['html', 'css', 'javascript', 'separator', 'react'],
        techFilter: ['all', 'javascript', 'react'],
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
        techIcons: ['html', 'css', 'typescript', 'separator','angular'],
        techFilter: ['all', 'typescript', 'angular'],
    },
    {
        siteUrl: 'https://denrisk.github.io/fm-notes/',
        codeUrl: 'https://github.com/DenRisk/fm-notes',
        title: 'Note-taking web app',
        description: [
            'This project was created as part of a Frontend Mentor Challenge. The goal was to build a functional and responsive note-taking web app based on a provided design.',
            'I used this project as an opportunity to specifically practice implementing CRUD functionality — allowing users to create, read, update, and delete notes — while also adding features like archiving, tagging, searching, and theme customization.',
            'The focus was on creating a clean and accessible user interface with smooth keyboard navigation, responsive layouts, and clear hover and focus states for all interactive elements.',
        ],
        image: {
            src: '/images/projects/NoteTakingApp.jpg',
            alt: 'Note-taking web app',
        },
        techIcons: ['html', 'css', 'typescript', 'separator','react'],
        techFilter: ['all', 'typescript', 'react'],
    },
    {
        siteUrl: 'https://denrisk.github.io/skilled/',
        codeUrl: 'https://github.com/DenRisk/skilled',
        title: 'Skilled e-learning landing page',
        description: [
            'This project was created as part of a Frontend Mentor challenge. The goal was to build a fully responsive landing page that closely matches the provided design.',
            'The main focus was on creating a pixel-perfect layout that adapts seamlessly to different screen sizes and ensuring consistent hover and focus states for all interactive elements.',
            'Through this project, I practiced translating a static design into clean, semantic code and refined my approach to responsive layouts and accessibility.',
        ],
        image: {
            src: '/images/projects/Skilled.jpg',
            alt: 'Skilled e-learning landing page',
        },
        techIcons: ['html', 'sass', 'typescript', 'separator','react'],
        techFilter: ['all', 'typescript', 'react', 'scss'],
    },
    {
        siteUrl: 'https://denrisk.github.io/workit/',
        codeUrl: 'https://github.com/DenRisk/workit',
        title: 'Workit Landing Page',
        description: [
            'This project was developed as part of a Frontend Mentor challenge focused on building a responsive and visually accurate landing page. The task was to replicate the provided design as closely as possible while ensuring a smooth user experience across all devices.',
            'Key aspects of this project included crafting a flexible layout, implementing interactive hover states, and maintaining clean, accessible code.',
            'I also used this challenge to refine my CSS architecture and improve my workflow when converting Figma designs into functional, responsive interfaces.',
        ],
        image: {
            src: '/images/projects/Workit.jpg',
            alt: 'Workit Landing Page',
        },
        techIcons: ['html', 'sass', 'typescript', 'separator','react'],
        techFilter: ['all', 'typescript', 'react', 'scss'],
    },
    {
        siteUrl: 'https://denrisk.github.io/fm-character-counter/',
        codeUrl: 'https://github.com/DenRisk/fm-character-counter',
        title: 'Character Counter',
        description: [
            'This project was created as part of a Frontend Mentor challenge. The goal was to build a responsive and accessible character counter app that provides detailed text analysis while matching the given design as closely as possible.',
            'The application allows users to count characters, words, and sentences, set custom character limits, and view reading time and letter density. It also includes theme selection, keyboard navigation, and clear warning states when limits are exceeded.',
            'Through this project, I focused on implementing accurate text processing logic, improving accessibility, and refining my approach to responsive UI design and state management.',
        ],
        image: {
            src: '/images/projects/CharacterCounter.jpg',
            alt: 'Character Counter',
        },
        techIcons: ['html', 'css', 'typescript', 'separator','angular'],
        techFilter: ['all', 'typescript', 'angular'],
    },
    {
        siteUrl: 'https://denrisk.github.io/fm-conference-ticket-generator/',
        codeUrl: 'https://github.com/DenRisk/fm-conference-ticket-generator',
        title: 'Conference Ticket Generator',
        description: [
            'This project was created as part of a Frontend Mentor challenge. The objective was to build an interactive and accessible conference ticket generator that closely matches the provided design.',
            'Users can complete a form with their details, receive real-time validation feedback, and generate a personalized ticket upon successful submission.',
            'Through this project, I focused on implementing accurate text processing logic and refining my approach to responsive UI design and state management.',
        ],
        image: {
            src: '/images/projects/ConferenceTicketGenerator.jpg',
            alt: 'Conference Ticket Generator',
        },
        techIcons: ['html', 'css', 'typescript', 'separator', 'react', 'tailwind'],
        techFilter: ['all', 'typescript', 'react', 'tailwind'],
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
