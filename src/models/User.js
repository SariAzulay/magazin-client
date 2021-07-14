
export const User=()=>{
    return(
        {
            user_name:"sara",
            email:"",
            magazins:[]            
        }
    )
}

// export const sendEmail = (store) => (next) => (action) => {
//     if (action.type == "EMAIL") {
//         debugger;
//         HttpView.get(`/sendEmail/${action.payload.name}/${action.payload.mail}`)
//             .then((response) => {
//                 if (response.data == "true") {
//                     alert("your email sent sucssfully");
//                 }
//             })
//             .catch((error) => console.log("error", error));
//     }
//     return next(action);
// };