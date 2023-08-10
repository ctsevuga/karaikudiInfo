const stationReducer = (state, action) => {
    switch (action.type) {
      case "SET_STATION":
        return {
          ...state,
          station: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default stationReducer;