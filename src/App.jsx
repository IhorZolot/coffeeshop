import { useState } from 'react'
import './App.css'
import { AboutUs } from './components/AboutUs/AboutUs'
import { CoffeeShops } from './components/CoffeeShops/CoffeeShops'
import { Contacts } from './components/Contacts/Contacts'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Modal } from './components/Modal/Modal'
import { Promotion } from './components/Promotion/Promotion'
import { Button } from './components/Button/Button'
import { useModal } from './hooks/useModal'

export default function App() {
	const { isOpen, toggleModal } = useModal()
	return (
		<>
			<Header />
			<Home />
			<AboutUs />
			<Promotion toggleModal={toggleModal} />
			<CoffeeShops toggleModal={toggleModal} />
			<Contacts />
			{/* <MobileMenu /> */}
			{isOpen && (
				<Modal onClose={toggleModal}>
					<Button />
					<h1>Ти хочеш взяти каву</h1>
				</Modal>
			)}
		</>
	)
}
