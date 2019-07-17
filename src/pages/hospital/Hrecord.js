import React from "react";
import HosDrawer from "./HospitalNav";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
//import hospital from "./images/hospital.png";
class Hrecord extends React.Component {

    state = {
        hospitalpublickey: '',
        donorpublickey: ''
    }

    render() {
        return (

            <MDBContainer className="">
              <HosDrawer />
                <form>
                    <MDBRow className="mt-5" >
                        
                        <MDBCol>

                            <p className="h5 text-center mb-4 mt-12">Enter Details</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Donor Public Key"
                                    icon="user"
                                    group
                                    type="text"

                                />

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">
                                            Upload
                                </span>
                                    </div>
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            id="inputGroupFile01"
                                            aria-describedby="inputGroupFileAddon01"
                                        />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                            Choose file
                                </label>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <MDBBtn outline color="dark">
                                    Submit <MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                            </div>

                        </MDBCol>
                    </MDBRow>
                   
                </form>
            </MDBContainer>


        )
    }
}



export default Hrecord;