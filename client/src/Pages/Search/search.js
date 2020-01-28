import React, { Component } from 'react';
import API from '../../Utils/API';
import { Col, Row, Container } from '../../Components/Grid';
import { SearchBar } from '../../Components/SearchBar/searchBar';
import { SearchBtn } from '../../Components/SearchBar/searchButton';
import Jumbotron from '../../Components/Jumbotron';
import { Link } from 'react-router-dom';
import { BookList, BookListItem } from '../../Components/BookList';
import { SaveBtn } from '../../Components/Button';

class Search extends Component {
	state = {
		showBooks: [],
		query: '',
		displayResults: false,
		saveId: ''
	};

	saveId = (id) => {
		this.setState({ saveId: id });
	};

	handleInputChange = (event) => {
		console.log(event.target.name, event.target.value);
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		if (this.state.query) {
			const search = this.state.query.trim();
			API.getGoogleBooksSearch(search)
				.then((res) => {
					console.log(res.data.items);
					this.setState({
						displayResults: true,
						showBooks: res.data.items
					});
				})
				.catch((err) => console.log(err));
		}
	};

	saveBook = (id) => {
		const book = this.state.showBooks.filter((x) => x.id === this.state.saveId);

		const newBook = {
			title: book.volumeInfo.title,
			author: book.volumeInfo.authors[0],
			description: book.volumeInfo.description,
			image: book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : null,
			date: book.volumeInfo.date
		};

		API.saveBook(newBook)
			.then((res) => {
				const presentBooks = this.state.showBooks;
				const filterBooks = presentBooks.filter((book) => book.id !== res.data.id);
				this.setState({ showBooks: filterBooks });
			})
			.catch((err) => console.log(err));
	};

	// Create a separate that will query the database that has your saved books.
	// In my search component, I need to remove the book that saved to the database from the DOM

	render() {
		return (
			<div>
				<Jumbotron>
					<h1>Google Book Search</h1>
					<h3 />
				</Jumbotron>
				<Link type="button" className="btn btn-primary" to="/saved">
					Saved
				</Link>
				<Link type="button" className="btn btn-primary" to="/">
					Search
				</Link>
				<Container>
					<Row>
						<SearchBar
							value={this.state.searchInput}
							onChange={this.handleInputChange}
							name="title"
							placeholder="Search Book Title"
						/>
						<SearchBtn onClick={this.handleFormSubmit} className="btn btn-primary" buttonTitle="Search" />
					</Row>
					<h2>Book Results</h2>

					{this.state.showBooks.map((book, index) => (
						<div key={index}>
							<BookListItem
								image={
									book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : null
								}
								title={book.volumeInfo.title}
								author={book.volumeInfo.authors[0]}
								description={book.volumeInfo.description}
								date={book.volumeInfo.date}
							/>

							<Link to={`/book/${book.id}/${book.volumeInfo.title}`}>View</Link>
						</div>
					))}
				</Container>
			</div>
		);
	}
}

export default Search;
