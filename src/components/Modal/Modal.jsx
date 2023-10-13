import { useEffect } from 'react'
import { BackgroundModal, ContentModal, OptionModalMenu } from './Modal.styled'

export const Modal = ({ children, onClose }) => {
	const onBackdropClick = event => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	// useEffect(() => {
	// 	const handleKeyDown = event => {
	// 		if (event.key === 'Escape') {
	// 			onClose()
	// 		}
	// 	}
	// 	document.addEventListener('keydown', handleKeyDown)
	// 	return () => {
	// 		document.removeEventListener('keydown', handleKeyDown)
	// 	}
	// }, [onClose])

	return (
		<BackgroundModal onClick={onBackdropClick}>
			<ContentModal>
				<OptionModalMenu>
					<button onClick={onClose}>X</button>
				</OptionModalMenu>
				{children}
			</ContentModal>
		</BackgroundModal>
	)
}
