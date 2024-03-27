export const empData = (data) => {
  return { type: "EMPLOYEES", payload: data };
};
export const editEmployee = ({ data }) => {
  return { type: "EDIT_EMPLOYEE", payload: data };
};
export const addEmployee = ({ data }) => {
  return { type: "ADD_EMPLOYEE", payload: data };
};

export const deleteEmployee = (data) => {
  return { type: "DELETE_EMPLOYEE", payload: data };
};
