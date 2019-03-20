import React, { Component } from 'react';
import Question from '../quiz_components/Question';

class QuizContainer extends Component{
    constructor(){
        super()
        this.state = {
            selected: [],
            correct: []
        }
    }

    copyCurrentState = (current) => {
        console.log(current)
        this.setState({
            selected: current.selected,
            correct: current.correct
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Number of Correct Answers: ' + this.state.correct.filter(value => value).length)
    }

    render(){
        return(
            <form id="quiz-form" onSubmit={this.handleSubmit}>
            Hello
            <Question/>
            <input type="submit" value="Submit Quiz" />
            </form>
        )
    }
    
}
   

export default QuizContainer;