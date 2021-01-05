const usersInitialState = JSON.parse(localStorage.getItem('users')) || [];

export default (state = usersInitialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const { user } = action;
      const newState = [...state, user];
      localStorage.setItem('users', JSON.stringify(newState))
      return newState;
    case 'DELETE_USER':
      const { index } = action;
      const newStateForRemove = [...state].filter((item, i) => i !== index);
      localStorage.setItem('users', JSON.stringify(newStateForRemove))
      return newStateForRemove;
    case 'UPDATE_USER':
      const { userInfo } = action;
      const newStateForUpdate = [...state].map((item, i) => {
          if ( userInfo.index === i ) {
            return userInfo.user;
          }
          return item;
      });
      localStorage.setItem('users', JSON.stringify(newStateForUpdate))
      return newStateForUpdate;
    default: return state
  }
};

