/* globals jest */

import ListingsReducer from '../reducers/listings_reducer';
import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {
  describe('ListingsReducer', () => {
    it('exports a function', () => {
      expect(typeof ListingsReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(ListingsReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = ListingsReducer(oldState, { type: 'unmatched type' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_LISTINGS action', () => {
      let action,
          testListings;

      beforeEach( () => {
        testListings = { 1: 'testListing1', 2: 'testListing2' };
        action = { type: 'RECEIVE_LISTINGS',
                   listings: testListings
        };
      });

      it('should replace the state with the action\'s posts', () => {
        const state = ListingsReducer(undefined, action);
        expect(state).toEqual(testListings);
      });
    });
  });
});
