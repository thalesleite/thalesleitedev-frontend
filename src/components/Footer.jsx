import { useState } from "react"
import "../styles/Footer.css"

export default function Footer() {
  const [today] = useState(new Date())

  return (
    <section className="footer">
      <small>&copy; Copyright {today.getFullYear()}, Thales Leite</small>
    </section>
  )
}
