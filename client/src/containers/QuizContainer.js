import React, { Component } from 'react';
import Quiz from '../components/Quiz';
import {quiz} from '../data/Quizzes'
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
            <input type="submit" value="Submit Quiz" />
            </form>
        )
    }
    
}
   

export default QuizContainer;