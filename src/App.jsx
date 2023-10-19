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

export default function App() {
	const { isOpen, toggleModal, content, close } = useModal()
	
	return (
		<>
			<Header />
			<Home />
			<AboutUs />
			<Promotion toggleModal={toggleModal} />
			<CoffeeShops toggleModal={toggleModal} />
			<Contacts />
			{isOpen && (
				<Modal onClose={toggleModal}>
					<CoffeePurchaseModal close={close}  content={content} />
				</Modal>
			)}
		</>
	)
}
