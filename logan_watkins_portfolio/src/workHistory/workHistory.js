import React from 'react';
import './workHistory.css';

export default function WorkHistory() {
    return (
        <div>
            <div className='workHistory-header-div'>
                <h1 className='workHistory-intro-header'>Professional History</h1>
                <p class="workHistory-text">Software & Data Engineer for Wipro Ltd. (IT Consulting)</p>
                <p class="workHistory-text">2018 - Current</p>

                <div className="workHistory-sections-container">
                    <div className="workHistory-section">
                        <h2 className='workHistory-project-title'>Meta (Facebook)</h2>
                        <h3 className='workHistory-project-role'>Data Scientist and Data Engineer</h3>
                        <h3 className='workHistory-project-tech'>Python | Presto | RStudio | Google Sheets | Unidash</h3>
                        <h3 className='workHistory-project-tech'>Mar 2022 - Current</h3>
                        <ul className='workHistory-project-list'>
                            <li className='workHistory-project-list-item'>Optimized SQL data pipeline for prodops reliability team reporting resulting in weekly time savings of 2 hours by refactoring ETL pipeline code and reducing duplicate work</li>
                            <li className='workHistory-project-list-item'>Provideded live data to stakeholders and automated reporting by delivering over 50 dashboards and notebooks utilizing proprietry Unidash tool and presto notebooks</li>
                            <li className='workHistory-project-list-item'>Collaborated with Meta Data Engineers on 5 ETL data pipelinesused in prodops team metrics</li>
                            <li className='workHistory-project-list-item'>Advised leadership on remote vs onsite work performance, which led to 8% increase in team productivity, by performing statistical tests in RStudio</li>
                        </ul>
                    </div>
                    <div className="workHistory-section">
                        <h2 className='workHistory-project-title'>Meta (Facebook)</h2>
                        <h3 className='workHistory-project-role'>CROS, Crashes Reliability Oncall Specialist</h3>
                        <h3 className='workHistory-project-tech'>Java | Kotlin | Scuba | Logview</h3>
                        <h3 className='workHistory-project-tech'>July 2020 - Feb 2022</h3>
                        <ul className='workHistory-project-list'>
                            <li className='workHistory-project-list-item'>Shortened time to investigate crashes by avg. of 3.5 minutes by developing tool to display logs quicker</li>
                            <li className='workHistory-project-list-item'>Contributed to app release cycle improving 1 day by analyzing launch blocking crash trends to prioritize and consolidate important tasks for engineering teams.</li>
                            <li className='workHistory-project-list-item'>Created automated reporting on highest launch blocking tasks saving 1.5 hours a week during reporting</li>
                        </ul>
                    </div>
                    <div className="workHistory-section">
                        <h2 className='workHistory-project-title'>FedEx</h2>
                        <h3 className='workHistory-project-role'>Full Stack Software Engineer</h3>
                        <h3 className='workHistory-project-tech'>Java | Spring | JavaScript | SQL | Postman | Jira | Git</h3>
                        <h3 className='workHistory-project-tech'>Jan 2019 - June 2020</h3>
                        <ul className='workHistory-project-list'>
                            <li className='workHistory-project-list-item'>
                                Decreased order failure rate 4% by developing retry mechanism for dropped messages from middle layer</li>
                            <li className='workHistory-project-list-item'>
                                Reduced customer support staff complaints by 6%, by implementing consistent character validation across all order creation methods</li>
                            <li className='workHistory-project-list-item'>
                                Member of 3 person team that cleared out scrum board backlog of 11 user stories over 2 week period by planning and consolidating shared services where possible</li>
                        </ul>
                    </div>
                    <div className="workHistory-section">
                        <h2 className='workHistory-project-title'>CitiBank</h2>
                        <h3 className='workHistory-project-role'>Data Analyst</h3>
                        <h3 className='workHistory-project-tech'>Splunk | ServiceNow | Excel | Tableau</h3>
                        <h3 className='workHistory-project-tech'>Jun 2022 - Dec 2022</h3>
                        <ul className='workHistory-project-list'>
                            <li className='workHistory-project-list-item'>Increased non-prod environment availability by 6% DevOps schedule by identifying release window trends and optimizing the current schedule.</li>
                            <li className='workHistory-project-list-item'>Created dashboard of environment health and availability in order to allow for more data driven decisions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
