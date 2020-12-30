// import React, { Fragment } from "react";
// import store from "../../../store/store";
// import { Button } from "react-bootstrap";
// import * as actionCreators from "../../../store/actions/index";
// import {} from "../Modals/index";
// import { t, initT } from "../../../utils/intl";

// const showModal = (show) => store.dispatch(actionCreators.showModal(show));

// export const createTrip = () => {

//     const onClose = () => {
//         showModal(false);
//     };

//     return {
//         title: "Create trip",
//         show: true,
//         onClose,
//         body: <div>My Body</div>,
//         footer: (
//             <Fragment>
//                 <Button variant="secondary" onClick={onClose}>
//                     Cancel
//                 </Button>
//                 <Button
//                     variant="primary"
//                     className="ml-auto"
//                 >
//                 Create
//                 </Button>
//             </Fragment>
//         ),
//         options: {
//             size: "lg",
//         }
//     }
// }