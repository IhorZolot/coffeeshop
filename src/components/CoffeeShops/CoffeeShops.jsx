import React from 'react'
import { Latte } from './Latte'
import { Espresso } from './Espresso'
import { CoffeCard } from './CoffeCard'
import { Cappuccino } from './Cappuccino'
import { StyledCoffeeSection } from './CoffeeShops.styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'
import { Filter } from './Filter'
import { Mocco } from './Mocco'
import styled from 'styled-components'
import { coffeeData } from '../../assets/coffeeData'

export const CoffeeShops = ({ toggleModal }) => {
	return (
		<StyledCoffeeSection>
			<StyledSwiper
				slidesPerView={3}
				spaceBetween={45}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Pagination, Navigation]}
				className='mySwiper'
			>
				<StyledSlide>
					<CoffeCard onClick={toggleModal} title={coffeeData[1].title} desc={coffeeData[1].desc} />
				</StyledSlide>
				<StyledSlide>
					<Espresso />
				</StyledSlide>
				<StyledSlide>
					<Latte />
				</StyledSlide>
				<StyledSlide>
					<CoffeCard title={coffeeData[0].title} desc={coffeeData[0].desc} />
				</StyledSlide>
				<StyledSlide>
					<Cappuccino />
				</StyledSlide>
				<StyledSlide>
					<Filter />
				</StyledSlide>
			</StyledSwiper>
		</StyledCoffeeSection>
	)
}
const StyledSwiper = styled(Swiper)`
	margin: 0 auto;
	width: 100%;
	position: relative;
	z-index: 0;
	display: flex;
	gap: 5px;
`
const StyledSlide = styled(SwiperSlide)`
	display: flex;
	justify-content: center;
`
