export const MobileMenu = () => {
	const links = ['About us', 'Promotion', 'Shop', 'Contacts']
	return (
		<div>
			{links.map(item => (
				<li key={item}>{item}</li>
			))}
			<div>Social links</div>
		</div>
	)
}
