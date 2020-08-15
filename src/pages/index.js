import React from "react"
import Layout from "../components/Layout"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import styled from "styled-components"

export default function Home() {
  return (
    <Layout>
      <StyledHeader className="header">
        <h1>Olamide Oredola</h1>
        <ul className="social-icons">
          <li>
            <a href="https://github.com/ola-dola" alt="Github">
              <FaGithubSquare title="Github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ola-oredola/" alt="Linkedin">
              <FaLinkedin title="Linkedin" />
            </a>
          </li>
        </ul>
        <p>
          lorem duksum ipso facto lorem duksum ipso facto lorem duksum ipso
          factolorem duksum ipso factolorem duksum ipso factolorem duksum ipso
          facto lorem duksum ipso facto lorem duksum ipso facto.
        </p>

        <p>
          lorem duksum ipso facto lorem duksum ipso facto lorem duksum ipso
          factolorem duksum ipso factolorem duksum ipso factolorem duksum ipso
          facto lorem duksum ipso facto lorem duksum ipso facto.
        </p>
      </StyledHeader>
    </Layout>
  )
}

const StyledHeader = styled.header`
  h1 {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 1rem;

    @media (min-width: 700px) {
      font-size: 3.125rem;
      margin-bottom: 1.5rem;
    }
  }

  .social-icons {
    display: flex;
    justify-content: flex-start;

    li {
      padding-right: 0.75rem;

    }
  }
`
