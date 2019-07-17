// import React from "react";
// import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import HosDrawer from "./HospitalNav";


// const hlist = [
//     {
//         title: "first",
//         body: "First body"
//     },
//     {
//         title: "second",
//         body: "Second body"
//     },
//     {
//         title: "first",
//         body: "First body"
//     },
//     {
//         title: "second",
//         body: "Second body"
//     }

// ];

// const JumbotronPage = (props) => {
//     return (

//         <MDBCol>
//             <MDBJumbotron>
//                 <h2 className="h1 display-3">Hello, world!</h2>
//                 <p className="lead">
//                     {props.donorlist.title}
//                 </p>
//                 <hr className="my-2" />
//                 <p>
//                     {props.donorlist.body}
//               </p>
//                 <p className="lead">
//                     <MDBBtn color="primary">Learn More</MDBBtn>
//                 </p>
//             </MDBJumbotron>
//         </MDBCol>

//     )
// }

// class Happrove extends React.Component {

//     state = {
//         donorpublickey: "xyz",
//         name: "Vidit"
//     }
//     static obj;
//     componentDidMount() {
//         obj = hlist.map((donor) =>
//             <JumbotronPage donorlist={donor} />
//         );
//     }
//     render() {
//         return (
//             <MDBContainer className="mt-5 text-center">

//                 <MDBRow>
//                     <HosDrawer />
//                     <MDBCol>
//                         {obj}
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         );
//     }

// }

// export default Happrove;