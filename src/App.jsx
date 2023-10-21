import './App.css'
import { AboutUs } from './components/AboutUs/AboutUs'
import { CoffeeShops } from './components/CoffeeShops/CoffeeShops'
import { Contacts } from './components/Contacts/Contacts'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Modal } from './components/Modal/Modal'
import { Promotion } from './components/Promotion/Promotion'
import { useModal } from './hooks/useModal'
import { CoffeePurchaseModal } from './components/Modal/CoffeePurchaseModal/CoffeePurchaseModal'
import { useCart } from './components/context/CartContext'

export default function App() {
	const { isOpen } = useCart()
	return (
		<>
			<Header />
			<Home />
			<AboutUs />
			<Promotion />
			<CoffeeShops />
			<Contacts />
			{isOpen && (
				<Modal>
					<CoffeePurchaseModal />
				</Modal>
			)}
		</>
	)
}
