import React, { Component } from 'react';
import Question from '../quiz_components/CreateQuiz';
import { Link } from 'react-router-dom';

class QuizRouter extends Component{
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
            <div>
                <Link to="/about"><button>Create Quiz</button></Link>
                <Question/>
            </div>
        )
    }
    
}
   

export default QuizRouter;