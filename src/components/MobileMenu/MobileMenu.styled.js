import styled from 'styled-components'

export const StyledMobileMenu = styled.div`

	justify-content: center;
	position: fixed;
	display: flex;
	flex-direction: column;
	background: white;
	z-index: 999;
	padding: 30px 0;
	inset: 0;
	// top:0 , right:0
`
export const StyledLogo = styled.div`
	margin-top: 30px;
	margin: 0 auto;
	display: block;
	margin-bottom: 92px;
	width: 163px;
	height: 35px;
	
`
export const StyledButton = styled.button`
	position: absolute;
	top: 10px;
	left: 15px;
	cursor: pointer;
	background: transparent;
	border: none;

`
export const StyledButtonSvg = styled.div`
	width: 22px;
	height: 22px;
	background: none;
`
export const StyledLinkMenu = styled.ul`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: space-between;
	
	font-family: ${({ theme }) => theme.fonts.josefine};
	font-size: 36px;
	font-style: normal;
	& a {
		color: ${({ theme }) => theme.colors.black};
			&:hover {
				font-weight: bold;
			}
			&:focus {
				font-weight: bold;
			}
		}
`
export const StyledSocialIconMenu = styled.div`
	display: flex;
	gap: 30px;
	justify-content: center;
	margin-top: 91px;
`
export const StyledSocialIcon = styled.div`
	font-size: 34px;
	color: ${({ theme }) => theme.colors.gray};
	:hover {
		color: ${({ theme }) => theme.colors.buttonGreen}; 
}
`