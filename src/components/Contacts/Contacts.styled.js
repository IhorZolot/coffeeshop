import styled from 'styled-components'

export const StyledContacts = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: left;
	@media screen and (min-width: 1280px) {
		display: flex;
		flex-direction: row;
	}
`
export const StyledSpanContacts = styled.span`
	display: none;
	@media screen and (min-width: 1280px) {
		display: block;
		font-family: ${({ theme }) => theme.fonts.cedarville};
		font-size: 28px;
		color: ${({ theme }) => theme.colors.black};
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		position: absolute;
		left: 618px;
		top: -25px;
	}
`
export const StyledMap = styled.div`
	margin-bottom: 30px;
			& iframe {
			border: none;
			border-radius: 4px;
			box-shadow: 0px 23px 34px 0px rgba(35, 57, 55, 0.17);
		}
	@media screen and (min-width: 1280px) {
		& iframe {
			width: 646px;
			height: 351px;
			
		}
		margin-right: 176px;
	}
`
export const StyledAddress = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 1280px) {
		margin-top: 40px;
	}
`
export const StyledAddressTitle = styled.h3`
	margin-bottom: 32px;
	font-family: ${({ theme }) => theme.fonts.josefine};
	font-size: 28px;
	color: ${({ theme }) => theme.colors.black};
	margin-bottom: 12px;
	@media screen and (min-width: 1280px) {
		margin-bottom: 21px;
	}
`
export const StyledAddressText = styled.span`
	font-family: ${({ theme }) => theme.fonts.alegreya};
	color: ${({ theme }) => theme.colors.gray};
	margin-bottom: 20px;
	@media screen and (min-width: 1280px) {
		margin-bottom: 12px;
	}
`
export const StyledAddressButton = styled.button`
	width: 189px;
	height: 53px;
	& a {
		color: ${({ theme }) => theme.colors.black};
	}
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.josefine};
	align-self: center;
	border-radius: 8px;
	border: none;
	box-shadow: 0px 23px 34px 0px rgba(35, 57, 55, 0.17);

	@media screen and (min-width: 1280px) {
		display: none;
	}
`
