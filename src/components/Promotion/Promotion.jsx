import React from 'react'
import { StyledPromotion, StyledImgPromotion, StyledTextPromotion, StyledTitlePromotion, StyledSpanPromotion, StyledButtonPromotion, StyledTextBoxPromotion } from './Promotion.styled'

export const Promotion = () => {
	return (
		<StyledPromotion>
			<StyledSpanPromotion>Promotion</StyledSpanPromotion>
			<StyledImgPromotion>
				<img src='/public/pictures/paper-cup.svg' />
			</StyledImgPromotion>
			<StyledTextBoxPromotion>
			<StyledTitlePromotion>Coffee of the day</StyledTitlePromotion>
			<StyledTextPromotion>
				Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam (cream)
				depends on how coffee and water are mixed. Attention! The concepts of "American" and "American coffee" should
				not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared through a
				filter system.
			</StyledTextPromotion>
			<StyledButtonPromotion>Order now</StyledButtonPromotion>
			</StyledTextBoxPromotion>
		</StyledPromotion>
	)
}
