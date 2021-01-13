import React from 'react';
import {Route} from 'react-router-dom';

import Login from '../components/login';
import Register from '../components/register';
import Movielist from '../components/movielist';

const BaseRouter = () => (
    <div>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/movieslist" component={Movielist} />
    </div>
)
export default BaseRouter;