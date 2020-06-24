export const mutations = {
  signIn: (state, user_payload) => {
    state.user = user_payload;
  },
  signOut: state => {
    state.user = {};
  },

  addEvents: (state, event_payload) => {
    state.events = event_payload;
    console.log(state.events);
  }
};
