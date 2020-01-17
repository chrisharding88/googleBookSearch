import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container} from '../../Components/Grid';
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
    


render () {
    const noResults = this.state.noResults

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

        
    
    








}


};

export default showBooks;