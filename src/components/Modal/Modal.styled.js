import styled from 'styled-components'

export const BackgroundModal = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(5px);
	z-index: 9999;
`
export const ContentModal = styled.div`
	width: 90vw;
	background: ${({ theme }) => theme.colors.sectionCreamy};
	border: none;
	padding: 18px 16px;
	border-radius: 15px;
`
export const StyledModalCloseButton = styled.div`
	display: flex;
	margin-bottom: 10px;
	justify-content: end;
	cursor: pointer;
	background-color: none;
`
export const OptionModalMenu = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px 25px;
`
