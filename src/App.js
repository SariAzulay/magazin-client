import React from 'react';
import './App.css';
import Admin from './components/admin/admin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Choose from './components/admin/choose';
import MyMagazins from './components/admin/myMagazins';
import CreatePost from './components/admin/createPost';



function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/CHOOSE">
            <Choose/>
          </Route>
          <Route path="/MYMAGAZINGS">
            <MyMagazins/>
          </Route>
          <Route path="/CREATEPOST">
            <CreatePost/>
          </Route>
        </Switch>
      </Router>
      


      <Admin/>
    </div>

  
)
  }
export default App;

