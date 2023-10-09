//import { styled } from 'styled-components'

import styled from 'styled-components'

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	margin-bottom: 150px;

	@media screen and (min-width: 1280px) {
		justify-content: space-between;
	padding: 12px 20px;
	margin-bottom: 50px;
	}

	/* background: ${({ theme }) => theme.colors.green};
	align-items: center;
	
	font-family: ${({ theme }) => theme.fonts.josefine}; */
`
export const StyledHeaderBurger = styled.div`
	width: 27px;
	height: 21px;
	margin-right: 47px;
	@media screen and (min-width: 1280px) {
		display: none;
	}
`
export const StyledHeaderLogo = styled.div`
	width: 159.973px;
	height: 32.53px;
`

export const StyledHeaderUl = styled.ul`
	display: none;
	@media screen and (min-width: 1280px) {
		display: flex;
		gap: 50px;
	}
`
export const StyledHeaderButton = styled.button`
	display: none;
	@media screen and (min-width: 1280px) {
		display: block;
	}
`
