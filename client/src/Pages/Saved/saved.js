import React, {Component} from "react";
import API from "../../Utils/API"
import {Col, Row, Container} from "../../Components/Grid";
import {BookList, BookListItem} from "../../Components/BookList"
import {Link, withRouter} from "react-router-dom";
import DeleteBtn from "../../Components/Button"
import Jumbotron from '../../Components/Jumbotron'

class Saved extends Component {

state = {
    books: []
    
}

componentDidMount(){
    this.getSavedBooks();
}

getSavedBooks = () => {
    API.getBooks()
      .then(res => {this.setState({books: res.data})
      console.log(res)})
      .catch(err => console.log(err))
}

handleDeleteBook = id =>{
    API.deleteBook(id)
    .then(res => this.getSavedBooks())
    .catch(err => console.log(err))
}


render(){
    return(
        <div>
        
                <Jumbotron>
                     <h1>Google Book Search</h1>
                </Jumbotron>
           <Container>
            <Link type="button" className="btn btn-primary"to="/" >Saved</Link>
            <Link type="button" className="btn btn-primary" to="/search">Search</Link>
            <Row>
            {this.state.books.length ? (
                <BookList>
                    {this.state.books.map(book => (
                        <BookListItem key={book._id}>
                            <Link to={`/books/${book._id}`}>
                                <strong>
                                    {book.title} by {book.author}
                                </strong>
                            </Link>
                            
                            <DeleteBtn onClick={() => this.handleDeleteBook(book._id)}></DeleteBtn>
                        </BookListItem>                    
                    ))}
                </BookList>
            ): (
                <h2>No more results left</h2>
            )}
            </Row>
         </Container>

        </div>
    )
}








}

export default withRouter(Saved);