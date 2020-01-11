import React, {Component} from "react";
import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import {BookList, BookListItem} from "../components/BookList"
import {searchBar, searchBtn} from '../componens/SearchBar'

class Search extends Component{
    state = {
        title: ""
    }


    componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", synopsis: "" })
          )
          .catch(err => console.log(err));
      };
    
     
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveBook({
            title: this.state.title,
            author: this.state.author,
            description: this.state.description
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };



      render() {
        return (
            <div>
                <Container>
                    <Row>
                    <Jumbotron>
                        <h1>Google Book Search</h1>
                        <h3></h3>
                        <Link></Link>
                        <Link></Link>
                    </Jumbotron>
                        <searchBar 
                            value={this.state.title}
                            onChange = {this.handleInputChange()}
                            name="title"
                        />
                        <searchBtn 
                            onClick = {this.handleFormSubmit()}
                            className = "btn btn-primary"
                        />
                        
                    </Row>
                </Container>
            </div>


        )




      }

























}



























export default Search;
