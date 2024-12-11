import { Map } from 'immutable';
import * as actions from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case actions.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case actions.LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true)
    case actions.LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false)
    case actions.LOGIN:
      return state.set("user", action.user);
    case actions.LOGOUT:
      return state.merge({
        isUserLoggedIn: false,
        user: null
      });
    default:
      return state; // Return current state for unhandled actions
  }
};

export default uiReducer;