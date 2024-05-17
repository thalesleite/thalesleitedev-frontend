import "./styles/App.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Header />
      <section className="container">
        <About />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
