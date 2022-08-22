import { getAvatar } from '../../services/UserService'
export const userInfo = {
    state: {
        address: '',
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setAddress(state, address) {
        return {
            ...state,
            address,
          };
      },
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      updateAddress(payload, rootState) {
        this.setAddress(payload);
      },
    }),
    selectors: (slice, createSelector) => ({
        selectAddress() {
          return slice(state => state.address);
        },
    }),
  };