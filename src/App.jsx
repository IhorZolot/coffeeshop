import './App.css'
import { AboutUs } from './components/AboutUs/AboutUs'
import { CoffeeShops } from './components/CoffeeShops/CoffeeShops'
import { Contacts } from './components/Contacts/Contacts'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Promotion } from './components/Promotion/Promotion'

export default function App() {
	return (
		<>
			<Header />
			<Home />
			<AboutUs />
			<Promotion />
			<CoffeeShops />
			<Contacts />
			{/* <MobileMenu /> */}
		</>
	)
}
