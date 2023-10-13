import styled from 'styled-components'

export const StyledHeader = styled.header`
	font-family: ${({ theme }) => theme.fonts.josefine};
	font-size: 16px;
	display: flex;
	align-items: center;
	margin-bottom: 150px;
	@media screen and (min-width: 1280px) {
		justify-content: space-between;
		padding: 12px 20px;
		margin-bottom: 50px;
	}
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
	width: 160px;
	height: 33px;
	/* stroke: ${({ theme }) => theme.colors.buttonGreen}; */
`

export const StyledHeaderUl = styled.ul`
	display: none;
	@media screen and (min-width: 1280px) {
		display: flex;
		align-items: center;
		gap: 50px;
		& a {
			color: black;
			&:hover {
				font-weight: bold;
			}
			&:focus {
				font-weight: bold;
			}
		}
	}
`
export const StyledHeaderButton = styled.button`
	display: none;
	@media screen and (min-width: 1280px) {
		display: block;
		padding: 14px 32px;
		background-color: ${({ theme }) => theme.colors.buttonGreen};
		color: white;
		&:hover {
			background-color: #1a403d;
		}
	}
`
