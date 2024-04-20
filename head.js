import React from "react";
import logo from "./Troll Face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="head-img"/>
            <h2 className="head-title">Header Component</h2>
            <h4 className="prj-name">React course _project 3</h4>
        </header>
    )
}