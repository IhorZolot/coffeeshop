import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
  return (
    <StyledMenu>
      <h1>А тут буде меню </h1>
      </StyledMenu>
  )
}

const StyledMenu = styled.div`
width: 100%;
height: 100%;
display: flex;
z-index: 1;
  color: black;
  align-items: center;
  justify-content: center;
`