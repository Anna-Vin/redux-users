export const addUser = (name, surname, address, gender, image, date) => {
  const user = { name, surname, address, gender, image, date };
  return { type: 'ADD_USER', user };
};
export const deleteUser = index => {
  return { type: 'DELETE_USER', index };
};
export const updateUser = (userInfo) => {
  return { type: 'UPDATE_USER', userInfo };
};