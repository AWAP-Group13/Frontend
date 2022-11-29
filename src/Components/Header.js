
import React from "react";
import styles from "./Header.css";


export default function Header() {
  return (
    <div className="head">
    <div className="change"> WEATHER VISUALIZATION APPLICATION</div>
    <div className="logs">
      <a href="/Login">
   <button className="btn-lg">Login</button>
   </a>
   <a href="/Signup">
      <button className="btn-sg">Sign up</button>
      </a>
      </div>
    </div>
  )
}
