import React from "react";
import { Link } from "react-router-dom";

import './style.css';

import Avatar from '../assets/img/avatar/1.jpg';
import Icon from "../components/icon";

const navList = [
    {
        icon: <Icon icon={"Home"} />,
        label: "Form 1",
        title: "Form 1",
        route: "./form1"
    },
    {
        icon: <Icon icon={"Home"} />,
        label: "Form 2",
        title: "Form 2",
        route: "./form2"
    },
    {
        icon: <Icon icon={"Home"} />,
        label: "Form 3",
        title: "Form 3",
        route: "./form3"
    }
]

export default function ({ children }) {
    return (
        <div className="layout">
            <nav>
                <div className="nav">
                    <menu>
                        <ul className="menu">
                            {navList.map((i, k) => (
                                <li key={k} className="menu-item">
                                    <Link title={i.title} to={i.route}>
                                        {i.icon}
                                    </Link>
                                </li>
                            ))}
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