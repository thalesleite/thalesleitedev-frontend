import "../styles/About.css"

import Header from "./Header"
import Footer from "./Footer"

export default function About() {
  return (
    <>
      <Header />
      <section className="container">
        <section className="about">
          <div className="picture">
            <img src="/src/assets/myself.jpg" alt="Thales Leite" />
          </div>
          <div className="me">
            <p>
              I am Thales Leite, a web developer from São Paulo, Brazil, based
              in Dublin, Ireland, since 2019.
            </p>
            <p>
              I thrive on curiosity and passion for crafting innovative digital
              experiences. With over six years of hands-on experience in web
              development and an additional three years in technical customer
              support, I specialize in translating complex technical challenges
              into intuitive solutions.
            </p>
            <p>
              My journey in web development has been diverse and exciting. From
              creating web apps with machine learning to building platforms for
              the financial market, I've honed my skills in various technologies
              including Vue, React, Node, and PHP.
            </p>{" "}
            <p>
              What drives me is the opportunity to tackle new challenges and
              contribute to impactful projects. I'm committed to delivering
              applications that not only meet the needs of users but also exceed
              their expectations in terms of usability and efficiency.{" "}
            </p>
            <p>
              When I'm not coding, you can find me playing guitar, watching
              movies, or reading books about philosophy. I'm always eager to
              learn and grow, both personally and professionally. Feel free to
              connect with me on{" "}
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
              </a>
              .
            </p>
            <p>Let's create something amazing together!</p>
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}
