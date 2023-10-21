import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [content, setContent] = useState(null)

	const close = () => {
		setIsOpen(false)
	}
	const toggleModal = item => {
		setIsOpen(prev => !prev)
		setContent(item)
	}
	return { isOpen, toggleModal, close, content }
}
