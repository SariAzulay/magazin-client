import { useState } from "react";
import "./createPost.css";

export default function CreatePost() {
  const [src, setSrc] = useState("");

  return (
    <>
      <br></br>
      <br></br>
      <p>Back home</p>
      <p>To the magazin</p>
      {src != "" && <img src={src}></img>}
      <div id="form">
        <input type="file" onChange={(v) => setSrc(v.target.value)} />
        {/* <p>{src}</p> */}
        <br></br>
        <br></br>
        <input id="postTitle" type="text" value="Type Your Post Title" />
        <br></br>
        <br></br>
        <textarea></textarea>
      </div>
    </>
  );
}
