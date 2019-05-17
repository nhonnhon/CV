import { fromJS } from "immutable";
import { combineReducers } from 'redux';
import { CHANGE_LANGUAGE } from "../actions/index";

const initialState = fromJS({
  lang: "en"
});

function common(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_LANGUAGE:
      return state.set("lang", payload);

    default:
      return state;
  }
}

export default combineReducers({
  common
})