import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './nav.css'

const Nav = (props) => {

    return (
        <>
        <div className="icons">        
        <FontAwesomeIcon icon={["fas", "user"]} className="icon"/>
            <FontAwesomeIcon icon={["fas", "thumbtack"]} className="icon"/>
            <FontAwesomeIcon icon={["fas", "bars"]} className="icon"/>

        </div>
        <div className="emp"></div>
        </>
    );
}


export default Nav;