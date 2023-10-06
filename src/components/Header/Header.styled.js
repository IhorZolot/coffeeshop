//import { styled } from 'styled-components'

import styled from 'styled-components'

export const StyledHeader = styled.header`
	display: flex;
	background: ${({ theme }) => theme.colors.green};
	align-items: center;
	justify-content: space-between;
	padding: 12px 20px;
	font-family: ${({ theme }) => theme.fonts.josefine};
`
export const StyledUl = styled.ul`
	display: flex;
	gap: 50px;
`
