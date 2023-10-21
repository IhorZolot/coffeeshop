import { useEffect } from 'react'
import { BackgroundModal, ContentModal, StyledModalCloseButton } from './Modal.styled'
import { Sprite } from '/public/pictures/Sprite'
import { useCart } from '../context/CartContext'

export const Modal = ({ children }) => {
	const { toggleModal } = useCart()
	const onBackdropClick = event => {
		if (event.target === event.currentTarget) {
			toggleModal()
		}
	}

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				toggleModal()
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleModal])

	return (
		<BackgroundModal onClick={onBackdropClick}>
			<ContentModal>
				<StyledModalCloseButton onClick={toggleModal}>
					<Sprite name={'windows-close'} />
				</StyledModalCloseButton>
				{children}
			</ContentModal>
		</BackgroundModal>
	)
}
