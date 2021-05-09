import { Component } from "react";
import {NavItems} from "./NavItems";
import './css/Nav.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="NavContainer">
                <h1 className="logo"><a href='#'>CH</a></h1>
                <div className="NavItemsContainer">
                
                    <ul className="NavItems">
                    <a href='#'><i className="NavMenuBtn fas fa-bars"></i></a>
                        {NavItems.map((navItem, index) => {
                            return(
                                <li className="NavItem"><a href={navItem.link}>{navItem.heading.toUpperCase()}</a></li>
                            )
                        })}
                        
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar