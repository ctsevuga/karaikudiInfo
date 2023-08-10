const busReducer = (state, action) => {
    switch (action.type) {
      case "SET_ROUTE":
        return {
          ...state,
          route: action.payload,
        };
      case "SET_ROUTES":
        return {
          ...state,
          routes: action.payload,
          };  
          case "SET_STOP":
            return {
              ...state,
              stop: action.payload,
              }; 
              case "SET_AMPM":
                return {
                  ...state,
                  amPm: action.payload,
                  };                
      default:
        return state;
    }
  };
  
  export default busReducer;