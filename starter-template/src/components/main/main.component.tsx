import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../home/home.component';

class Main extends React.Component {
    render() {
        return (
            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg10">
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Main;