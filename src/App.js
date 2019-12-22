import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Navbar/Friends/Friends';
import { BrowserRouter, Route } from 'react-router-dom';
import {updateNewPostText} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

// let SomeComponent = () => <Dialogs />
function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar}/>
          <div className='app-wrapper-content'>
            <Route exact path='/dialogs' 
                         render={ () => <DialogsContainer store={props.store}/> }/>
            <Route path='/profile'  
                        render={ () => <Profile
                            store={props.store}/> } />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />

             <Route path='/friends' render={ () => <Friends state={props.state.sidebar} /> }/>
          </div>
      </div>
  );
}

export default App;
