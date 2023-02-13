import React from "react";

import './style.css';

import Avatar from '../assets/img/avatar/1.jpg';

export default function ({ children }) {
    return (
        <div className="layout">
            <nav>
                <div className="nav">
                    <menu>
                        <ul className="menu">
                            <li className="menu-item">
                                <a>+</a>
                            </li>
                            <li className="menu-item">
                                <a>+</a>
                            </li>
                            <li className="menu-item">
                                <a>+</a>
                            </li>
                            <li className="menu-item">
                                <a>+</a>
                            </li>
                            <li className="menu-item">
                                <a>+</a>
                            </li>
                            <li className="menu-item">
                                <a>+</a>
                            </li>
                            <li className="menu-item">
                                <a>+</a>
                            </li>
                        </ul>
                    </menu>
                    <div className="account">
                        <div className="avatar">
                            <img src={Avatar} />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                {
                    children
                }
            </div>
        </div>
    )
}