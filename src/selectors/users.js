export const getUserProfile = (state, key) => state.users.find((profile) => profile.key === key);
