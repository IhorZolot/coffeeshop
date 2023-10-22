import React from 'react'
import MediaQuery from 'react-responsive'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { StyledCoffeeSection, StyledSwiper, SwiperContainer } from './CoffeeShops.styled'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { CoffeCard } from './CoffeCard'
import { CoffeeShopsMobile } from './CoffeeShopsMobile'

import { coffeeData } from '../../assets/coffeeData'

export const CoffeeShops = () => {
	const slides = coffeeData.map((coffee, id) => (
		<SwiperSlide key={id}>
			<CoffeCard product={coffee} />
		</SwiperSlide>
	))
	return (
		<StyledCoffeeSection id='Shop'>
			<MediaQuery maxWidth={1279}>
				<CoffeeShopsMobile />
			</MediaQuery>
			<MediaQuery minWidth={1280}>
				<SwiperContainer>
					<FcPrevious className='prevSlide' />
					<FcNext className='nextSlide' />
					<StyledSwiper
						slidesPerView={3}
						spaceBetween={15}
						loop={true}
						pagination={{
							clickable: true,
						}}
						navigation={{
							nextEl: '.nextSlide',
							prevEl: '.prevSlide',
						}}
						modules={[Pagination, Navigation]}
					>
						{slides}
					</StyledSwiper>
				</SwiperContainer>
			</MediaQuery>
		</StyledCoffeeSection>
	)
}
