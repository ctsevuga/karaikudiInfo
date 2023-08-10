import React, { createContext, useReducer,useState } from "react";
import BusReducer from "./BusReducer";
import busRoutes from '../data/busRoutes'



// Initial state
const initialState = {
  route: ("Thiruppathur"),
  routes:[],
  stop: ("Madurai"),
  amPm: ("AM"),
  
};

// Create context
export const BusContext = createContext(initialState);

// Provider component
export const BusProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BusReducer, initialState);
//   const [station, setStation] = useState("Chennai");
  // Actions
  function editRoute(route) {
//   setRoute(route)
  dispatch({
    type: "SET_ROUTE",
    payload: route,
  });
//   console.log(route);
const newRoute = busRoutes.filter(
    (town) => town.Route=== route
  );
  editRoutes(newRoute)
  }

  function editRoutes(routes) {
    //   setRoute(route)
      dispatch({
        type: "SET_ROUTES",
        payload: routes,
      });
      console.log(routes);
      }

      function editStop(stop) {
        // setStation(station)
        dispatch({
          type: "SET_STOP",
          payload: stop,
        });
        // console.log(stop);
     }   

     function editAmPm(amPm) {
      // setStation(station)
      dispatch({
        type: "SET_AMPM",
        payload: amPm,
      });
      console.log(amPm);
   }  


  return (
    <BusContext.Provider
      value={{
        route: state.route,
        routes: state.routes,
        stop: state.stop,
        amPm: state.amPm,
        editRoute,
        editRoutes,
        editStop,
        editAmPm,
        
      }}
    >
      {children}
    </BusContext.Provider>
  );
};
