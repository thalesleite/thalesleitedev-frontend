import "../styles/Projects.css"

import imgHeadstart from "../assets/projects/headstartcourses.png"
import imgThemotorbikedoctor from "../assets/projects/themotorbikedoctor.png"

import { Link } from "react-router-dom"
import Menu from "./Menu"
import Footer from "./Footer"

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "HeadStart Courses",
      textUrl: "headstartcourses.ie",
      url: "https://www.headstartcourses.ie",
      img: imgHeadstart,
    },
    {
      id: 2,
      name: "The MotorBike Doctor",
      textUrl: "themotorbikedoctor.ie",
      url: "https://themotorbikedoctor.ie",
      img: imgThemotorbikedoctor,
    },
  ]

  return (
    <>
      <Menu />
      <section className="container">
        <section className="projects">
          <h1>My Projects</h1>
          {projects &&
            projects.map((project) => {
              return (
                <div className="project" key={project.id}>
                  <h2>
                    {project.name} -{" "}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.textUrl}
                    </a>
                  </h2>
                  <div className="folder">
                    <Link
                      to={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={project.img} alt={project.name} />
                    </Link>
                  </div>
                </div>
              )
            })}
        </section>
      </section>
      <Footer />
    </>
  )
}
