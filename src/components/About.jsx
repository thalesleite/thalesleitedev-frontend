import "../styles/About.css"

import myImage from "../assets/myself.jpg"

export default function About() {
  return (
    <>
      <section className="container" id="about">
        <section className="about">
          <div className="picture">
            <img src={myImage} alt="Thales Leite" />
          </div>
          <div className="me">
            <p>
              I am Thales Leite, a web developer from São Paulo, Brazil, now
              based in Dublin, Ireland, since 2019.
            </p>
            <p>
              With over six years in web development and three years in
              technical customer support, I specialize in solving complex
              problems with intuitive solutions. I've worked with technologies
              like Vue, React, Node, and PHP, creating web apps with machine
              learning and financial platforms.
            </p>
            <p>
              Passionate about delivering user-friendly applications, I thrive
              on new challenges and impactful projects. Outside of work, I enjoy
              playing guitar, watching movies, and reading philosophy. Connect
              with me on{" "}
              <a
                href="https://www.linkedin.com/in/thales-leite-10277431/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              or check out my projects on{" "}
              <a
                href="https://github.com/thalesleite"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              projects.
            </p>
            <p>Let's create something amazing together!</p>
          </div>
        </section>
      </section>
    </>
  )
}
