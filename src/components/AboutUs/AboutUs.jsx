import React from 'react'
import { StyledAboutUs, StyledImgUs, StyledTextUs, StyledTitleUs } from './AboutUs.styled'

export const AboutUs = () => {
	return (
		<StyledAboutUs>
			<StyledImgUs>
				<img src='/public/pictures/coffee-cup.svg' />
			</StyledImgUs>
			<StyledTitleUs>Coffee Shop Samwayle</StyledTitleUs>
			<StyledTextUs>
				Only one moment - when the barista reaches out over the bar to transfer the cup to the outstretched hand of the
				buyer. But this is exactly the moment when a connection arises between us and our guests.
			</StyledTextUs>
			<StyledTextUs>
				And we strive to do our best to maintain this connection - starting with our commitment to selecting the highest
				quality coffee in the world and ending with how we interact with guests and organizations to fulfill our
				obligations.
			</StyledTextUs>
		</StyledAboutUs>
	)
}