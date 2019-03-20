import React, {Component} from 'react';

class CreateAnnouncement extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'Write ur announcement boy'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render(){
        const annoucenement = this.props.announcement
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Announcement:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
            <input type="submit" value="Submit" />
            </form>
        );
    } 
}

export default CreateAnnouncement;