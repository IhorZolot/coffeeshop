import styled from 'styled-components'
import './App.css'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Section } from './components/Section'

function App() {
	return (
		<>
			<Header />
			<Home />

			<Section
				$reverse
				text='Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam (cream) depends on how coffee and water are mixed.
Attention! The concepts of “American” and “American coffee” should not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared through a filter system.'
			/>
			<Section
				text='Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam (cream) depends on how coffee and water are mixed.
Attention! The concepts of “American” and “American coffee” should not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared through a filter system.'
			/>
		</>
	)
}

export default App
