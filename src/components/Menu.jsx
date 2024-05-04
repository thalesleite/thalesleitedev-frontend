import "../styles/Menu.css"

import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Menu() {
  const location = useLocation()

  return (
    <section className="menu">
      <div>
        <div
          className={`pixel ${location.pathname === "/about" ? "bg-gray" : ""}`}
        ></div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <div
          className={`pixel ${
            location.pathname === "/lattes" ? "bg-white" : ""
          }`}
        ></div>
        <Link to="/lattes">Lattes</Link>
      </div>
      <div>
        <div
          className={`pixel ${
            location.pathname === "/contact" ? "bg-gray" : ""
          }`}
        ></div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <div
          className={`pixel ${
            location.pathname === "/projects" ? "bg-white" : ""
          }`}
        ></div>
        <Link to="/projects">Projects</Link>
      </div>
    </section>
  )
}
