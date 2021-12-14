import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/action";
import { useHistory } from "react-router-dom";
import Aside from "./aside";
import "./createPost.css";

export default function CreatePost() {
  const dispatch = useDispatch();
  const imgSrc = useSelector((state) => state.post.currentPost.mainImgSrc);
  const Data = useSelector((state) => state.post.currentPost);
  const [src, setSrc] = useState("");
  const history = useHistory();
  const [title, setTitle] = useState(Data.postName);
  const [description, setDescription] = useState(Data.description);


  function goToHome() {
    history.push("/admin/choose");
  }

  function goToMagazin() {
    history.push("/admin/mymagazins");
  }

  function saveTitle() {
    dispatch(actions.savePostName({title: title}))
  }

  function saveDescriiption() {
    dispatch(actions.saveDescription({description: description}))
  }


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
      

      <div>
        {imgSrc != "" && <img src={imgSrc} id="createIPostImg" />}
        
        <div id="form">
          <input
            type="file"
            onChange={(v) => {
              let file = v.target.files[0];
              let blob = URL.createObjectURL(file);
              dispatch(actions.setPostData({ key: "mainImgSrc", value: blob }));
              dispatch(
                actions.setAppendToFormData({ key: "postHeader", file: file })
              );
            }}
          />
          <br></br>
          <br></br>
          <input id="postTitle" type="text"  onChange={v => {setTitle(v.target.value), saveTitle()}} />
          <br></br>
          <br></br>
          <textarea id="textarea"  onChange={v => {setDescription(v.target.value), saveDescriiption()}}></textarea>

          <p id="by" >
            _________________ <br></br>
            By
          </p>
        </div>
      </div>
    </>
  );
}
