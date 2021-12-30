
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/ContactMe/Contact';
import Footer from './components/Home/Footer/Footer';
import Profile from './components/Home/Profile';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
