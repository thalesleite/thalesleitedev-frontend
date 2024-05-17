import "../styles/Menu.css"

import { Link } from "react-router-dom"

export default function Menu() {
  const goToSection = (section) => {
    console.log(section)
    window.location.href = `/#${section}`
  }

  return (
    <section className="menu">
      <Link
        className="menu-section"
        to="#about"
        onClick={() => goToSection("about")}
      >
        <div className="pixel"></div>
        About
      </Link>

      <Link
        className="menu-section"
        to="#projects"
        onClick={() => goToSection("projects")}
      >
        <div className="pixel"></div>
        Projects
      </Link>

      <Link className="menu-section" to="/lattes">
        <div className="pixel"></div>
        Lattes
      </Link>

      <Link
        className="menu-section"
        to="#contact"
        onClick={() => goToSection("contact")}
      >
        <div className="pixel"></div>
        Contact
      </Link>
    </section>
  )
}
