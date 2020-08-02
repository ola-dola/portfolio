import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai"

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={`nav__mobile`}>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div>
          <a href="https://github.com/ola-dola">
            <AiFillGithub />
          </a>
          <a href="https://linkedin.com/ola-oredola">
            <AiFillLinkedin />
          </a>
        </div>
      </header>
      <section style={{display: menuOpen ? "block": "none"}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="projects">View Projects</Link>
          </li>
        </ul>
      </section>
      <aside></aside>
      <main>{children}</main>
    </>
  )
}
