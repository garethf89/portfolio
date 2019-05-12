// The types of actions that you can dispatch to modify the state of the store
export const types = {
    TOGGLE: "TOGGLE"
  };
  
  // Helper functions to dispatch actions, optionally with payloads
  export const actionCreator = {
    toggle: (id,props) => {
      return { type: types.TOGGLE, id:id, props:props};
    }
  };
  
// Initial state of the store
const initialState = {
  menu: {
    open: false
  } 
};
  
// Function to handle actions and update the state of the store
export const Menu = (state = initialState, action) => {

  const { type } = action;
  switch (type) {
      case types.TOGGLE: 
      return {
        ...state,
        menu: {
          open: action.payload
        }
      }
      default:
        return state
  } 
};
  