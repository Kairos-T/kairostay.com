import {React, useState} from "react";
import "./Content.scss";
import {AiOutlineHome} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {BsCodeSlash, BsPersonLinesFill} from "react-icons/bs"

const Content = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <div className="nav">
            <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiOutlineHome/>
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <BiBook/>
            </a>
            <a
                href="#project"
                onClick={() => setActiveNav("#project")}
                className={activeNav === "#project" ? "active" : ""}
            >
                <BsCodeSlash/>
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <BsPersonLinesFill/>
            </a>
        </div>
    );
};

export default Content