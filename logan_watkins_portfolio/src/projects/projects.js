import React from 'react';
import './projects.css';

export default function Projects() {
    return (
        <div>
            <div className='project-header-div'>
                <h1 className='project-intro-header'>Projects</h1>
                <div className="project-sections-container">
                    <div className="project-section">
                        <h2 className='project-project-title'>Bragg’s Law Angle Converter (iOS App)</h2>
                        <h3 className='project-project-tech'>Swift | XCode</h3>
                        <h3 className='project-project-tech'>
                            <a href="https://apps.apple.com/us/app/braggs-law-angle-converter/id1542785037">iOS Store</a>
                        </h3>
                        <ul className='project-project-list'>
                            <li className='project-project-list-item'>Quickened calculation time for technicians by avg. 7 minutes by developing custom utility app for XRay spectrometry technicians, to be used on company issued iPhone 11’s</li>
                            <li className='project-project-list-item'>Implemented MVC framework to organize app and to make easier for future extension of capabilities</li>
                        </ul>
                    </div>
                    <div className="project-section">
                        <h2 className='project-project-title'>Fullstack Account Management App (Web App)</h2>
                        <h3 className='project-project-tech'>Java | React | MySQL | Spring | Hibernate</h3>
                        <ul className='project-project-list'>
                            <li className='project-project-list-item'>Front End web components built with React</li>
                            <li className='project-project-list-item'>Back End services built with Java (Spring, Hibernate) and MySQL database</li>
                            <li className='project-project-list-item'>App allowed for simple CRUD operations on accounts with emails</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
