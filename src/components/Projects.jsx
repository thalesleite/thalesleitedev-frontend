import "../styles/Projects.css"

import Menu from "./Menu"
import Footer from "./Footer"
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Projects() {
  return (
    <>
      <Menu />

      <section className="container">
        <section className="projects">
          <h1>
            Coming soon... <FontAwesomeIcon icon={faProjectDiagram} />
          </h1>
        </section>
      </section>
      <Footer />
    </>
  )
}
