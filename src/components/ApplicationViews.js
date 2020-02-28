import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise;
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm"
import LocationList from "./locations/LocationList";
import LocationDetail from "./locations/LocationDetail"
import LocationForm from "./locations/LocationForm"
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm"
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
import Login from "./auth/Login";


const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
          {...props} />
      }} />
      <Route
        exact path="/locations"
        render={props => {
          if (isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)}
          {...props} />
      }}
      />
      <Route path="/location/new" render={(props) => {
        return <LocationForm {...props} />
      }} />
      <Route
      exact
        path="/owner"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/owner/new" render={(props) => {
        return <OwnerForm {...props} />
      }} />
      <Route
      exact
        path="/employees"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/employee/new" render={(props) => {
        return <EmployeeForm {...props} />
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;