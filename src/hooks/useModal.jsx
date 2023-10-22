import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	//const [content, setContent] = useState(null)
	const [typeOfModal, setTypeOfModal] = useState('')
	const close = () => {
		setIsOpen(false)
		setTypeOfModal('')
	}
	const toggleModal = ({ type }) => {
		setTypeOfModal(type)
		setIsOpen(prev => !prev)
		//setContent(item)
	}
	return { isOpen, toggleModal, close, typeOfModal }
}
