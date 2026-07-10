import {Achievement, Contact, Cve, Experience, Footer, Hero, Navbar, Project, StarsCanvas} from "./components";

const App = () => {
    return (
        <div className="relative z-0 bg-primary">
            <Navbar/>
            <Hero/>
            <Experience/>
            <Project/>
            <Cve/>
            <Achievement/>
            <div className="relative z-0">
                <Contact/>
                <StarsCanvas/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
