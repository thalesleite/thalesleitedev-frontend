import "../styles/Lattes.css"
import Header from "./Header"
import Footer from "./Footer"
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Lattes() {
  return (
    <>
      <Header />

      <section className="container">
        <section className="lattes">
          <h1>
            Coming soon... <FontAwesomeIcon icon={faMugSaucer} />
          </h1>
        </section>
      </section>
      <Footer />
    </>
  )
}
