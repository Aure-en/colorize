export const getUser = (state) => state.user;

export const getEmail = (state) => state.user.email;

export const getIsLoggedIn = (state) => state.user.username && state.user.jwt && state.user.id;
