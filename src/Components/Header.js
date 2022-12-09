import React from "react";

export default function Header() {
  return (
    <div className="head">
      <div
        className="change"
        style={{
          fontSize: "30px",
          textAlign: "center",
          margin: "20px 0",
          fontWeight: "bold",
        }}
      >
        {" "}
        WEATHER VISUALIZATION APPLICATION
      </div>
      {/* <div className="logs">
        <a href="/Login">
          <button className="btn-lg">Login</button>
        </a>
        <a href="/Signup">
          <button className="btn-sg">Sign up</button>
        </a>
      </div> */}
    </div>
  );
}
