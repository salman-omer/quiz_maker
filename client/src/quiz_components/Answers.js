import React, {Component} from 'react';

class Answers extends Component {
    constructor(props){
        super(props);
        this.state = {
            answers: [],
            numAnswers: 0
        };

        this.handleAddAnswerClick = this.handleAddAnswerClick.bind(this);
        this.handleRemoveAnswerClick = this.handleRemoveAnswerClick.bind(this);
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


    handleAddAnswerClick(event){
        const num = this.state.numAnswers + 1;
        var tempAnswers = this.state.answers.concat('no Answer')
        this.setState({
            answers: tempAnswers,
            numAnswers: num
        });

    }

    handleAnswerChange(event, answerNum){
        const newAnswers = this.state.answers.map((key, index) => {
            if (answerNum === index) {
              return event.target.value;
            } else {
              return key;
            }
        });

        this.setState({
            answers: newAnswers
        });

    }

    handleRemoveAnswerClick(index){
        console.log(this.state.answers);
        console.log(index);
        const newAnswers = this.state.answers.filter((key, j) => j !== index);
        const newNumAnswers = this.state.numAnswers - 1;
        this.setState({
            answers: newAnswers,
            numAnswers: newNumAnswers
        });

        console.log(newAnswers)
        console.log(this.state.numAnswers);
    }

    render(){
        const answers = this.state.answers;

        return(
            <div>
                <form>
                    <label>
                    {answers.map((key, index) => (
                        <div key={index}>
                            Answer {index + 1}:
                            <input 
                                type="text" 
                                name={index} 
                                onChange={(event) => {this.handleAnswerChange(event, index)}}
                            />
                            <button onClick={() => {this.handleRemoveAnswerClick(index)}}>Remove Answer</button>
                        </div>
                    ))}
                    </label>
                </form>
                <button onClick={this.handleAddAnswerClick}>Add Answer</button>
           </div>
        )
    } 
  
}

export default Answers;