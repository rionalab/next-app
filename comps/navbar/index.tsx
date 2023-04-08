import React from 'react';
import NavLink from '../navlink';
import style from './style.module.css';

function Navbar() {
   return (
      <div className={style.navbar}>
         <NavLink href="/">Home</NavLink>
         <NavLink href="/login">Login</NavLink>
         <NavLink href="/posts">Posts</NavLink>
         <NavLink href="/projects">Projects</NavLink>
         <NavLink href="/friends">friends</NavLink>
      </div>
   );
}

export default Navbar;
