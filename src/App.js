import React from 'react';
import './App.css';
import Admin from './components/admin/admin';
import Choose from './components/admin/choose';
import MyMagazins from './components/admin/myMagazins';
import CreatePost from './components/admin/createPost';
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Admin />

      </Provider>
    </div>
  )
}
export default App;

