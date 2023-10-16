import React from 'react'
import MediaQuery from 'react-responsive'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { StyledCoffeeSection, StyledSwiper } from './CoffeeShops.styled'

import { coffeeData } from '../../assets/coffeeData'
import { CoffeCard } from './CoffeCard'
import { CoffeeShopsMobile } from './CoffeeShopMobile'

export const CoffeeShops = ({ toggleModal }) => {
	const slides = coffeeData.map((coffee, id) => (
		<SwiperSlide key={id}>
			<CoffeCard onClick={toggleModal} title={coffee.title} desc={coffee.desc} />
		</SwiperSlide>
	))
	return (
		<StyledCoffeeSection id='Shop'>
			<MediaQuery maxWidth={1279}>
				<CoffeeShopsMobile toggleModal={toggleModal} />
			</MediaQuery>
			<MediaQuery minWidth={1280}>
				<StyledSwiper
					slidesPerView={3}
					spaceBetween={15}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					// className='mySwiper'
				>
					{slides}
				</StyledSwiper>
			</MediaQuery>
		</StyledCoffeeSection>
	)
}
