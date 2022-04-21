import './App.css';
import Presentation from './components/Presentation';
import Studies from './components/Studies';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Additionalinformation from './components/AdditionalInformation';
import Archivements from './components/Archivements';
import Courses from './components/Courses';

function App() {
  return (
    <div className="App">
      <Presentation />
      <Studies />
      <WorkExperience />
      <Courses />
      <Projects />
      <Additionalinformation />
      <Archivements />
      <br></br>
    </div>
  );
}

export default App;
