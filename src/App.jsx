import './App.css'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Americano } from './components/CoffeeCards/Americano'
import { Cappuccino } from './components/CoffeeCards/Cappuccino'
import { Espresso } from './components/CoffeeCards/Espresso'
import { Latte } from './components/CoffeeCards/Latte'
import { Contacts } from './components/Contacts/Contacts'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Promotion } from './components/Promotion/Promotion'

export default function App() {
	return (
		<>
			{/* <MobileMenu /> */}
			<Header />
			<Home />
			<AboutUs />
			<Promotion />
			<Espresso />
			<Latte />
			<Americano />
			<Cappuccino />
			<Contacts />

			{/* <Section
				$reverse
				text='Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam (cream) depends on how coffee and water are mixed.
Attention! The concepts of “American” and “American coffee” should not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared through a filter system.'
			/> */}
			{/* <Section
				text='Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam (cream) depends on how coffee and water are mixed.
Attention! The concepts of “American” and “American coffee” should not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared through a filter system.'
			/> */}
		</>
	)
}
