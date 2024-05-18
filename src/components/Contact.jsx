import "../styles/Contact.css"

import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h1>Contact Me</h1>

        <p>
          <b>Phone: </b> +353 083 3922949
        </p>
        <p>
          <b>Email: </b>
          <a href="mailto:thalesaleite@gmail.com">thalesaleite@gmail.com</a>
        </p>
        <p className="social-icons">
          <a
            href="https://www.linkedin.com/in/thales-leite-10277431/"
            target="__blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/thalesleite" target="__blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/thalesaleite/" target="__blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </p>
      </section>
    </>
  )
}
