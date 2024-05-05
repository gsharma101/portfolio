import React from 'react'
import "./sass/main.scss";
import { Navbar } from './components';
import { Header, About, Footer, Experience, Skills, Education, Learning, Projects } from './containers';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Learning />
            <Projects />
            <Footer />
        </div>
    )
}

export default App
