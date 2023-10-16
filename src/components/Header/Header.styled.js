import styled from 'styled-components'

export const StyledHeader = styled.header`
	font-family: ${({ theme }) => theme.fonts.josefine};
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 150px;
	@media screen and (min-width: 1280px) {
		justify-content: space-between;
		padding: 12px 20px;
		margin-bottom: 50px;
		position: sticky;
		top: 0;
		z-index: 10;
		/* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100; */
	}
`
export const StyledHeaderBurger = styled.div`
	cursor: pointer;
	width: 27px;
	height: 21px;
	justify-content: space-around;
	@media screen and (min-width: 1280px) {
		display: none;
	}
`
export const StyledHeaderLogo = styled.div`
	width: 130px;
	height: 33px;
	display: flex;
`
export const StyledHeaderMobile = styled.div`
	cursor: pointer;
	@media screen and (min-width: 1280px) {
		display: none;
	}
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
		border-radius: 8px;
		padding: 14px 32px;
		background-color: ${({ theme }) => theme.colors.buttonGreen};
		color: white;
		&:hover {
			background-color: #1a403d;
		}
	}
`
