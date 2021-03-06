import React, { Component } from 'react';
import MenuNavBar from './components/Menu/NavbarMenu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';




class App extends Component {
	showContentMenu = (routes) => {
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				)
			});
		}
		return <Switch>{result}</Switch>
	}
	render() {
		return (
			<Router>
				<div className="App">
					<MenuNavBar />
					<div className="m-t-15">
						{this.showContentMenu(routes)}
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
