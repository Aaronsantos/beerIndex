import types from "../types/index";

const initialState = {
  beers: {},
  loaded: false,
  next: 1,
  error: false
};

function rootReducer(state = initialState, action) {
  if (action.type === types.LOAD_DATA) {
    return Object.assign({}, state, {
      loaded: false
    });
  }

  if (action.type === types.DATA_LOADED) {
    if (Object.keys(action.payload).length > 0) {
      return Object.assign({}, state, {
        beers: { ...state.beers, ...action.payload },
        next: state.next + 1,
        loaded: true
      });
    } else {
      console.log("No more beers");
      return Object.assign({}, state, {
        next: false,
        loaded: true
      });
    }
  }
  return state;
}

export default rootReducer;
