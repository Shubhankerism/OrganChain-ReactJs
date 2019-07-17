import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
// import Policy from "./pages/Policy";
import DonorLogin from "./pages/DonorLogin";
import HospitalLogin from "./pages/HospitalLogin";
import DonorSignUp from "./pages/DonorSignUp";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// import Home from "./pages/Home";

import HospitalList from "./pages/donor/HospitalList";
import HospitalTest from "./pages/hospital/test";

import HospitalNav from "./pages/hospital/HospitalNav";
import Hprofile from "./pages/hospital/Hprofile";
import Happrove from "./pages/hospital/Happrove";
import Hregister from "./pages/hospital/Hregister";
import Hmatch from "./pages/hospital/Hmatch";
import Hrecord from "./pages/hospital/Hrecord";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />        
        {/* <Route exact path="/policy" component={Policy} /> */}
        <Route exact path="/donorlogin" component={DonorLogin} />
        <Route exact path="/hospital" component={HospitalLogin} />
        <Route exact path="/signup" component={DonorSignUp} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/donor/list" component ={HospitalList}/>
        <Route exact path="/hospital/nav" component={HospitalNav} />
        <Route exact path="/hospital/test" component={HospitalTest} />
        <Route exact path="/hospital/Profile" component={Hprofile} />
        <Route exact path="/hospital/Approve-Donor" component={Happrove} />
        <Route exact path="/hospital/Register-Recipient" component={Hregister} />
        <Route exact path="/hospital/Transplant-Match" component={Hmatch} />
        <Route exact path="/hospital/Patient-Record" component={Hrecord} />
        <Route exact path="" component={NotFound} />
        
        {/* <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        /> */}
      </Switch>
    );
  }
}

export default Routes;
