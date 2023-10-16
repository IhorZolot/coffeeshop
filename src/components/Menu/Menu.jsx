import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
  return (
    <StyledMenu>
      <h1>А тут буде меню</h1>
      </StyledMenu>
  )
}

const StyledMenu = styled.div`
width: 100%;
z-index: 1;
  position: absolute;
  background-color: gray;
  color: black;
`