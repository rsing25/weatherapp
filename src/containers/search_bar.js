import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term : 'Phoenix'};
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term:event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        event.preventDefault();

    }

    render() {
        return (            
            <form className ="input-group">
            <input 
                placeholder="Get a five-day forcast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange.bind(this)}
            />
            <span className="input-group-btn">
                <button type ="button" className="btn btn-secondary" onClick = {this.onFormSubmit.bind(this)}  >Submit</button>
            </span>
            </form>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather },dispatch);
  };

export default connect(null, mapDispatchToProps)(SearchBar);