export const getUsersPage = (state, key) => state.users.find((profile) => profile.key === key);
