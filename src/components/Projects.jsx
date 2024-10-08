import "../styles/Projects.css"

import imgHeadstart from "../assets/projects/headstartcourses.png"
import imgThemotorbikedoctor from "../assets/projects/themotorbikedoctor.png"
import imgKaico from "../assets/projects/kaico.png"

import { Link } from "react-router-dom"

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
    {
      id: 3,
      name: "Kaico Ideias",
      textUrl: "kaico.ie",
      url: "https://kaico.ie/",
      img: imgKaico,
    },
  ]

  return (
    <>
      <section className="projects" id="projects">
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
    </>
  )
}
