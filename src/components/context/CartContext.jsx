import React, { createContext, useContext, useState } from 'react'
import { useModal } from '../../hooks/useModal'
import { coffeeData } from '../../assets/coffeeData'
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const { isOpen, toggleModal, content, close } = useModal()
	const [cart, setCart] = useState(coffeeData)

	const addToCart = coffee => {
		setCart(prevCart => [...prevCart, coffee])
	}
	const deleteFromCart = id => {
		setCart(prevCart => prevCart.filter(coffee => coffee.id !== id))
	}

	const contextValue = { cart, addToCart, deleteFromCart, isOpen, toggleModal, close }

	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export const useCart = () => {
	return useContext(CartContext)
}
