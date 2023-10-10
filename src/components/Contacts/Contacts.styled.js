import styled from 'styled-components'

export const StyledContacts = styled.section`
	width: 375px;
	position: relative;
	@media screen and (min-width: 1280px) {
		width: 1280px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
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
		left: 315px;
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
	color: ${({ theme }) => theme.colors.white};
	align-self: center;
	@media screen and (min-width: 1280px) {
		display: none;
	}
`
