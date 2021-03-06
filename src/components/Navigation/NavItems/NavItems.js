import React from 'react';
import NavItem from './NavItem';
import {Nav} from '../../../styled/Navigation/NavStyling';

const navigationItems = (props) => (
  <Nav>
    <NavItem link="/" exact>Burger Builder</NavItem>
    {props.isAuth ? <NavItem link="/orders">Orders</NavItem> : null}
    {!props.isAuth 
      ? <NavItem link="/auth">Authenticate</NavItem> 
      : <NavItem link="/logout">Logout</NavItem>}
  </Nav>
);

export default navigationItems;
