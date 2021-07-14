import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
// import store from ''
import actions from '../../redux/actions/action'

export default function CreatePost() {
  
  const dispatch = useDispatch();
  const imgSrc = useSelector(state=>state.post.currentPost.mainImgSrc);
=======
import { useHistory } from "react-router-dom";
import Aside from "./aside";
import "./createPost.css";


export default function CreatePost() {
  const [src, setSrc] = useState("");
  const history = useHistory();

  function goToHome() {
    history.push("/admin/choose");
  }

  function goToMagazin() {
    history.push("/admin/mymagazins");
  }
>>>>>>> 3ef87500bbf39dee246ee6de2587d7a343f10466

  return (
    <>
      <Aside />
      <br></br>

      <p id="backHome" onClick={goToHome}>
        <FontAwesomeIcon icon={["fas", "caret-left"]} id="caretLeftIcon" />
        Back home
      </p>
      <p id="toTheMagazin" onClick={goToMagazin}>
        To the magazin
        <FontAwesomeIcon icon={["fas", "caret-right"]} id="caretRightIcon" />
      </p>

      <br></br>
<<<<<<< HEAD
      <img src={imgSrc}/>

      <input type="file" onChange={
        (v) => {
          let file = v.target.files[0];
          let blob = URL.createObjectURL(file);
          dispatch(actions.setPostData({ key: "mainImgSrc", value: blob }))
          dispatch(actions.setAppendToFormData({ key: "postHeader", file: file }))
        }} />

=======
      <div>
      {src != "" && <img src={src} id="createIPostImg"></img>}
      <div id="form">
        <input type="file" onChange={(v) => setSrc(v.target.value)} />
        {/* <p>{src}</p> */}
        <br></br>
        <br></br>
        <input id="postTitle" type="text" value="Type Your Post Title" />
        <br></br>
        <br></br>
        <textarea id="textarea"></textarea>

        <p id="by">
          _________________ <br></br>
          By
        </p>
      </div>
      </div>
>>>>>>> 3ef87500bbf39dee246ee6de2587d7a343f10466
    </>
  );
}
