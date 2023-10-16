import { useEffect } from 'react'
import { BackgroundModal, ContentModal, StyledModalCloseButton } from './Modal.styled'
import { Sprite } from '../../../public/pictures/Sprite'

export const Modal = ({ children, onClose }) => {
	const onBackdropClick = event => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				onClose()
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClose])

	return (
		<BackgroundModal onClick={onBackdropClick}>
			<ContentModal>
			<StyledModalCloseButton onClick={onClose}>
				<Sprite name={'windows-close'} />
			</StyledModalCloseButton>
				{children}
			</ContentModal>
		</BackgroundModal>
	)
}
