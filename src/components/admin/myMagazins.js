import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './myMagazins.css'

export default function MyMagazins() {
    return (
        <>
        <p id="p">Want to get 20% discount right now?<button id="b">Click here</button></p>
            <h1>Stories</h1>
            <Link >         <FontAwesomeIcon icon={["fas", "home"]} className="icon" />
                 Home  </Link>
            <Link className="bold">  Fashion  </Link>
            <Link className="bold"> Busniess </Link>
            <Link className="bold"> Travel </Link>
            <Link className="bold"> Books </Link>
            <Link className="bold"> Cooking </Link>


        </>
    )
}