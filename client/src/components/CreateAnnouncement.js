import React, {Component} from 'react';

class CreateAnnouncement extends Component {
    constructor(props){
        super(props)
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Submitted:' + this.state.value);
        event.preventDefault();
    }

    handleSave(event) {
        alert('Saved:' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Announcement:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
            <input type="submit" value="Submit" />   
            <input type="button" value="Save" /> 
            </form>
           
        );
    } 
}

export default CreateAnnouncement;