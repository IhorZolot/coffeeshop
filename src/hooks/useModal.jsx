import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	//const [conte, setIsOpen] = useState(false)

	const toggleModal = () => {
		setIsOpen(prev => !prev)
	}
	return { isOpen, toggleModal }
}
