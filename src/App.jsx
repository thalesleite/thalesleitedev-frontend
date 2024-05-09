import "./styles/App.css"

import { Link } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="home">
          <h2>Hi there! Start here to get to know me better</h2>
          <h1>
            <Link to="/about">About Me</Link>
          </h1>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
