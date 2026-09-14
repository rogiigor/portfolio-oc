import kasa from './../assets/kasa.png'
import sophieBluel from './../assets/sophieBluel.png'
import booki from './../assets/booki.png'
import simonSays from './../assets/simonSays.png'
import ninaCarducci from './../assets/ninaCarducci.png'
import monVieuxGrimoire from './../assets/monVieuxGrimoire.jpg'


export const projectsData = [
    {
        title: 'Kasa',
        name: 'Create a Property Rental Web Application with React',
        description: ['Use React and React Router to implement the frontend of an application to create a modern and responsive user experience.',
            'The project will focus exclusively on frontend development, based on the provided mockups and using simulated data extracted from a JSON file',
            'Use React Router to configure how users can navigate between the various pages of the application.'],
        skills: ['React', 'Sass', 'CSS Animation'],
        cover: kasa,
        category: 'Frontend & Layout',
        liveSite: 'https://rogiigor.github.io/kasa-openclassrooms/',
        gitHubRepository: 'https://github.com/rogiigor/kasa-openclassrooms'
    },
    {
        title: 'Booki',
        name: 'Turn Mock-ups Into a Web Page with HTML & CSS',
        description: ['Main assignment was be to integrate the website’s responsive interface.', 
            'It was provided with Figma mockups for mobile, tablet, and desktop screens, as well as images.',
            'Had to write your own HTML and CSS code, rather than rely on the Figma code tool.'
        ],
        skills: ['HTML5', 'CSS3', 'Figma', 'Responsive Design'],
        cover: booki,
        category: 'Frontend & Layout',
        liveSite: 'https://rogiigor.github.io/Booki-Marseille/',
        gitHubRepository: 'https://github.com/rogiigor/Booki-Marseille'
    },
    {
        title: 'Sophie Bluel',
        name: 'Create a Dynamic Web Page With JavaScript',
        description: ["Work on the website’s front-end, where you’ll showcase the interior designer’s work, using the provided HTML code.", "This involved managing user events and manipulating DOM elements with JavaScript.",
            "Project was also to create a login page for the website administrator and a modal window for uploading new media."],
        skills: ['JavaScript','DOM manipulation','Bearer token','Modal','Fetch API'],
        cover: sophieBluel,
        category: 'Dynamic APIs',
        gitHubRepository: 'https://github.com/rogiigor/Sophie-Bluel-OpenClassrooms'
    },
    {
        title: 'Simon Says',
        name: 'Game-Building Project',
        description: ['Test the ability to use HTML, CSS, and JavaScript to create dynamic web page that matches design.',
            'Given starter source code complete game and implement front end.',
            'Working on game algorithm and making it work for complete solution.'
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'Game implementation'],
        cover: simonSays,
        category: 'Dynamic APIs',
        liveSite: 'https://rogiigor.github.io/simon-says/',
        gitHubRepository: 'https://github.com/rogiigor/simon-says'
    },
    {
        title: 'Nina Carducci',
        name: "Debug and Optimize a Photographer's Website",
        description: ["Identify any loading and SEO problems.",
            "Lighthouse and Wave are tools used to evaluate the website’s current performance and accessibility",
            "Enhanced the website’s performance and accessibility to improve search engine optimization"
        ],
        skills: ['SEO', 'Accessibility', 'Debug web site', 'Optimize web site'],
        cover: ninaCarducci,
        category: 'Performance & Backend',
        liveSite: 'https://rogiigor.github.io/Nina-Carducci-OpenClassrooms/',
        gitHubRepository: 'https://github.com/rogiigor/Nina-Carducci-OpenClassrooms'
    },
    {
        title: 'Mon Vieux Grimoire',
        name: 'Develop the back-end of a book rating website',
        description: ['Involved developing the back-end of a book rating website',
            'Create a server with Express and connect it to a MongoDB database.', 
            'Setting up the server structure and managing communication between the server and database'
        ],
        skills: ['NodeJs', 'Express','MongoDB', 'Mongoose'],
        cover: monVieuxGrimoire,
        category: 'Performance & Backend',
        gitHubRepository: 'https://github.com/rogiigor/my-old-grimoire-oc'
    }
]