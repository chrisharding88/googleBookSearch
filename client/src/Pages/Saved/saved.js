import React, {Component} from "react";
import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import {BookList, BookListItem} from "../components/BookList"

class Saved extends Component {

state = {
    books: []
}

componentDidMount(){
    this.loadBooks();
}

loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
}











}

export default Saved;