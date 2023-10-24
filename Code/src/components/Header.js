import { useState } from "react";
import rlogo from "../assets/images/FoodOrderingLogo.jpg"
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact,setBtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={rlogo} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={
                        ()=>{
                            btnNameReact === "Login" ?
                            setBtnNameReact("Logout")
                            :setBtnNameReact("Login") ;
                        }
                    }>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;