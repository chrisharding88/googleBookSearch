import React, {Component} from "react";
import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import {BookList, BookListItem} from "../components/BookList"

class Search extends Component {

state = {
  title: "",
  results: []
}

componentDidMount(){
    this.loadBooks();
}



handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value})
}

handleFormSubmit = event => {
    event.preventDefault();
}

















}

export default Search;
