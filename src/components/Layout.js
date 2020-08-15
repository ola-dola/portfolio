import React, { useState } from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import GlobalStyle from "../styles/globalStyle"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <StyledLayout className="layout">{children}</StyledLayout>
    </>
  )
}

const StyledLayout = styled.div`
  padding: 1.5rem 0.75rem 0;

  @media (min-width: 700px) {
    padding: 2rem 1rem 0;
  }
`

export const StyledHeader = styled.header`
  border-bottom: 2px solid #1f1940;

  h1 {
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
    line-height: 1.2;
    margin-bottom: 1rem;

    @media (min-width: 700px) {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
  }
`
