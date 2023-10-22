import React, { createContext, useContext, useState } from 'react'
import { useModal } from '../hooks/useModal'
import { coffeeData } from '../assets/coffeeData'
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const { isOpen, toggleModal, content, close, typeOfModal } = useModal()
	const [cart, setCart] = useState([])

	const addToCart = coffee => {
		const item = cart.findIndex(item => item.id === coffee.id)
		if (item !== -1) {
			setCart(prevCart => prevCart.map(item => (item.id === coffee.id ? { ...item, count: item.count + 1 } : item)))
		} else {
			setCart(prevCart => [...prevCart, coffee])
		}
	}
	const deleteFromCart = id => {
		setCart(prevCart => prevCart.filter(coffee => coffee.id !== id))
	}
	const handleIncQuantity = id => {
		setCart(prev => prev.map(item => (item.id === id ? { ...item, count: item.count + 1 } : item)))
	}
	const handleDecQuantity = id => {
		const item = cart.find(item => item.id === id)
		if (item.count > 1) {
			setCart(prev => prev.map(item => (item.id === id ? { ...item, count: item.count - 1 } : item)))
		}
	}
	const totalCoffeeCounter = cart.reduce((acc, item) => {
		return acc + item.count
	}, 0)

	const totalCoffeePrice = cart.reduce((acc, item) => {
		return acc + item.price * item.count
	}, 0)

	const contextValue = {
		cart,
		typeOfModal,
		handleDecQuantity,
		handleIncQuantity,
		addToCart,
		deleteFromCart,
		isOpen,
		toggleModal,
		close,
		totalCoffeeCounter,
		totalCoffeePrice,
	}

	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export const useCart = () => {
	return useContext(CartContext)
}
