import kasa from './../assets/kasa.png'
import sophieBluel from './../assets/sophieBluel.png'

export const projectsData = [
    {
        title: 'Kasa',
        name: 'Create a Property Rental Web Application with React',
        description: ['Use React and React Router to implement the frontend of an application to create a modern and responsive user experience.',
            'The project will focus exclusively on frontend development, based on the provided mockups and using simulated data extracted from a JSON file',
            'Use React Router to configure how users can navigate between the various pages of the application.'],
        skills: ['React', 'Sass', 'CSS Animation'],
        cover: kasa 
    },
    {
        title: 'Sophie Bluel',
        name: 'Create a Dynamic Web Page With JavaScript',
        description: ["Work on the website’s front-end, where you’ll showcase the interior designer’s work, using the provided HTML code.", "This involved managing user events and manipulating DOM elements with JavaScript.",
            "Project was also to create a login page for the website administrator and a modal window for uploading new media."],
        skills: ['JavaScript','DOM manipulation','Bearer token','Modal','Fetch API'],
        cover: sophieBluel
    }
]