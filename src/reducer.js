
export const initialState = {
    user: null,
  };
  
  const reducer = (state, action) => {
    console.log('action_in_reducer',action);
  
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;