import styled from 'styled-components'

export const StyledCoffeeSection = styled.section`
	@media screen and (min-width: 1280px) {
		background-color: ${({ theme }) => theme.colors.ligthGreen};
		display: flex;
		flex-direction: row;
		gap: 15px;
		padding: 44px 0;
		margin-bottom: 130px;
	}
`

export const StyledCoffeeCard = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 44px;
	padding-bottom: 47px;
	width: 337px;
	height: 458px;
	border-radius: 25px;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 23px 34px 0px rgba(35, 57, 55, 0.17);
	margin-bottom: 30px;
	@media screen and (min-width: 1280px) {
		margin-bottom: 0;
	}
`
export const StyledTitleCard = styled.h3`
	margin-bottom: 32px;
	font-family: ${({ theme }) => theme.fonts.josefine};
	color: ${({ theme }) => theme.colors.black};
	font-size: 28px;
`
export const StyledTextCard = styled.p`
	font-family: ${({ theme }) => theme.fonts.alegreya};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 19px;
	text-align: center;
	align-items: center;
	width: 248px;
	align-self: center;
	line-height: 36px;
`
export const StyledButtonCard = styled.button`
	margin-top: auto;
	width: 210px;
	align-self: center;
`
