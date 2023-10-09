import styled from 'styled-components'

export const StyledContacts = styled.section`
	width: 375px;
	@media screen and (min-width: 1280px) {
		width: 1280px;
		flex-direction: row;
		/* justify-content: space-between;
		align-items: center;
		justify-content: center; */
	}
`
export const StyledSpanContacts = styled.span`
display: none;
@media screen and (min-width: 1280px) {
	display: block;
	font-family: Josefin Sans;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	}
`
export const StyledMap = styled.div`
	width: 337px;
	/* height: 300px; */
	margin-bottom: 30px;
	@media screen and (min-width: 1280px) {
margin-right: 176px;
	}
`
export const StyledAddress = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1280px) {
padding-left: 100px;
	}
`
export const StyledAddressTitle = styled.h3`
	margin-bottom: 32px;
	font-family: Josefin Sans;
	font-size: 28px;
	color: #444a4a;
	margin-bottom: 12px;
	@media screen and (min-width: 1280px) {
		margin-bottom: 21px;
	}
`
export const StyledAddressText = styled.span`
	margin-bottom: 20px;
	@media screen and (min-width: 1280px) {
		margin-bottom: 12px;
	}
`
export const StyledAddressButton = styled.button`
	width: 189px;
	align-self: center;
	@media screen and (min-width: 1280px) {
display: none;
	}
`
