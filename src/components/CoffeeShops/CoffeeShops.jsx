import React from 'react'
import { Latte } from './Latte'
import { Espresso } from './Espresso'
import { Americano } from './Americano'
import { Cappuccino } from './Cappuccino'
import { StyledCoffeeSection } from './CoffeeShops.styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'
import { Filter } from './Filter'

export const CoffeeShops = () => {
	return (
		<StyledCoffeeSection>
			<Swiper
				slidesPerView={3}
				spaceBetween={10}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Espresso />
				</SwiperSlide>
				<SwiperSlide>
					<Latte />
				</SwiperSlide>
				<SwiperSlide>
					<Americano />
				</SwiperSlide>
				<SwiperSlide>
					<Cappuccino />
				</SwiperSlide>
				<SwiperSlide>
					<Filter />
				</SwiperSlide>
			</Swiper>
		</StyledCoffeeSection>
	)
}
