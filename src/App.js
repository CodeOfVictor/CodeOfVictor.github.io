import './App.css';
import Presentation from './components/Presentation';
import Studies from './components/Studies';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Additionalinformation from './components/AdditionalInformation';
import Achievements from './components/Achievements';
import Courses from './components/Courses';
import NavbarWeb from './components/NavbarWeb';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <br></br><br></br>
      <NavbarWeb />
      <Presentation />
      <Studies />
      <WorkExperience />
      <Achievements />
      <Projects />
      <Additionalinformation />
      <Courses />
      <br></br>
      <Footer />
      <br></br>
    </div>
  );
}

export default App;
