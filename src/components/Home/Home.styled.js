import styled from 'styled-components'

export const StyledHome = styled.section`
	/* //width: 375px; */
	display: flex;
	align-items: center;
	flex-direction: column;
	@media screen and (min-width: 1280px) {
		//width: 1280px;
		flex-direction: row;
		justify-content: space-between;
		padding-right: 120px;
		text-align: left;
		margin-bottom: 150px;
	}
`
export const StyledFirstHome = styled.div``
export const StyledTitleH3 = styled.h3`
	color: ${({ theme }) => theme.colors.gray};
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.cedarville};
	font-size: 19px;
	font-style: normal;
	margin-bottom: 12px;
	@media screen and (min-width: 1280px) {
		font-size: 28px;
	}
`
export const StyledTitleH1 = styled.h1`
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.josefine};
	text-align: center;
	font-size: 54px;
	margin-bottom: 30px;
	@media screen and (min-width: 1280px) {
		text-align: left;
		font-size: 63px;
	}
`
export const StyledButtonHome = styled.button`
	margin-bottom: 177px;
`
export const StyledSecondHome = styled.div`
	display: none;
	@media screen and (min-width: 1280px) {
		display: flex;
		align-items: flex-end;
	}
`
export const StyledDecorLine = styled.div`
	width: 159px;
	height: 157px;
	background: #e3ebe7;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const StyledBoxGrinder = styled.div`
	width: 410px;
	height: 466px;
	background: #a6cac3;
	img {
		transform: translate(60px, 160px);
		width: 80%;
		stroke: #444a4a;
	}
	margin-right: 40px;
`
export const StyledBoxSocial = styled.div`
	display: flex;
	gap: 14px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const StyledSocialIcon = styled.div`
	width: 32px;
	height: 32px;
`
export const StyledSpanText = styled.span`
	font-size: 28px;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.josefine};
	writing-mode: vertical-rl;
	transform: rotate(180deg);
`
