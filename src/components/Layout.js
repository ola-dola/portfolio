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
        file(relativePath: { eq: "olamide1.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 250) {
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
            style={{ paddingLeft: ".8rem" }}
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
        <div style={{marginTop: "2rem"}}>
          <Img
            fixed={data.file.childImageSharp.fixed}
            style={{ borderRadius: "50%"}}
            alt="portfolio owner, Olamide Oredola slightly smiling"
          />
        </div>

        <StyledSideNavlinks className="sidebar__links">
          <Link to="/">Home</Link>
          <Link to="projects">Projects</Link>
          <a href="mailto:oredolaolamide@gmail.com">Contact me</a>
        </StyledSideNavlinks>

        <StyledSocialLinks>
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
        </StyledSocialLinks>
      </StyledAside>
      <StyledMain>{children}</StyledMain>
    </>
  )
}

// Header for mobile. No aside
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  @media (min-width: 850px) {
    display: none;
  }
`

// Aside for Desktop. No Header
const StyledAside = styled.aside`
  display: none;

  @media (min-width: 850px) {
    height: 100%;
    width: 20%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: inherit;
    /* background-color: #181818; */
    overflow-x: hidden;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    font-size: 2rem;
  }

  @media(min-width: 1500px) {
    font-size: 3.5rem;
    line-height: 1.5;
  }
`
const StyledMain = styled.main`
  border: 3px dotted yellow;
  padding-bottom: 1000px;

  @media (min-width: 850px) {
    margin-left: 21%;
  }

  @media (min-width: 1500px) {
    margin-left: 25%;
  }
`

const StyledSideNavlinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  text-decoration: underline;
  margin: 1rem 0;

  a {
    padding-bottom: 0.8rem;
  }
`

const StyledSocialLinks = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`
