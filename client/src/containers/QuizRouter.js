import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class QuizRouter extends Component{
    constructor(){
        super()
        this.state = {
        }
    }

    componentDidMount(){
        console.log("AAAAAAAAAAAAAAAH");
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

    getQuizData = (event) => {
        console.log("in get quiz data");
        axios.get('http://localhost:3001/api/getQuizzes')
        .then(res => console.log(res.data));
    }

    render(){
        return(
            <div>
                <button onClick={this.getQuizData}>Fetch Data</button>
                <br/>
                <Link to="/createQuiz">
                    <button>Create New Quiz</button>
                </Link>
            </div>
        )
    }
    
}
   

export default QuizRouter;