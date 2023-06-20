import React from "react";
import './about.css';
export default function Home() {
    return (
        <div>
            <div className='about-header-div'>
                <h1 className='about-intro-header'>About Me</h1>
                <div class="about-me-bio">I have carried a passion for Computer Science and using creativity to solve problems throughout my whole life. 
                                                                                                                                                                                                                                                                                                                                                                    In high school I toured the state of Texas while competing in Computer Science competitions (which were all in Java at the time). 
                                                                                                                                                                                                                                                                                                                                                                    These competitions laid the groundwork for my interest and fascination with software engineering. In 2018 I graduated from the University of Texas at Austin
                                                                                                                                                                                                                                                                                                                                                                    with a Bachelor's Degree in Biology and a certficate in computer programming. After college I began work as a Software and Data Engineer for a IT consulting firm Wipro Ltd. Here I have been able to participate in a variety of projects for clients such as
                                                                                                                                                                                                                                                                                                                                                                    CitiBank, FedEx, and Meta (Facebook), which I expand upon further on the professional history section. In my freetime I play basketball, tennis, and am attempting to become a cinephile. As a lifelong learner, I am additionally constantly taking new courses and earning new certs. My current interests align more with fullstack development. Though from my most recent work assignment as a Data Engineer I have also been growing an affinity for writing queries/pipelines and building out dashboards. I am confident that my creative mindset, eagerness to learn, and dynamic approach to problem-solving would make me a valuable addition to any team and more than capable of tackling any challenges.
                </div>

                <div className="about-sections-container">
                    <div className="about-section">
                        <h2>Education</h2>
                        <ul>
                            <li>
                                University of Texas at Austin, Graduated 2018
                            </li>
                            <li>
                                <a className="certLink" href="https://drive.google.com/file/d/1IfJx8KBbjYKP6xaBHQfgJaVLNfhWp2VV/view?usp=sharing">Certficate of Computer Programming</a>
                            </li>
                        </ul>
                    </div>
                    <div className="about-section">

                        <h2>Certifications</h2>
                        <ul>
                            <li><a className="certLink" href="https://drive.google.com/file/d/1IfJx8KBbjYKP6xaBHQfgJaVLNfhWp2VV/view?usp=sharing"></a></li>
                            <li><a className="certLink" href="https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-02c3b819fa">AlgoExpert (Algorithmic Problem Solving)</a></li>
                            <li><a className="certLink" href="https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-58d72aff04">SystemExpert (Distributed Systems Design)</a></li>
                            <li><a className="certLink" href="https://certificate.algoexpert.io/ProgrammingExpert%20Certificate%20PE-09566c36b4">ProgrammingExpert (Python and Go)</a></li>
                            <li><a className="certLink" href="https://certificate.algoexpert.io/FE-299ea506bb">FrontEndExpert (HTML, CSS, JS, React)</a></li>
                            <li><a className="certLink" href="https://www.coursera.org/account/accomplishments/specialization/certificate/RHRQ8DAYKKWT">Google Data Analytics (Data Analysis, SQL)</a></li>
                            <li><a className="certLink" href="https://www.coursera.org/account/accomplishments/specialization/certificate/KSKBT3JFVWTB">Google Business Intelligence (BI Planning, ETL Pipeline, Dashboards)</a></li>
                        </ul>
                    </div>
                    <div className="about-section">

                        <h2>Technical Skills</h2>


                        <ul>
                            <li>Front End: React, Javascript, CSS, HTML</li>
                            <li>Back End: Java, Python, Go, MySQL, Presto</li>
                            <li>Testing/Deployment: JUnit, pytest</li>
                            <li>Developer Tools: Git, Postman, VSCode, IntelliJ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
