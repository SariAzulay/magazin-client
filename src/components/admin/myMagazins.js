import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './myMagazins.css'
import { useDispatch, connect } from 'react-redux';

import actions from '../../redux/actions/action';


const MyMagazins=(props)=> {

    const [flag, setflag] = useState(false);
    const [f, setf] = useState(false);

    const [name, setname] = useState("");
    const [mail, setemail] = useState("");

    const sendEmail=()=> {
        props.email({ name: name, mail: mail })
    }

    return (
        <>

            {f == false && <p id="p">Want to get 20% discount right now?
            <button className="radius" onClick={() => { setflag(true); setf(true) }} id="b">Click here></button>
            </p>}
            <p>

                {flag == true &&
                    <>
                        <input placeholder="name" onChange={(v) => setname(v.target.value)} />
                        <input placeholder="email" onChange={(v) => setemail(v.target.value)} />

                        <button className="radius" onClick={() => { setflag(false); setf(false); sendEmail() }}
                            id="lb">send me</button>
                    </>}
            </p>
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
const mapStateToProps=state=>({
    ...state
})

const mapDispatchToProps=dispatch=>({
    email:(data)=>dispatch(actions.email(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(MyMagazins)