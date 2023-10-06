import React from 'react'
import styled from 'styled-components'

export const Section = ({ text, $reverse }) => {
	return (
		<StyledSection $reverse={$reverse}>
			<ImageW>
				<img src='./pictures/coffee-cup.svg' />
			</ImageW>
			<Text>
				<h2>{text}</h2>
			</Text>
		</StyledSection>
	)
}
const StyledSection = styled.section`
	display: flex;
	flex-direction: ${props => (props.$reverse ? 'row-reverse' : 'row')};
	margin: 20px 0;
	align-items: center;
`
const ImageW = styled.div`
	width: 50%;
	background-color: wheat;
	img {
		transform: translate(60px, 60px);
		width: 100%;
	}
`
const Text = styled.div`
	width: 50%;
	padding-left: 100px;
`
