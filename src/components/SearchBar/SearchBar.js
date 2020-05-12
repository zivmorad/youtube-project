import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component{

    state={
        userInput:'',
    }

    //change the user input as we type in the input feild
    onCangeInput=(e)=>{
        this.setState({userInput:e.target.value})
    }
    //pass the user input to the app component
    onFromSubmit=(e)=>{ 
        e.preventDefault();
        this.props.onSubmit(this.state.userInput);
    }

    render(){
        return(
            <form onSubmit={this.onFromSubmit} id="input-form">
                <label>Video Search </label>
                <input type="text" id="input" onChange={this.onCangeInput} value={this.state.userInput}/>
            </form>
        )
    }
}

export default SearchBar;