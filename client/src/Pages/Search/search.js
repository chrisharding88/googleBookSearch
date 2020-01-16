import React, {Component} from "react";
import API from "../../Utils/API";
import {Col, Row, Container} from "../../Components/Grid";
import {SearchBar} from '../../Components/SearchBar/searchBar'
import{SearchBtn} from '../../Components/SearchBar/searchButton'
import Jumbotron from '../../Components/Jumbotron'
import{Link, Redirect} from 'react-router-dom'

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



      render() {

        if (this.state.displayResults){
          return<Redirect to={{
            pathname: "/showBooks",
            data:{results: this.state.displayResults}
          }} />

        }
        
        return (
            <div>
                    <Jumbotron>
                        <h1>Google Book Search</h1>
                        <h3></h3>
                        <Link type="button" className="btn btn-primary" to="/saved">Saved</Link>
                        <Link type="button" className="btn btn-primary" to="/">Search</Link>
                    </Jumbotron>                                 
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

                    
                </Container>
            </div>


        )




      }

























}



























export default Search;
