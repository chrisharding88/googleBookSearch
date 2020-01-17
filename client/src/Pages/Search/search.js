import React, {Component} from "react";
import API from "../../Utils/API";
import {Col, Row, Container} from "../../Components/Grid";
import {SearchBar} from '../../Components/SearchBar/searchBar'
import{SearchBtn} from '../../Components/SearchBar/searchButton'
import Jumbotron from '../../Components/Jumbotron'
import{Link} from 'react-router-dom'
import {BookList, BookListItem} from '../../Components/BookList';
import {SaveBtn} from '../../Components/Button'

class Search extends Component{
    state = {
        showBooks: [],
        query: "",
        displayResults:false
    }
     
    
     
    
      handleInputChange = event => {
        console.log(event.target.name, event.target.value)
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.query) {
          const search = this.state.query.trim();
          API.getGoogleBooksSearch(search)
            .then(res => {
              console.log(res.data.items)
              this.setState({
                displayResults: true,
                showBooks: res.data.items
              })
        })     
          .catch(err => console.log(err));
      }

      };

   /*  saveBook = bookData => {
             bookData = {
             title: bookData.volumeInfo.title,
             author:bookData.volumeInfo.authors[0],
             description:bookData.volumeInfo.description,
             image:bookData.volumeInfo.imageLinks.thumbnail ? bookData.volumeInfo.imageLinks.thumbnail : null,
             date:bookData.volumeInfo.date,
           }
              console.log(this.state.showBooks);
              console.log("Book Saved")
            API.saveBook(bookData)
            .then(res => {
             const presentBooks = this.state.showBooks;
             const filterBooks = presentBooks.filter(book => book.id !== res.data.id);
             this.setState({showBooks: filterBooks})
        })
           .catch(err => console.log(err))
     }*/
    
// Create a separate that will query the database that has your saved books.
// In my search component, I need to remove the book that saved to the database from the DOM 



      render() {

        
        return (
            <div>
                    <Jumbotron>
                        <h1>Google Book Search</h1>
                        <h3></h3>
                     
                    </Jumbotron>
                    <Link type="button" className="btn btn-primary" to="/saved">Saved</Link>
                    <Link type="button" className="btn btn-primary" to="/">Search</Link>                                 
                <Container>
                    <Row>
                        <SearchBar 
                            value={this.state.searchInput}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Search Book Title"
                        />
                        <SearchBtn 
                            onClick={this.handleFormSubmit}
                            className="btn btn-primary"
                            buttonTitle="Search"
                        />
                    </Row>
                    <h2>Book Results</h2>
                    <BookList>
                        {this.state.showBooks.map((book, index) => (
                        <div>   
                         <BookListItem key={book.id}
                            image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : null}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors[0]}
                            description={book.volumeInfo.description}
                            date={book.volumeInfo.date}
                         
                         /> 
                   
                          {/* <SaveBtn  
                         key={book.id}
                         onClick={this.saveBook(book)} 
                      
                      />   */}
                    </div>                    
                               
                        )

                       
                               
                        )}

                        
                    </BookList>

                   
                    
                </Container>
            </div>


        )




      }

























}



























export default Search;
