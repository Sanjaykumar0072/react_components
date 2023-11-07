import react, { useState } from "react";
import {NavLink} from 'react-router-dom';

export default function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <div>
                <nav className="menubar" onClick={e => e.stopPropagation()}>
                    <div className="button-container">
                        <ul className={click ? "button-menu active" : "button-menu"}>
                            <li className="button-item">
                                <NavLink
                                    exact="true"
                                    to="/"
                                    className="button-links"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="button-item">
                                <NavLink
                                    exact="true"
                                    to="/playlist"
                                    className="button-links"
                                >
                                    Video-Playlist
                                </NavLink>
                            </li>
                            <li className="button-item">
                                <NavLink
                                    exact="true"
                                    to="/contact"
                                    className="button-links"
                                >
                                    ContactUs
                                </NavLink>
                            </li>
                            <li className="button-item">
                                <NavLink
                                    exact="true"
                                    to="/captcha"
                                    className="button-links"
                                >
                                    Captcha
                                </NavLink>
                            </li>
                            <li className="button-item">
                                <NavLink
                                    exact="true"
                                    to="/navmenu"
                                    className="button-links"
                                >
                                    NavMenu
                                </NavLink>
                            </li>
                            <li className="button-item">
                                <NavLink
                                    exact="true"
                                    to="/tabs"
                                    className="button-links"
                                >
                                    ReactTabs
                                </NavLink>
                            </li>
                            <li className="button-item">
                                <NavLink
                                    exact="true"
                                    to="/emailsignature"
                                    className="button-links"
                                >
                                    EmailSignature
                                </NavLink>
                            </li>
                            <li className="button-item">
                                <NavLink
                                    exact="true"
                                    to="/infinityslider"
                                    className="button-links"
                                >
                                    Infinity Slider
                                </NavLink>
                            </li>
                            <li className="button-item">
                                <NavLink
                                    exact="true"
                                    to="/carousal"
                                    className="button-links"
                                >
                                    Carousal
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </ div>
        </>
    )
}