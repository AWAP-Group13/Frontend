import React from 'react'
import {Outlet,Link} from "react-router-dom";


export default function Layout() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/N1view">N1 View page</Link>
        </li>
        <li>
          <Link to="/N2view">N2 View page</Link>
        </li>
        <li>
          <Link to="/N3view">N3 view page</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  )
}
