import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";


// to combine reducers
// I do not need to write reducer for redux form because it is already 
//done I must only import it and use it


//this is how will be the state(store) of App 
export default combineReducers({
    form: formReducer,
  });