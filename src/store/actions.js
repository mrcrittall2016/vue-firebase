// Sign user in
export const signIn = ({ commit }, user_payload) => {
  commit("signIn", user_payload);
};

// Sign user out
export const signOut = ({ commit }) => {
  commit("signOut");
};

// Add any updated/new live events from firebase to local store
export const addEvents = ({ commit }, event_payload) => {
  commit("addEvents", event_payload);
};
