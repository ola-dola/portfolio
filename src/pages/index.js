import React from "react"
import Layout from "../components/Layout"
import { graphql, Link as GatsbyLink } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export default function Home({ data }) {
  // console.log(data.file)

  return (
    <Layout>
      <StyledSection className="homepage">
        <StyledImageDiv>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ borderRadius: "50%" }}
          />
        </StyledImageDiv>

        <StyledParagraph>
          lorem Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </StyledParagraph>

        <StyledParagraph>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing
        </StyledParagraph>

        <StyledLink to="projects">View my Projects</StyledLink>
      </StyledSection>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "olamide1.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 250, maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
const StyledSection = styled.section`
  padding: 1.5rem 0.5rem;
  text-align: center;

  @media (min-width: 850px) {
    padding: 16vh;
    line-height: 1.5;
  }
`

const StyledImageDiv = styled.div`
  width: 35vw;
  margin: 0 auto;

  @media (min-width: 850px) {
    display: none;
  }
`
const StyledParagraph = styled.p`
  padding: 1rem 0;
`
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  display: inline-block;
  background-color: #6f00ff;
  box-shadow: 0 5px 0 black;
  color: white;
  margin: 1rem;
  padding: 1em 1.5em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 25px;

  :hover,
  :visited {
    background-color: #6f00ff;
    color: white;
  }

  :active {
    box-shadow: none;
    top: 5px;
  }
`
