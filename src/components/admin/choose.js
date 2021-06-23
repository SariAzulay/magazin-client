import ChooseOption from "./chooseOption";
import './choose.css'
import a from './assets/a.jpg';
import b from './assets/b.jpg';



export default function Choose(){

    return(
        <>
        <h1>What do you want to do today?</h1>
        <br></br>
        <div id="components">
        <ChooseOption title={"Create Post"} src={b}/>
        <ChooseOption  title={"My Magazins"} src={a}/>
        </div>
        </>
    )
}