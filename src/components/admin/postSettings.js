
import { useSelector } from 'react-redux';
import './postSettings.css';


export default function PostSettings() {

    const Data= useSelector(state => state.post.currentPost)

    return(
        <>
        <h7>Image Cover</h7>
        <br></br>
        <img src={Data.mainImgSrc} id="postImg"></img>
        <br></br>
        <h7>Title</h7>
        {/* <br></br> */}
        <p>{Data.postName}</p>
        <br></br>
        <h7 >Title Color <div id="color"></div></h7>
        <br></br>
        <h7>Description</h7>
        <br></br>
        <p>{Data.description}</p>
        <br></br>
        <h7>Content</h7>
        <br></br>
        <p>{Data.content}</p>
        <br></br>
        <h7>By</h7>
        <br></br>
        <p>{Data.by}</p>

        </>
    )
}