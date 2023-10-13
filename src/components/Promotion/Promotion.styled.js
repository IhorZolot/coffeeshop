import styled from 'styled-components'

export const StyledPromotion = styled.section`
	display: flex;
	flex-direction: column;
	width: 375px;
	margin-top: 50px;
	position: relative;
	@media screen and (min-width: 1280px) {
		width: 1280px;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 60px;
		flex-direction: ${props => (props.$reverse ? 'row-reverse' : 'row')};
	}
`
export const StyledSpanPromotion = styled.span`
	display: none;
	@media screen and (min-width: 1280px) {
		display: block;
		font-family: ${({ theme }) => theme.fonts.cedarville};
		font-size: 28px;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		position: absolute;
		color: ${({ theme }) => theme.colors.black};
		top: -30px;
		right: -13px;
	}
`
export const StyledImgPromotion = styled.div`
	height: 287px;
	background-color: #a6cac3;
	img {
		transform: translate(60px, -20px);
		width: 65%;
	}
	margin-bottom: 23px;
	@media screen and (min-width: 1280px) {
		width: 40%;
		img {
			transform: translate(110px, -30px);
			width: 50%;
		}
	}
`
export const StyledTextBoxPromotion = styled.div`
	@media screen and (min-width: 1280px) {
		flex-direction: column;
		width: 50%;
	}
`
export const StyledTitlePromotion = styled.h2`
	font-family: ${({ theme }) => theme.fonts.josefine};
	color: ${({ theme }) => theme.colors.black};
	font-size: 38px;
	margin-bottom: 25px;
	text-align: left;
`
export const StyledTextPromotion = styled.p`
	font-family: ${({ theme }) => theme.fonts.alegreya};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 19px;
	width: 313px;
	margin-bottom: 25px;
	text-align: left;
	line-height: 36px;
	@media screen and (min-width: 1280px) {
		width: 645px;
	}
`
