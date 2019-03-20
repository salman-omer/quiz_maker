import React, {Component} from 'react';
import Answers from './Answers';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            question: 'none'
        };

        this.handleQuestionChange = this.handleQuestionChange.bind(this);
    }

    handleClick = (questionNum , answerPicked, isCorrect) => {
        let newSelect = this.state.selected.slice();
        let newCorrect = this.state.correct.slice();
        newSelect[questionNum] = answerPicked;
        newCorrect[questionNum] = isCorrect;
        this.setState({
            selected: newSelect,
            correct: newCorrect
        })
        this.props.getCurrentState({
            selected: newSelect,
            correct: newCorrect
        });
    }

    handleQuestionChange(event){
        this.setState({question: event.target.value});
        console.log(event);
    }

    render(){
        
        return(
            <div>
                <form>
                    <label>
                        Question:
                        <input type="text" name="Input Question" onChange={this.handleQuestionChange}/>
                        <br/>
                    </label>
                </form>
                <Answers/>
                Question!<br/>
                Answers!
           </div>
        )
    } 
  
}

export default Question;