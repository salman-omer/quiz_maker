import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizRouter extends Component{
    constructor(){
        super()
        this.state = {
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
                <Link 
                    to={{pathname:"/quizzes/createQuiz"}}
                >
                    <button>Create Quiz</button>
                </Link>
            </div>
        )
    }
    
}
   

export default QuizRouter;