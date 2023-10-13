import styled from 'styled-components'

export const StyledButton = styled.button`
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.josefine};
	font-size: 20px;
	font-style: normal;
	width: 235px;
	height: 54px;
	background-color: #2d635e;
	border-radius: 8px;
	color: white;
	cursor: pointer;
	display: ${props => (props.$hideable ? 'none' : 'block')};
	@media screen and (min-width: 1280px) {
		display: block;
		align-items: center;
	}
	&:hover {
		background-color: #1a403d;
	}
	&:focus {
		outline: none;
		box-shadow: 0 0 4px 2px #00f;
	}
`
