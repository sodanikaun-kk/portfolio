import About from './Component/About';
import Hero from './Component/Hero'
import AnimatedTitles from'./Component/AnimatedTitles'
import Navbar from './Component/Navbar';
import Skills from './Component/Skills';
import Experience from "./Component/Experience";
import Portfolio from "./Component/Portfolio";
import Testimonails  from './Component/Testimonails';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './index.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimatedTitles />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Testimonails />
      <Contact />
      <Footer />
    </>
  )
};

export default App