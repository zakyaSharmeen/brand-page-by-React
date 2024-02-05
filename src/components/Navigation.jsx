import React from "react";

export default function Navigation() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./images/brand_logo.png"></img>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Contact</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}
