import './App.css';
import Presentation from './components/Presentation';
import Studies from './components/Studies';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Additionalinformation from './components/AdditionalInformation';

function App() {
  return (
    <div className="App">
      <Presentation />
      <Studies />
      <WorkExperience />
      <Projects />
      <Additionalinformation />
    </div>
  );
}

export default App;
