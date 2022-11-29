import React from 'react'
import styles from "./Mainview.css";


export default function Mainview() {
  return (
    <div className="main">
       <a href="N1view"> <button className="n1">N1 View</button></a>
        <a href="N2view"><button className="n2">N2 View</button></a>
        <a href="N3view"><button className="n3">N3 View</button></a>
        
    </div>
  )
}
