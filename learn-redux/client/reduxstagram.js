// let's go!
import React from 'react';
import { render } from 'react-dom';

//Import css
import css from './styles/style.styl';

//Import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

//Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, {history} from './store';
// import Raven from 'raven-js';
import { sentry_url, logException } from './config';

Raven.config(sentry_url).install();


const router = (
    <Provider store={store}>    
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));