
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/ContactMe/Contact';
import Profile from './components/Home/Profile';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>

    </div>
  );
}

export default App;
