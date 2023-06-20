import './App.css';
import Home from './home/home';
import About from './about/about';
import WorkHistory from './workHistory/workHistory';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Projects from './projects/projects';
import Contact from './contactMe/contact';

function App() {
    return (
        <div className="App">
            <Home></Home>
            <About></About>
            <WorkHistory></WorkHistory>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
}

export default App;
