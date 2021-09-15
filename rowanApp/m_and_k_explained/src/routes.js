import React from 'react';
import FrontPage from './frontpage'
import ManuscriptPage from './manuscriptpage'
import { Switch, Route } from "react-router-dom";
import ExperimentsPage from './experimentspage';
import ProcessPage from './processpage';



const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" component={FrontPage} />
                <Route path="/manuscript" component={ManuscriptPage} />
                <Route path="/experiments" component={ExperimentsPage} />
                <Route path="/process" component={ProcessPage} />
            </Switch>
    );
};

export default Routes;