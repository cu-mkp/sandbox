import React from 'react';
import FrontPage from './frontpage'
import { Switch, Route } from "react-router-dom";



const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" component={FrontPage} />
            </Switch>
    );
};

export default Routes;