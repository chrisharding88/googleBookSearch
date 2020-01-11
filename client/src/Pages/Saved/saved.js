import React, {Component} from "react";
import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import {BookList, BookListItem} from "../components/BookList"
import {Link} from "react-router-dom";
import DeleteBtn from "../components/Button"

class Saved extends Component {

state = {
    books: []
    
}

componentDidMount(){
    this.getSavedBooks();
}

getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
}

handleDeleteBook = id =>{
    API.handleDeleteBook(id)
    .then(res => this.getSavedBooks())
    .catch(err => console.log(err))
}


render(){
    return(
        <div>
        <Container>
            <Row>
            <Jumbotron>
                <h1>Google Books Search</h1>
                <p></p>
                <LInk></LInk>
                <LInk></LInk>


            </Jumbotron>
            {this.state.books.length ? (
                <BookList>
                    {this.state.books.map(book => (
                        <BookListItem>
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

export default Saved;