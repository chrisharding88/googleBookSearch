import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';
import Saved from './Pages/Saved';
import ShowBooks from './Pages/ShowBooks/showBooks';
import NoMatch from './Pages/NoMatch/noMatch';
import Book from './Components/Book';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Search} />
						<Route exact path="/saved" component={Saved} />
						<Route exact path="/search" component={Search} />
						<Route exact path="/book/:id" component={Book} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
