import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from './Home'
import page from './page'
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <div style={{width: '200px'}}>
                        <ul>
                            <li><Link to="/">About Us (static)</Link></li>
                            <li><Link to="/company">Company (static)</Link></li>
                        </ul>
                    </div>
                    <div style={{flex: 1}}>
                        <Switch>
                            <Route exact={true} path="/" component={Home}/>
                            <Route path="/company" component={page}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
