import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container} from '../../Components/Grid';
import {BookList, BookListItem} from '../../Components/BookList';
import {SaveBtn} from "../../Components/Button"
import Jumbotron from "../../Components/Jumbotron"
import API from "../../Utils/API";


class showBooks extends Component {
    state ={
        books: [],
        target: "",
        noResults: false
    }


    componentDidMount() {
        const data = this.props.location.data;
        const bookDataResults = data.results;
        console.log(data.results.length)
        if (data && bookDataResults.length > 0){
          this.setState({
            books: bookDataResults.filter((value, index) => index < 5),
            target: "_blank"
        });
        } else {
        this.setState({noResults:true})
        }
    };

saveBook = book => {
    API.saveBook(book)
    .then (res => {
        const presentBooks = this.state.books;
        const filterBooks = presentBooks.filter(book => book.id !== res.data.id);
        this.setState({books: filterBooks})
    })
    .catch(err => console.log(err))
}

render () {
    const noResults = this.state.noResults
    const bookInfo = this.state.books.volumeInfo;

    if(noResults){
        return(
            <div>
                <Jumbotron>
                    <h1>Google Book Search</h1>
                    <Link type="button" className="btn btn-primary"to="/saved">Saved</Link>
                    <Link type="button" className="btn btn-primary" to="/">Search</Link> 
                </Jumbotron>

                <Container>
                    <Link to="/">No Results Are Showing. Click Here to Search Again</Link>
                </Container>
            </div>
        )
    }

        return(  
            <div>
                <Jumbotron>
                    <h1>Google Book Search</h1>
                    <Link type="button" className="btn btn-primary" to="/saved">Saved</Link>
                    <Link type="button" className="btn btn-primary" to="/">Search</Link> 
                </Jumbotron>

                <Container>
                    <h2>Book Results</h2>
                    <BookList>
                        {this.state.books.map((book, index) => (
                         <BookListItem key={book.id}>   
                            <div className="data-div">
                                <a
                                    key={"" + index + book.id}
                                    href={bookInfo.infoLink}
                                    target={this.state.target}
                                >
                                    {bookInfo.title}
                                </a>
                                <p>By: {bookInfo.author[0]}</p>
                                <img />
                                <p>{bookInfo.description}</p>
                            </div>

                            <div className="bookBtn">
                                <SaveBtn
                                     key={"" + index + book.id}
                                     btntype="info"
                                     disabled={bookInfo.infoLink ==="/"}
                                     onClick={() => this.saveBook({
                                       title: bookInfo.title,
                                       author: bookInfo.author,  
                                       description: bookInfo.description, 
                                       image: bookInfo.image,  
                                       link: bookInfo.infoLink,  
                                       _id: book.id 
 
                                     })}                              
                                >
                                    Save Book
                                </SaveBtn>
                            </div>
                         </BookListItem>
                        )           
                        )}
                    </BookList>
                </Container>
            </div>
        )









}


};

export default showBooks;