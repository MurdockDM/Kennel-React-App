import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise;
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import LocationList from "./locations/LocationList";
import LocationDetail from "./locations/LocationDetail"
import LocationForm from "./locations/LocationForm"
import LocationEditForm from "./locations/LocationEditForm"
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm"
import OwnerEditForm from "./owner/OwnerEditForm"
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from "./animal/AnimalEditForm"
import Login from "./auth/Login";


const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route
        exact strict
        path="/home"
        render={props => {
          return <Home {...props} />;
        }}
      />
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (isAuthenticated()) {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
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
      <Route exact path="/locations/:locationId(\d+)" render={(props) => {
        return <LocationDetail kennelLocationId={parseInt(props.match.params.kennelLocationId)}
          {...props} />
      }}
      />
      <Route path="/locations/:kennelLocationId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
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
      <Route path="/owner/:ownerId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
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
      <Route path="/employee/:employeeId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;