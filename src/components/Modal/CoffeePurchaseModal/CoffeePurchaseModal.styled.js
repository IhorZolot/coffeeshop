import styled from 'styled-components'

export const StyledModalCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: inherit;
`
export const StyledModalTitle = styled.div`
	font-family: ${({ theme }) => theme.fonts.josefine};
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
`

export const StyledCoffeeInfo = styled.h2`
	color: ${({ theme }) => theme.colors.gray};
`
export const StyledCartlIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	color: ${({ theme }) => theme.colors.gray};
`

export const StyledTotalCard = styled.ul`
	display: flex;
	flex-direction: column;
	text-align: left;

	@media screen and (min-width: 1280px) {
		justify-content: space-between;
	}
`
export const StyledTotalCardLi = styled.li`
	font-family: ${({ theme }) => theme.fonts.josefine};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
export const StyledQuantityBox = styled.li`
	display: flex;
	width: 120px;
	align-items: center;
	justify-content: space-between;
	@media screen and (min-width: 1280px) {
		width: 300px;
	}
`

export const StyledCoffeeName = styled.p`
	font-size: 24px;
	margin-bottom: 10px;
`

export const StyledLine = styled.div`
	border-top: 0.5px solid ${({ theme }) => theme.colors.gray};
	width: 100%;
	margin-bottom: 15px;
`
export const StyledQuantity = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`
export const StyledCoffeeQuantity = styled.button`
	background: none;
	border: none;

	& span {
		font-size: 30px;
		color: #af9283;
		cursor: pointer;
		padding: 0 5px;
	}
`
export const StyledCashPrice = styled.div`
	font-family: ${({ theme }) => theme.fonts.josefine};
	display: flex;
	flex-direction: column;
	gap: 15px;
	text-align: left;

	& a {
		border: 1px solid #af9283;
		border-radius: 6px;
		padding: 14px;
		width: 200px;
		font-family: ${({ theme }) => theme.fonts.josefine};
		font-size: 18px;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.buttonGreen};
		cursor: pointer;
		&:hover {
			color: #1a403d;
		}
	}
	@media screen and (min-width: 1280px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`
export const StyledTotalPrice = styled.div`
	border: 1px solid #af9283;
	border-radius: 6px;
	padding: 15px;
	text-align: left;
	color: #af9283;
	width: 200px;
`
