import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../containers/Home';
import Forum from '../containers/Forum';
import QuizRouter from './QuizRouter';
import AppNavbar from './AppNavbar';
import CreateQuiz from '../quiz_components/CreateQuiz';
import CreateAnnouncement from '../components/CreateAnnouncement';
import ViewAnnouncement from '../components/ViewAnnouncement';
import history from '../History';

const App = (props) => {
    return(
        <Provider store = {store}>
            <Router history={history}>
                <React.Fragment>
                <AppNavbar/>
                <Route exact path='/' component={Home} />
                <Route exact path='/forum' render={Forum} />
                <Route exact path='/quizzes' component={QuizRouter} />
                <Route exact path='/createQuiz' component={CreateQuiz} />
                <Route exact path='/announcements/new' component={CreateAnnouncement} />
                <Route exact path='/announcements/view' component={ViewAnnouncement} />
                </React.Fragment>    
            </Router>
        </Provider>
    );
};

export default App;
