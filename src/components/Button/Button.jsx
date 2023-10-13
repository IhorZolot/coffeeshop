import React from 'react'
import { StyledButton } from './Button.styled'

export const Button = ({ children, onClick, ...props }) => {
	return (
		<StyledButton {...props} onClick={onClick}>
			{children}
		</StyledButton>
	)
}
