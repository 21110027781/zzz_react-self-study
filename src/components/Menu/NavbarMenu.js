import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

const Menus = [
	{
		name: 'Trang chủ',
		to: '/',
		exact: true
	},
	{
		name: 'Sản phẩm',
		to: '/products',
		exact: false
	},
	{
		name: 'Liên hệ',
		to: '/contact',
		exact: false
	},
	{
		name: 'Quản lý',
		to: '/manage-product',
		exact: false
	}
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({ match }) => {
				var active = match ? 'active' : '';
				return (
					<Menu.Item as={Link} to={to} name={label} className={active} >
						{label}
					</Menu.Item>
					// <li className={active}>

					// <Link className="nav-link" to={to}>{label}</Link>
					// </li>
				);
			}}
		/>
	)
}


class NavbarMenu extends Component {
	showMenus = (menus) => {
		var result = null;
		if (menus.length > 0) {
			result = menus.map((menu, index) => {
				return (
					<MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeOnlyWhenExact={menu.exact}
					/>
				)
			})
		}
		return result;
	}

	render() {
		return (
			// <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			// 	<div className="container">
			// 		<a className="navbar-brand">
			// 			<svg className="d-block" width={36} height={36} viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false"><title>Bootstrap</title><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z" /><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z" /></svg>
			// 		</a>
			// 		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
			// 			<span className="navbar-toggler-icon" />
			// 		</button>
			// 		<div className="collapse navbar-collapse" id="navbarColor01">
			// 			<ul className="navbar-nav mr-auto">
			// 				{this.showMenus(Menus)}
			// 			</ul>
			// 			<div className="d-flex justify-content-end align-items-center">
			// 				<div>Cart <span className="btn btn-outline-success">0 san pham</span></div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </nav>
			<Menu inverted className="no-radius">
				<Container>
					{this.showMenus(Menus)}
					<Menu.Menu position='right'>
						<Menu.Item>
							Giỏ hàng 0 sản phẩm
						</Menu.Item>
					</Menu.Menu>
				</Container>
			</Menu>

		);
	}
}

export default NavbarMenu;