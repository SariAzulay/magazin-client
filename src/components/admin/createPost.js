import { useState } from "react";

export default function CreatePost() {
  const [src, setSrc] = useState("");

  return (
    <>
      <br></br>
      <br></br>
      {src != "" && <img src={src}></img>}

      <input type="file" onChange={(v) => setSrc(v.target.value)} />
     <p>{src}</p> 
    </>
  );
}
