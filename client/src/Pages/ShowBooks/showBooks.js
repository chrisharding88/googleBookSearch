import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../Components/Grid';
import Jumbotron from '../../Components/Jumbotron';
import { BookList, BookListItem } from '../../Components/BookList';
import API from '../../Utils/API';

class showBooks extends Component {
	state = {
		books: []
	};

	componentDidMount() {
		API.getBooks()
			.then((res) =>
				this.setState({
					books: res.data
				})
			)
			.catch((err) => console.log(err));
		console.log(this.state.books);
	}

	render() {
		return (
			<BookList>
				{this.state.books.map((book, index) => (
					<div>
						<BookListItem
							key={book.id}
							// image={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : null}
							title={book.title}
							author={book.author[0]}
							description={book.description}
							date={book.date}
						/>
					</div>
				))}
			</BookList>
		);
	}
}

export default showBooks;
