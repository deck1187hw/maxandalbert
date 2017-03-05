// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Settings from './components/Settings';
import Faq from './components/Faq';

const Routes = (props) => (

    <Router {...props}>
        <Route path="/app" component={App}>
            <Route path="/about" component={About} />
            <Route path="/settings" component={Settings} />
            
        </Route>
        
        <Route path="/" component={Home}>

        </Route>
        <Route path="/faq" component={Faq} />
        <Route path="*" component={NotFound} />
    </Router>
    
    
);

export default Routes;