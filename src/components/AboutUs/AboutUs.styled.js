import styled from 'styled-components'

export const StyledAboutUs = styled.section`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-bottom: 60px;
	@media screen and (min-width: 1280px) {
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 160px;
	}
`
export const StyledSpanAbout = styled.span`
	display: none;
	@media screen and (min-width: 1280px) {
		font-family: ${({ theme }) => theme.fonts.cedarville};
		font-size: 28px;
		display: block;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		position: absolute;
		color: ${({ theme }) => theme.colors.black};
		top: -30px;
		left: -8px;
	}
`
export const StyledImgUs = styled.div`
	background-color: ${({ theme }) => theme.colors.creamy};
	img {
		transform: translate(18px, -24px);
		width: 91%;
		stroke: #af9283;
	}
	margin-bottom: 30px;
	@media screen and (min-width: 1280px) {
		width: 40%;
		background-color: wheat;
		img {
			transform: translate(60px, 60px);
			width: 95%;
		}
	}
`
export const StyledTextBoxAbout = styled.div`
	@media screen and (min-width: 1280px) {
		flex-direction: column;
		width: 50%;
		padding-left: 100px;
	}
`
export const StyledTitleUs = styled.h2`
	font-family: ${({ theme }) => theme.fonts.josefine};
	color: ${({ theme }) => theme.colors.black};
	font-size: 38px;
	margin-left: 32px;
	margin-bottom: 30px;
	text-align: left;
`
export const StyledTextUs = styled.p`
	font-family: ${({ theme }) => theme.fonts.alegreya};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 19px;

	margin-left: 32px;
	margin-bottom: 30px;
	text-align: left;
	line-height: 36px;
	@media screen and (min-width: 1280px) {
		margin-bottom: 15px;
	}
`
