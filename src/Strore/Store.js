import { createStore } from "redux";

const initialState = {
  isLoggedIn: false,
  employees: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EMPLOYEES":
      return { ...state, employees: action.payload };
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      console.log(action);
      return { ...state, isLoggedIn: false };
    case "ADD_EMPLOYEE":
      if (state.employees.length < 5) {
        return { ...state, employees: [...state.employees, action.payload] };
      } else {
        return state;
      }
    case "EDIT_EMPLOYEE":
      const updatedEmp = state.employees.map((emp) => {
        if (emp._id == action.payload._id) {
          return { ...action.payload };
        }
        return emp;
      });
      console.log(updatedEmp);
      return { ...state, employees: updatedEmp };
    case "DELETE_EMPLOYEE":
      const afterDeletion = state.employees.filter(
        (emp) => emp._id != action.payload._id
      );
      return { ...state, employees: afterDeletion };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
