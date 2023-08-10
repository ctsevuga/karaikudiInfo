import React, { createContext, useReducer,useState } from "react";
import StationReducer from "./StationReducer";


const initialState = {
  station: ("Chennai"),
};

// Create context
export const TrainContext = createContext(initialState);

// Provider component
export const TrainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StationReducer, initialState);
  // const [station, setStation] = useState("Chennai");
  // Actions
  function editStation(station) {
  // setStation(station)
  dispatch({
    type: "SET_STATION",
    payload: station,
  });
  console.log(station);
  }
  
  return (
    <TrainContext.Provider
      value={{
        station: state.station,
        editStation,
      }}
    >
      {children}
    </TrainContext.Provider>
  );
};
