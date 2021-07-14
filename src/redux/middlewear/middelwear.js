
import actions from '../actions/action'
import { HttpView } from '../../config/axios'

export const sendEmail = (store) => (next) => (action) => {
    if (action.type == "EMAIL") {
        debugger;
        HttpView.get(`/sendEmail/${action.payload.name}/${action.payload.mail}`)
            .then((response) => {
                if (response.data == "true") {
                    alert("your email sent sucssfully");
                }
            })
            .catch((error) => console.log("error", error));
    }
    return next(action);
};
// export const sendEmail = (store) => (next) => (action) => {
//     if (action.type == "EMAILN") {
//         fetch(`https://localhost:4000/sendEmail/${action.payLoad.name}/${action.payLoad.mail}`, { method: "GET" })
//             .then((response) => response.json())

//             .catch((error) => console.log("error", error));
//     }
//     return next(action);
// };
