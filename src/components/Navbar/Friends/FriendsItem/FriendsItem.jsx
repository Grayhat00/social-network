import React from 'react';
import s from './Friends.module.css';
import { NavLink } from 'react-router-dom';


const FriendsItem = (props) => {
    let friendElements = props.state.map (f => <Friends message= {f.name} />);
  return (
   {friendElements}
  )
}

export default FriendsItem;