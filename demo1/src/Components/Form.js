import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comment:'',
             topic:'react'
        }
        // this.handleUsernameChange.bind(this);
        // this.handleCommentChange.bind(this);
    }
    handleUsernameChange= event =>{
        this.setState({
            userName:event.target.value
        })
    }
    handleCommentsChange= event =>{
        this.setState(
            {
                comment:event.target.value
            }
        )
    }
    handleTopicChange=event=>{ // if we use this the default value in the input area can be modified.
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=event=> {
  
                alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`) // after the alert message the page refreshes
                event.preventDefault() // this will not refresh the page
        
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label><b>UserName</b>  </label>
                <input type="text" value={this.state.userName} onChange={this.handleUsernameChange}/>
                </div>
                <br/>
                <div>
                <label><b>Comments</b> </label>
                <textarea value={this.state.comment} onChange={this.handleCommentsChange} ></textarea>
                </div>
                <br/>
                <div>
                <label><b>Topic</b> </label>
                <select value={this.state.topic} onChange={this.handleTopicChange} >
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                </select>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
