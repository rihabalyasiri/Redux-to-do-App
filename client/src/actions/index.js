import { TO_DO } from "./types";

//create action function to set it in reducers
export const createToDo = (formValue = null )=> {
  return {
    type: TO_DO,
    payload: formValue
  };
};

//dispatch function will show in props if we did not wire the action directly to connect components
//action creator function not set as argument in connect function will not update the store


