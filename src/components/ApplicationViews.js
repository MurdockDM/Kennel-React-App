import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"
import LocationList from "./locations/LocationList";
import LocationWithEmployees from "./locations/LocationWithEmployees"
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




const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
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
        if (hasUser) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/animals" render={props => {
        if (hasUser) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (hasUser) {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact path="/locations"
        render={props => {
          if (hasUser) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/locations/:kennelLocationId(\d+)/edit" render={props => {
        if (hasUser) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/location/new" render={(props) => {
        return <LocationForm {...props} />
      }} />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        return <LocationWithEmployees kennelLocationId={parseInt(props.match.params.locationId)} {...props} />
      }} />
      <Route
        exact
        path="/owner"
        render={props => {
          if (hasUser) {
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
        if (hasUser) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact
        path="/employees"
        render={props => {
          if (hasUser) {
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
        if (hasUser) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
        return <EmployeeWithAnimals {...props} />
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;