import React from 'react'
import {
	StyledAboutUs,
	StyledImgUs,
	StyledSpanAbout,
	StyledTextBoxAbout,
	StyledTextUs,
	StyledTitleUs,
} from './AboutUs.styled'

export const AboutUs = ({ $reverse }) => {
	return (
		<StyledAboutUs id='About us' $reverse={$reverse}>
			<StyledSpanAbout>About us</StyledSpanAbout>
			<StyledImgUs>
				<img src='/pictures/coffee-cup.svg' />
			</StyledImgUs>
			<StyledTextBoxAbout>
				<StyledTitleUs>Coffee Shop Samwayle</StyledTitleUs>
				<StyledTextUs>
					Only one moment - when the barista reaches out over the bar to transfer the cup to the outstretched hand of
					the buyer. But this is exactly the moment when a connection arises between us and our guests.
				</StyledTextUs>
				<StyledTextUs>
					And we strive to do our best to maintain this connection - starting with our commitment to selecting the
					highest quality coffee in the world and ending with how we interact with guests and organizations to fulfill
					our obligations.
				</StyledTextUs>
			</StyledTextBoxAbout>
		</StyledAboutUs>
	)
}
