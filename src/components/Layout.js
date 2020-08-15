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

export const StyledLayout = styled.div`
  padding: 1.5rem 0.75rem 0.75rem;

  @media (min-width: 700px) {
    padding: 2rem 1rem 1rem;
  }
`
