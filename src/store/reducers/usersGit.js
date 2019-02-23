const INITIAL_STATE = {
  data: []
};
export default function usersGit(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        data: [...state.data, action.payload.user]
      };
    default:
      return state;
  }
}
