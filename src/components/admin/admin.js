import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
import Toolbar from 'react-minimalist-toolbar'
import Nav from './comps/nav/nav'

import { Link, Redirect } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Choose from './choose';
import CreatePost from './createPost';
import MyMagazins from './myMagazins';

const Admin=()=> {
    return (
        <>
            <Nav/>
           

        </>
    )
}

export default Admin;