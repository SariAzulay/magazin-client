import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './nav.css'

import { Link, Redirect } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreatePost from '../../createPost';
import MyMagazins from '../../myMagazins';
import Choose from '../../choose';
import Aside from '../../aside';

const Nav = (props) => {

    return (
        <>
         
        <div className="icons">        
        <FontAwesomeIcon icon={["fas", "user"]} className="icon"/>
            <FontAwesomeIcon icon={["fas", "thumbtack"]} className="icon"/>
            <FontAwesomeIcon icon={["fas", "bars"]} className="icon"/>

        </div>
        <div className="emp"></div>
        <Router id="float">
                <Switch>
                <Route path="/admin/choose">
                    <Choose/>
                </Route>
                <Route path="/admin/mymagazins">
                    <MyMagazins/>
                </Route>
                <Route path="/admin/createpost">
                    <CreatePost/>
                </Route>
                <Route path="/">
                    <Redirect to="/admin/choose"></Redirect>
                </Route>
                </Switch>
            </Router>
       

        </>
    );
}


export default Nav;