import styled from 'styled-components'

export const StyledAboutUs = styled.section`
	display: flex;
	flex-direction: column;
	width: 375px;
	@media screen and (min-width: 1280px) {
		width: 1280px;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 110px;
	}
`
export const StyledSpanAbout = styled.span`
display: none;
@media screen and (min-width: 1280px) {
	display: block;
	font-family: Josefin Sans;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	}
`
export const StyledImgUs = styled.div`
	background-color: wheat;
	img {
		transform: translate(18px, -24px);
		width: 91%;
	}
	margin-bottom: 30px;
	@media screen and (min-width: 1280px) {
 	width: 40%;
 	background-color: wheat;
 	img {
		transform: translate(60px, 60px);
		width: 95%;
	}}
`
export const StyledTextBoxAbout = styled.div`
@media screen and (min-width: 1280px) {
flex-direction: column;
width:50%;
padding-left: 100px;
	}
`
export const StyledTitleUs = styled.h2`
	font-family: Josefin Sans;
	font-size: 38px;
	margin-left: 32px;
	margin-bottom: 30px;
	text-align: left;
`
export const StyledTextUs = styled.p`
	width: 313px;
	margin-left: 32px;
	margin-bottom: 30px;
	text-align: left;
	margin-bottom: 15px;
	@media screen and (min-width: 1280px) {
		width: 645px;
	}
`
