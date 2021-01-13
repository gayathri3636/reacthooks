import React from 'react';
import {Route} from 'react-router-dom';

import Login from '../components/login';
import Register from '../components/register';
import Flagslist from '../components/flagsList';

const BaseRouter = () => (
    <div>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/flagslist" component={Flagslist} />
    </div>
)
export default BaseRouter;