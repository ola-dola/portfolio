import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai"
import GlobalStyle from "../styles/globalStyle"

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <GlobalStyle />
      <StyledHeader className={`nav__mobile`}>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div>
          <a href="https://github.com/ola-dola">
            <AiFillGithub />
          </a>
          <a
            style={{ paddingLeft: ".4rem" }}
            href="https://linkedin.com/in/ola-oredola"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </StyledHeader>
      <section style={{ display: menuOpen ? "block" : "none" }}>
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

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  @media(min-width: 720px) {
    display: none;
  }
`
