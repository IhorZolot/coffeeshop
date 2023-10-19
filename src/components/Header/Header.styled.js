import styled from 'styled-components'

export const StyledHeader = styled.header`
	font-family: ${({ theme }) => theme.fonts.josefine};
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 150px;
	position: sticky;
	top:0;
	z-index: 10;
	padding: 12px 20px;
	background-color: white;
	@media screen and (min-width: 1280px) {
		justify-content: space-between;
		margin-bottom: 50px;
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
		font-size: 16px;
		border-radius: 8px;
		padding: 14px 32px;
		background-color: ${({ theme }) => theme.colors.buttonGreen};
		& a {
			font-family: ${({ theme }) => theme.fonts.josefine};
			color: white;
		}
		
		&:hover {
			background-color: #1a403d;
		}
	}
`
