import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import Layout, { StyledHeader } from "../components/Layout"
import { FaGithubSquare, FaLinkedin, FaGlobe } from "react-icons/fa"
import { MdMail } from "react-icons/md"

export default function Home({ data }) {
  const projectImages = data.allImageSharp.edges

  console.log(projectImages)

  return (
    <Layout>
      <StyledHeader id="Header_Section">
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

      <StyledMain id="Projects__Section">
        <h2 className="section-heading">Projects</h2>
        <div className="project-card">
          <div className="project-image">
            <Image fluid={projectImages[0].node.fluid} alt="" />
          </div>
          <div className="project-details">
            <h3 className="project-name">Geekwire</h3>
            <p>
              Geewire is like a wired geek. Nothing of this makes any sense, so
              it is wise to just stop reading. Ok, why are you still reading?
            </p>
            <p className="tech-stack">Stack: React, Redux, Nodejs, Postgres.</p>
            <ul className="links">
              <li>
                <a href="">Live Version</a>
              </li>
              <li>
                <a href="">Code</a>
              </li>
              {/* <li>
                <a href="">Backend Repo</a>
              </li> */}
            </ul>
          </div>
        </div>
      </StyledMain>

      <StyledFooter>&copy; Ola Oredola, 2020.</StyledFooter>
    </Layout>
  )
}

const StyledFooter = styled.footer`
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;
  margin: 1.5rem 0 0;
  border-top: 1px solid #222;
  color: #0e1b42;

  @media (min-width: 700px) {
    margin: 4rem 0 0.5rem;
  }
`

const StyledMain = styled.main`
  margin: 1rem 0 0;

  .section-heading {
    font-size: 1.5rem;
    text-align: center;
    text-decoration: underline;
    margin-bottom: 0.875rem;

    @media (min-width: 700px) {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  }

  /* @media (min-width: 700px) {
    margin: 2rem 0;
  } */

  .project-card {
    margin-top: 0.75rem;
    box-shadow: 1px 2px 3px 0px #222;

    @media (min-width: 700px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5rem;
    }
  }

  .project-image {
    @media (min-width: 700px) {
      width: 54%;
    }
  }

  .project-details {
    padding: 0.5rem;

    @media (min-width: 700px) {
      width: 44%;
    }

    .project-name {
      font-size: 1.25rem;
      padding: 0.5rem 0;
      text-decoration: underline;

      @media (min-width: 700px) {
        font-size: 1.75rem;
      }
    }

    p {
      font-size: 0.875rem;
      padding: 0.25rem 0;

      @media (min-width: 700px) {
        font-size: 1rem;
        line-height: 1.2;
        padding: 0.5rem 0;
      }
    }

    .tech-stack {
      color: #1f1940;
      font-family: "IBM Plex Mono", monospace;
      font-style: italic;

      @media (min-width: 700px) {
        font-size: 100%;
      }
    }

    ul.links {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      margin: 0.75rem 0;

      li {
        padding: 0.5rem 0.35rem;
        background-color: #222;
        margin-right: 2rem;
        border-radius: 4px;

        a,
        a:active,
        a:hover {
          color: #eee;
        }

        :hover {
          background-color: #949fad;
        }
      }
    }
  }
`

export const query = graphql`
  {
    allImageSharp {
      edges {
        node {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
