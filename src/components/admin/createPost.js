import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import store from ''
import actions from '../../redux/actions/action'

export default function CreatePost() {
  
  const dispatch = useDispatch();
  const imgSrc = useSelector(state=>state.post.currentPost.mainImgSrc);

  return (
    <>
      <br></br>
      <br></br>
      <img src={imgSrc}/>

      <input type="file" onChange={
        (v) => {
          let file = v.target.files[0];
          let blob = URL.createObjectURL(file);
          dispatch(actions.setPostData({ key: "mainImgSrc", value: blob }))
          dispatch(actions.setAppendToFormData({ key: "postHeader", file: file }))
        }} />

    </>
  );
}
