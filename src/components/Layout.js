import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai"

import GlobalStyle from "../styles/globalStyle"

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const data = useStaticQuery(
    graphql`
      {
        file(relativePath: { eq: "olamide.jpg" }) {
          childImageSharp {
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

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

      <StyledAside>
        <Img
          fixed={data.file.childImageSharp.fixed}
          style={{ borderRadius: "50%" }}
          alt="portfolio owner, Olamide Oredola slightly smiling"
        />

        <div>
          <a href="https://github.com/ola-dola">
            <AiFillGithub />
          </a>
          <a href="https://linkedin.com/in/ola-oredola">
            <AiFillLinkedin />
          </a>
          <a href="mailto:oredolaolamide@gmail.com">
            <AiFillMail />
          </a>
          <a href="https://twitter.com/olascript">
            <AiFillTwitterCircle />
          </a>
        </div>

        <div className="sidebar__links">
          <Link to="projects">Home</Link>
          <Link to="projects">View Projects</Link>
          <Link to="projects">Contact me</Link>
        </div>
      </StyledAside>
      <StyledMain>{children}</StyledMain>
    </>
  )
}

// Header for mobile. No aside
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  @media (min-width: 720px) {
    display: none;
  }
`

// Aside for Desktop. No Header
const StyledAside = styled.aside`
  height: 100%;
  width: 20%;
  /* background-color: #181818; */
  position: fixed;
  /* z-index: 1; */
  top: 0;
  left: inherit;
  overflow-x: hidden;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  font-size: 2rem;

  @media (max-width: 720px) {
    display: none;
  }
`
const StyledMain = styled.main`
  margin-left: 20vw;
  border: 1px dotted yellow;
  padding-bottom: 1000px;
`