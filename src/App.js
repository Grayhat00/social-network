import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login';

// let SomeComponent = () => <Dialogs />
function App(props) {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
          <div className='app-wrapper-content'>
            <Route exact path='/dialogs' 
                         render={ () => <DialogsContainer /> }/>
            <Route path='/profile/:userId?'
                        render={ () => <ProfileContainer /> } />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/users'
                     render= { () => <UsersContainer />} />
            <Route path='/login'
                     render= { () => <LoginPage />} />
          </div>
      </div>
  );
}

export default App;
