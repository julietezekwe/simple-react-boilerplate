import React from 'react';
import { Link } from 'react-router-dom'


const HeaderComponent = () => {
  return (
    <>
    <Link to="/">Home</Link> <br />
    <Link to="/dashboard">Dashboard</Link><br />
    <Link to="/signup">Sign Up</Link><br />
    <Link to="/signin">Sign In</Link><br />
    </>
  )
}

export default HeaderComponent
