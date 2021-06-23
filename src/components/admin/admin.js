import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
import Toolbar from 'react-minimalist-toolbar'
import { Link, Redirect } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Choose from './choose';
import CreatePost from './createPost';
import MyMagazins from './myMagazins';

export default function Admin() {
    return (
        <>
            {/* <Toolbar style={{ backgreondcolor: "red" }} brand={FontAwesomeIcon} brand="leader"> */}


            <FontAwesomeIcon  icon={["fas", "thumbtack"]} Link="/CHOOSE" />
            {/* <FontAwesomeIcon icon={["fas", "image"]} />  */}
           
            <FontAwesomeIcon icon={["fas", "user"]} />
            <FontAwesomeIcon icon={["fas", "bars"]} />

            <Router>
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


            {/* </Toolbar> */}
            {/* <i class="fa-solid fa-user"></i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        </>
    )
}