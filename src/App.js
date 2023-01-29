// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { NavigationBar } from "./components/NavigationBar";
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Project } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Education } from './components/Edu';




function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      


    </div>
  );
}

export default App;
