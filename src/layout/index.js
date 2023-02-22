import React from "react";
import { Link } from "react-router-dom";

import './style.css';

import Avatar from '../assets/img/avatar/avatar.png';
import Icon from "../components/icon";

const navList = [
    {
        icon: <Icon icon={"Add"} size={"24px"} />,
        label: "Form 1",
        title: "Form 1",
        route: "./form1"
    },
    {
        icon: <Icon icon={"UserAdd"} size={"24px"} />,
        label: "Form 1",
        title: "Form 1",
        route: "./form1"
    },
    {
        icon: <Icon icon={"UserAdd"} size={"24px"} />,
        label: "Form 1",
        title: "Form 1",
        route: "./form1"
    },
    {
        icon: <Icon icon={"UserEdit"} size={"24px"} />,
        label: "Form 2",
        title: "Form 2",
        route: "./form2"
    },
    {
        icon: <Icon icon={"Monitor"} size={"24px"} />,
        label: "Form 3",
        title: "Form 3",
        route: "./form3"
    },
    {
        icon: <Icon icon={"Windows"} size={"24px"} />,
        label: "Form 3",
        title: "Form 3",
        route: "./form3"
    },
    {
        icon: <Icon icon={"Code"} size={"24px"} />,
        label: "Form 3",
        title: "Form 3",
        route: "./form3"
    },
    {
        icon: <Icon icon={"People"} size={"24px"} />,
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