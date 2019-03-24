import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store'

import Home from '../containers/Home';
import Forum from '../containers/Forum';
import CreateAnnouncement from '../components/CreateAnnouncement';
import ViewAnnouncement from '../components/ViewAnnouncement';
import QuizContainer from '../containers/QuizContainer';
import AppNavbar from './AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {
    return(
        <Provider store = {store}>
            <Router>
                <React.Fragment>
                <AppNavbar/>
                <Route exact path='/' component={Home} />
                <Route exact path='/forum' render={Forum} />
                <Route exact path='/quizzes' component={QuizContainer} />
                <Route exact path='/announcements/new' component={CreateAnnouncement} />
                <Route exact path='/announcements/view' component={ViewAnnouncement} />
                </React.Fragment>    
            </Router>
        </Provider>
    );
};

export default App;
