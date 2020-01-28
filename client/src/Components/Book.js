import React, { Component } from 'react';
import API from '../Utils/API';

class Book extends Component {
	state = {
		bookId: this.props.match.params.id,
		book: {}
	};

	componentDidMount() {
		API.getBook(this.state.bookId).then((res) => this.setState({ book: res })).catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<h1>Book id: {this.state.bookId}</h1>
			</div>
		);
	}
}

export default Book;
