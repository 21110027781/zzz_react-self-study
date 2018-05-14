import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import Cart from './Cart';

const menus = [
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
	},
	{
		name: 'Giỏ hàng',
		to: '/cart',
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
				if(to === '/cart'){
					return (
						<Cart activeClass={active} />
					);
				}else{
					return (
						<Menu.Item as={Link} to={to} className={active} >
							{label}
						</Menu.Item>
					);
				}
			}}
		/>
	)
}


class MenuNavBar extends Component {

	showMenus = (menus) => {
        var result;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (<MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />)
            });
        }
        return result;
    }

	

	render() {
		return (
			<Menu inverted className="no-radius">
				<Container>
					{this.showMenus(menus)}
					{/* <Cart /> */}
				</Container>
			</Menu>
		);
	}
}


export default MenuNavBar;
