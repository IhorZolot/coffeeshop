import styled from 'styled-components'

export const StyledHome = styled.section`
	width: 375px;
	display: flex;
	align-items: center;
	flex-direction: column;
	@media screen and (min-width: 1280px) {
		width: 1280px;
		flex-direction: row;
		justify-content: space-between;
		padding-right: 120px;
		text-align: left;
		margin-bottom: 150px;
	}
`
export const StyledFirstHome = styled.div``
export const StyledTitleH3 = styled.h3`
	color: #000;
	text-align: center;
	font-family: Cedarville Cursive;
	font-size: 19px;
	font-style: normal;
	margin-bottom: 12px;
`
export const StyledTitleH1 = styled.h3`
	color: #000;
	text-align: center;
	font-family: Josefin Sans;
	font-size: 54px;
	margin-bottom: 30px;
	@media screen and (min-width: 1280px) {
		text-align: left;
	}
`
export const StyledButtonHome = styled.button`
	margin-bottom: 177px;
`
export const StyledSecondHome = styled.div`
	display: none;
	@media screen and (min-width: 1280px) {
		display: flex;
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
	background: #e3ebe7;
	img {
		transform: translate(60px, 160px);
		width: 80%;
	}
	margin-right: 40px;
`
export const StyledBoxSocial = styled.div`
	display: flex;
	gap: 14px;
	flex-direction: column;
	align-items: flex-end;
`

export const StyledSocialIcon = styled.div`
	width: 32px;
	height: 32px;
`
export const StyledSpanText = styled.span`
	font-family: Josefin Sans;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
`
