import styled from 'styled-components'

export const StyledMobileMenu = styled.div`
	width: 375px;
	height: 812px;
	justify-content: center;
`
export const StyledLogo = styled.div`
	margin-top: 30px;
	margin-bottom: 92px;
	width: 163px;
	height: 35px;
	margin-left: 90px;
`
export const StyledButton = styled.button`
	position: absolute;
	top: -4px;
	left: 15px;
	cursor: pointer;
`
export const StyledButtonSvg = styled.div`
	width: 22px;
	height: 22px;
	background: none;
`
export const StyledLinkMenu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 70px;
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