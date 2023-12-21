import { BrowserRouter } from "react-router-dom";

import {
  Profile,
  Achievement,
  Experience,
  // Education,
  Hero,
  Navbar,
  Tech,
  Project,
  StarsCanvas,
  Content,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          {/* <Content /> */}
          <Experience />
          {/* <Education /> */}
          <Project />
          <Achievement />
          <Tech />
          <div className="relative z-0">
            <Profile />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
