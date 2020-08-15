import React from "react"
import Layout from "../components/Layout"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import styled from "styled-components"

export default function Home() {
  return (
    <Layout>
      <StyledHeader className="header" id="Header">
        <h1>Olamide Oredola</h1>
        <ul className="social-icons">
          <li>
            <a href="https://github.com/ola-dola" alt="Github">
              <FaGithubSquare title="Github" size={45} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ola-oredola/" alt="Linkedin">
              <FaLinkedin title="Linkedin" size={45} />
            </a>
          </li>
          <li>
            <a href="mailto:oredolaolamide@gmail.com" alt="Email">
              <MdMail title="Email" size={50} />
            </a>
          </li>
        </ul>
        <p className="about-me">
          lorem duksum ipso facto lorem duksum ipso facto lorem duksum ipso
          factolorem duksum ipso factolorem duksum ipso factolorem duksum ipso
          facto lorem duksum ipso facto lorem duksum ipso facto lorem ipsom
          fufnvj ffb h h.
        </p>
      </StyledHeader>
    </Layout>
  )
}

const StyledHeader = styled.header`
  border-bottom: 2px solid #1f1940;
  /* padding-bottom: 1.5rem; */
  h1 {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;

    @media (min-width: 700px) {
      font-size: 3.125rem;
      margin-bottom: 0.75rem;
    }
  }

  .social-icons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.25rem;

    li {
      padding-right: 0.75rem;
    }

    @media (min-width: 700px) {
      margin-bottom: 1.75rem;
    }
  }

  .about-me {
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 700px) {
      font-size: 1.2rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }
  }
`
