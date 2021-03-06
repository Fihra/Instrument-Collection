import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render(){
        return(
            <div className="nav-bar">
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/instruments">Instruments</Link></li>
                    <li className="new-link"><Link to="/newinstrument">Suggest Instrument</Link></li>
                    <li><Link to="/staging">Staging</Link></li>
                </ul>
               
            </div>
        )
    }
}

export default NavBar;