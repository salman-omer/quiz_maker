import React, {Component} from 'react';
import Answers from './Answers';
import TimeField from 'react-simple-timefield';
import { Link } from 'react-router-dom';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: [''],
            numQuestions: 1,
            answers: [[]],
            correctAnswers: [-1 ],
            quizTitle: '',
            timeLimit: '00:00'
        };

        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleAddQuestionClick = this.handleAddQuestionClick.bind(this);
        this.handleRemoveQuestionClick = this.handleRemoveQuestionClick.bind(this);
        this.updateQuestionAnswerData = this.updateQuestionAnswerData.bind(this);
        this.changeQuizTitle = this.changeQuizTitle.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    handleQuestionChange(event, questionNum){
        const newQuestions = this.state.questions.map((key, index) => {
            if (questionNum === index) {
              return event.target.value;
            } else {
              return key;
            }
        });

        this.setState({
            questions: newQuestions
        });

        //console.log(this.state.questions);
    }

    handleAddQuestionClick(event){
        event.preventDefault();
        const num = this.state.numQuestions + 1;
        const tempQuestions = this.state.questions.concat('');
        const tempAnswers = this.state.answers.concat([[]]);
        const tempCorrectAnswers = this.state.correctAnswers.concat(-1);
        this.setState({
            questions: tempQuestions,
            numQuestions: num,
            answers: tempAnswers,
            correctAnswers: tempCorrectAnswers
        });

        console.log(tempCorrectAnswers);
    }

    handleRemoveQuestionClick(event, index){
        event.preventDefault();
        const newQuestions = this.state.questions.filter((_, j) => j !== index);
        const newAnswers = this.state.answers.filter((_, j) => j !== index);
        const newCorrectAnswers = this.state.correctAnswers.filter((_, j) => j !== index);
        const newNumQuestions = this.state.numQuestions - 1;
        this.setState({
            questions: newQuestions,
            numQuestions: newNumQuestions,
            answers: newAnswers,
            correctAnswers: newCorrectAnswers
        });

    }

    // update the answers for the inputted question number for this this.state.answer
    // passed into the child Answers component
    updateQuestionAnswerData(currAnswers, questionNumber, correctAnswer){
        const newAnswers = this.state.answers.map((key, index) => {
            if (questionNumber === index) {
              return currAnswers;
            } else {
              return key;
            }
        });

        const newCorrectAnswers = this.state.correctAnswers.map((key, index) => {
            if (questionNumber === index) {
              return correctAnswer;
            } else {
              return key;
            }
        });

        console.log(newCorrectAnswers);
        this.setState({
            answers: newAnswers,
            correctAnswers: newCorrectAnswers
        });

    }

    changeQuizTitle(event){
        this.setState({quizTitle: event.target.value});
    }

    handleTimeChange(time){
        this.setState({timeLimit: time});
    }
    render(){
        const questions = this.state.questions;
        return(
            <div>
                <form>
                    <label>
                        Quiz Title:
                        <input 
                                type="text" 
                                onChange={this.changeQuizTitle}
                                value={this.state.quizTitle}
                                style={{ width:"480px", marginLeft:"10px"}}
                        />
                        <br/><br/>
                    </label>
                    <label>
                    {questions.map((key, index) => (
                        <div key={index}>
                            <label style={{paddingRight:'10px'}}>
                            Question {index + 1}:
                            </label>
                            <input 
                                type="text" 
                                name={index} 
                                onChange={(event) => {this.handleQuestionChange(event, index)}}
                                value={key}
                                style={{ width:"480px", marginRight:"10px"}}
                            />
                            <button onClick={(event) => {this.handleRemoveQuestionClick(event, index)}}>Remove Question</button>
                            <Answers 
                                answers={this.state.answers[index]} 
                                updateQuestionAnswerData={this.updateQuestionAnswerData}
                                questionNumber={index}
                                correctAnswer={this.state.correctAnswers[index]}
                            />
                            <br/>
                            <br/>
                        </div>
                    ))}
                    </label>
                    <button onClick={this.handleAddQuestionClick}>Add Question</button>

                    <label>
                    <br/><br/>
                    Set Time Limit (hh:mm:ss):
                    <TimeField 
                        value={this.state.timeLimit} 
                        showSeconds={true} 
                        onChange={this.handleTimeChange} 
                        style={{marginLeft:'10px'}}
                    />
                    <br/><br/>
                    <button>Publish Quiz</button>
                </label>

                </form>

                <Link to="/gworug"><button>Go</button></Link>
           </div>
        )
    } 
  
}

export default Question;