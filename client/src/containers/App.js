import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Forum from '../containers/Forum';
import CreateAnnouncement from '../components/CreateAnnouncement';
import QuizContainer from '../containers/QuizContainer';
import NavBar from '../containers/NavBar';

const App = (props) => {
    return(
        <Router>
            <React.Fragment>
             <NavBar/>
             <Route exact path='/' component={Home} />
             <Route exact path='/forum' render={Forum} />
             <Route exact path='/quizzes' component={QuizContainer} />
             <Route exact path='/announcements/new' component={CreateAnnouncement} />
            </React.Fragment>    
        </Router>
    );
};

export default App;
