import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

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

	countItemInCart = (carts) => {
		var result = 0;
		if(carts.length){
			carts.map((cart, index) => {
				return result += cart.quantity;
			})
		}
		return result;
	}

	render() {
		return (
			<Menu inverted className="no-radius">
				<Container>
					{this.showMenus(Menus)}
					<Menu.Menu position='right'>
						<Menu.Item as={Link} to='/cart' name='cart'>
							Giỏ hàng có {this.countItemInCart(this.props.itemCarts)} sản phẩm
						</Menu.Item>
					</Menu.Menu>
				</Container>
			</Menu>

		);
	}
}

const mapStateToProp = (state) => {
	return {
		itemCarts: state.cartProductReducer
	}
}


export default connect(mapStateToProp, null)(NavbarMenu);