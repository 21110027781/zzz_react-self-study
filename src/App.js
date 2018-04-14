import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import CategoryList from './components/CategoryList/CategoryList';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Menu />
				<div className="container m-t-15">
					<div className="row">
						<div className="col-3">
							<CategoryList />
						</div>
						<div className="col-9">
							<ProductList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
