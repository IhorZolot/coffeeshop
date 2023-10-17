import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
export const SwiperContainer = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
`
export const StyledCoffeeSection = styled.section`
	margin-bottom: 40px;
	@media screen and (min-width: 1280px) {
		background-color: ${({ theme }) => theme.colors.ligthGreen};
		/* display: block; */
		/* flex-direction: row; */
		padding: 44px 20px;
		margin-bottom: 130px;
	}
`
export const StyledCoffeeCard = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 44px 0;
	/* width: 100%; */
	height: 458px;
	border-radius: 25px;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 23px 34px 0px rgba(35, 57, 55, 0.17);
	
	@media screen and (min-width: 1280px) {
		/* margin-bottom: 0; */
		box-shadow: 0px 0 5px 1px rgba(35, 57, 55, 0.17);
		/* width: 80%; */

	}
`
export const StyledTitleCard = styled.h3`
	margin-bottom: 32px;
	font-family: ${({ theme }) => theme.fonts.josefine};
	color: ${({ theme }) => theme.colors.black};
	font-size: 28px;
`
export const StyledTextCard = styled.p`
	font-family: ${({ theme }) => theme.fonts.alegreya};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 19px;
	text-align: center;
	align-items: center;
	flex-grow: 1;
	width: 248px;
	line-height: 36px;
`
export const StyledButtonCard = styled.button`
	margin-top: auto;
	width: 210px;
	align-self: center;
`
export const StyledSwiper = styled(Swiper)`
	/* margin: 0 auto; */
	width: 90%;
	overflow-y: visible;
	padding: 30px 0px;
	position: relative;
	z-index: 0;
	/* display: flex; */
	gap: 5px;
`
export const StyledSlide = styled(SwiperSlide)`
	display: flex;
	justify-content: center;
`
export const StyledCardList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;
`
