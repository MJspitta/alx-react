import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER }))
      .toEqual(initialState.set('isNotificationDrawerVisible', true));
  });
});
