import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
const Nav=(props)=> {


  return (
    <div className='topnav'>
        <NavLink to='/' exact='true'>Home</NavLink>
        <NavLink to='/manage-user'>Quản lý Nhân Viên</NavLink>
        <NavLink to='/history'>Lịch sử chấm công</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Nav