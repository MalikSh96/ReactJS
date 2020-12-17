import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             username: '',
             comments: '',
             topic: 'anime'
        };
    }
    
    handleUsernameChange = (event) => {
        //when you assign a handler to the onChange event, that event itself is passed as a parameter to the handler
        //from this event we can extract the value of the input element using event.target.value
        //so anytime you change the input value, that value is captured using event.target.value
        this.setState({
            username: event.target.value
        });
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        });
    }

    handleSubmit = (event) => {
        //for now we will just alert the values
        //at other times you would maybe push this data into some sort of database for example
        alert(
        `
            ${this.state.username} 
            ${this.state.comments} 
            ${this.state.topic}
        `)
        event.preventDefault(); //<-- prevents when you press submit, the input values from resetting in the input fields
    }

    render() {
        const {username, comments, topic} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="anime">Anime</option>
                        <option value="football">Football</option>
                        <option value="gaming">Gaming</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;
