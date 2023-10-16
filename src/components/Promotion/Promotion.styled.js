import styled from 'styled-components'

export const StyledPromotion = styled.section`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-bottom: 60px;
	@media screen and (min-width: 1280px) {
		flex-direction: ${props => (props.$reverse ? 'row-reverse' : 'row')};
		justify-content: space-between;
		margin-bottom: 100px;
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
	width: 100%;
	background: ${({ theme }) => theme.colors.sectionGreen};
	img {
		transform: translate(0, -20px);
		/* transform: scale(1.1); */
		width:100%;
		height: 115%;
	}
	margin-bottom: 23px;
	@media screen and (min-width: 1280px) {
		height: 276px;
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
	font-size: 30px;
	margin-bottom: 25px;
	text-align: left;
`
export const StyledTextPromotion = styled.p`
	font-family: ${({ theme }) => theme.fonts.alegreya};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 19px;
	margin-bottom: 25px;
	text-align: left;
	line-height: 36px;
	@media screen and (min-width: 1280px) {
		width: 645px;
	}
`
