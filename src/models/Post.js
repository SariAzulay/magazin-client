
import c from '../components/admin/assets/c.jpg'


export const Post = () => {
  return {
    postName: "",
    mainImgSrc: c,
    formData: new FormData(),
    description: "",
    color: "black",
    content: "",
    by: ""
  };
};
