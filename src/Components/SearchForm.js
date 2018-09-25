import React, { Component } from 'react';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keywordsTyped: ''
        }
    }

    
    displayAddUserBtn = () => {
        if (this.props.isDisplayForm) {
            return(
                <div className="btn btn-danger" onClick={() => this.props.changeisDisplayForm()}>Close Now</div>
            );
        }
        else {
            return (
                <div className="btn btn-primary" onClick={() => this.props.changeisDisplayForm()}>Add Now</div>
            );
        }
    }

    searchFormIsChange = (event) => {
        this.setState({
            keywordsTyped: event.target.value
        });
        this.props.getKeywordsTyped(this.state.keywordsTyped);
    }

    

    render() {
        
        return (
            <div className="container">
                <div className="um-search-box">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" placeholder="Type keywords"
                                onChange={(event) => this.searchFormIsChange(event)}    
                            />
                            <button className="btn btn-primary" 
                                onClick={(keywordsTyped) => this.props.getKeywordsTyped(this.state.keywordsTyped)}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="um-btn-add-user">
                    { this.displayAddUserBtn()}                    
                </div>
            </div>
        );
    }
}

export default SearchForm;