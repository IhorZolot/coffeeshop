import styled from 'styled-components'

export const StyledPromotion = styled.section`
	display: flex;
	flex-direction: column;
	width: 375px;
	margin-top: 50px;
	@media screen and (min-width: 1280px) {
		width: 1280px;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 60px;
	}
`
export const StyledSpanPromotion = styled.span`
display: none;
@media screen and (min-width: 1280px) {
	display: block;
	font-family: Josefin Sans;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	}
`
export const StyledImgPromotion = styled.div`
	height: 287px;
	background-color: wheat;
	img {
		transform: translate(60px, -20px);
		width: 65%;
	}
	margin-bottom: 23px;
	@media screen and (min-width: 1280px) {
 	width: 40%;
 	background-color: wheat;
 	img {
		transform: translate(130px, -30px);
		width: 50%;
	}}
`
export const StyledTextBoxPromotion = styled.div`
@media screen and (min-width: 1280px) {
flex-direction: column;
width:50%;
padding-left: 100px;
	}
`
export const StyledTitlePromotion = styled.h2`
	font-family: Josefin Sans;
	font-size: 38px;
	margin-left: 32px;
	margin-bottom: 25px;
	text-align: left;
`
export const StyledTextPromotion = styled.p`
	width: 313px;
	margin-left: 32px;
	margin-bottom: 25px;
	text-align: left;
	@media screen and (min-width: 1280px) {
		width: 645px;
	}
`
export const StyledButtonPromotion = styled.button`
display: none;
@media screen and (min-width: 1280px) {
	display: block;
	}
`
