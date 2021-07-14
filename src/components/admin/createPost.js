import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
    </>
  );
}
