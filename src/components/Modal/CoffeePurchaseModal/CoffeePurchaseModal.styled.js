import styled from 'styled-components'

export const StyledModalCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	//background-color: #E3EBE7;
	background-color: inherit;
	text-align: left;
	border-radius: 10px;
	//box-shadow: 0px 23px 34px 0px rgba(35, 57, 55, 0.17);
`

export const StyledCoffeeInfo = styled.h2`
	margin-bottom: 20px;
`
export const StyledTotalCard = styled.div`
display: flex;
flex-direction: column;
text-align: left;
gap: 15px;
justify-content: space-between;
		padding: 12px 20px;
		margin-bottom: 30px;
@media screen and (min-width: 1280px) {
	}
`
export const StyledCoffeeName = styled.p`
	font-size: 24px;
	margin-bottom: 10px;
`
export const StyledLine = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.gray};
  width: 100%; 
	margin-bottom: 15px;
`;
export const StyledQuantity = styled.div`
display: flex;
gap: 15px;
justify-content: right;
`
export const StyledTotalPrice = styled.div`
display: flex;
gap: 15px;
justify-content: right;
font-size: 20px;
margin-bottom: 15px;
margin-right: 30px;
`
export const StyledCashPrice = styled.div`
display: flex;
gap: 15px;
text-align: right;
align-items: center;
justify-content: space-between;
`
export const StyledCoffeeQuantity = styled.button`
	background: none;
	border: none;
	& span {
		font-size: 20px;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.buttonGreen};
	cursor: pointer;
	}
`

// export const StyledQuantityLabel = styled.div`
// display: flex;
// gap: 15px;
// justify-content:space-between;
// `
// export const StyledCoffeePic = styled.div`
// 	width: 16px;
// 	height: 16px;
// `
// export const StyledCoffeePic2 = styled.div`
// 	width: 10px;
// 	height: 10px;
// `


