import react, { useState, useEffect } from 'react'

import "../CSS/projects.css"
import "../CSS/queries.css"
import "../CSS/footer.css"

import projectImage from '../Images/pass-gen.png';
import employeeDashboardImage from '../Images/employee-dashboard.png';
import productPage from '../Images/product-page.png';


export default function Projects() {
    const [projects, setProjects] = useState([]); // Correct initialization

    useEffect(() => {
        // Correctly use setProjects to update the state
        setProjects([
            {
                id: 1,
                name: "Employee Tracker",
                languages: ['JavaScript', 'ExpressJS', 'SQL', 'node.js', 'Inquirer'], // Correctly use an array
                // languages: "JavaScript | ExpressJS | SQL | node.js | Inquirer", 
                description: "This program gives the user the ability to add, update, and delete users, roles, and departments",
                live_url: "",
                github_link: "https://github.com/mjlynch123/Employee_Tracker",
                image: "https://github.com/mjlynch123/Employee_Tracker/blob/main/Assets/Images/screenshot.png?raw=true",
                createdAt: "2023-05-11T21:36:00.000Z",
                updatedAt: "2023-05-11T21:36:00.000Z"
            },
            {
                id: 2,
                name: "Password Generator",
                languages: ['JavaScript', 'HTML', 'CSS'], // Correctly use an array
                description: "This program generates a random password based on user input",
                live_url: "https://codepen.io/mjlynch123/pen/vYrmrPx",
                github_link: "https://codepen.io/mjlynch123/pen/vYrmrPx",
                image: projectImage,
            },
            {
                id: 3,
                name: "Product Page",
                languages: ['JavaScript', 'HTML', 'CSS'], // Correctly use an array
                description: "Front end page for e-commerce website. Design and images by Frontend Mentor",
                live_url: "https://mjlynch123.github.io/Product_Page_FEM/",
                github_link: "https://github.com/mjlynch123/Product_Page_FEM",
                image: productPage,
            },
            {
                id: 4,
                name: "Employee Dashboard",
                languages: ['JavaScript', 'HTML', 'CSS'], // Correctly use an array
                description: "Front end dashboard for employee management",
                live_url: "https://mjlynch123.github.io/Employee_Dashboard/",
                github_link: "https://github.com/mjlynch123/Employee_Dashboard",
                image: employeeDashboardImage,
            },
        ]);
    }, []);
    return (
        <>
            <div className='content-container'>
                <div className='content'>
                    <h1>My Projects</h1>
                    <div className='card-container'>
                        {projects.map(project => (
                            <div className='card' key={project.id}> {/* Place key prop here */}
                                <div className='inner-card'>
                                    <div className='card-image'>
                                        <img src={project.image} alt={`${project.name} screenshot`} />
                                    </div>
                                    <div className='card-inner-content'>
                                        <h2>{project.name}</h2>
                                        <div className='languages'>
                                            {project.languages.map((language, index) => (
                                                <span key={index} className='language'>
                                                    {language}
                                                </span>
                                            ))}
                                        </div>
                                        <p className='description'>{project.description}</p>
                                        <div className='links'>
                                            <a href={project.github_link} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                                            {project.live_url && <a href={project.live_url} target="_blank" rel="noopener noreferrer" className='live-site-button'>Live Site</a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}