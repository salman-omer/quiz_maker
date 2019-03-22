import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Forum from '../containers/Forum';
import QuizRouter from './QuizRouter';
import NavBar from '../containers/NavBar';
import CreateQuiz from '../quiz_components/CreateQuiz';

const App = (props) => {
    return(
        <Router>
            <React.Fragment>
             <NavBar/>
             <Route exact path='/' component={Home} />
             <Route exact path='/forum' render={Forum} />
             <Route exact path='/quizzes' component={QuizRouter} />
             <Route exact path='/quizzes/createQuiz' component={CreateQuiz} />
            </React.Fragment>    
        </Router>
    );
};

export default App;
