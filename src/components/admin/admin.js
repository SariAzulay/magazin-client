import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
import Toolbar from 'react-minimalist-toolbar'
import { Link } from 'react-router-dom';


export default function Admin() {
    return (
        <>
            {/* <Toolbar style={{ backgreondcolor: "red" }} brand={FontAwesomeIcon} brand="leader"> */}


            <FontAwesomeIcon  icon={["fas", "thumbtack"]} Link="/CHOOSE" />
            {/* <FontAwesomeIcon icon={["fas", "image"]} />  */}
           
            <FontAwesomeIcon icon={["fas", "user"]} />
            <FontAwesomeIcon icon={["fas", "bars"]} />



            {/* </Toolbar> */}
            {/* <i class="fa-solid fa-user"></i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        </>
    )
}