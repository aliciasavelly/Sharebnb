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

      it('should replace the state with the action\'s listings', () => {
        const state = ListingsReducer(undefined, action);
        expect(state).toEqual(testListings);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        ListingsReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handling the DESTROY_SPOT action', () => {
      let action,
          testListing;

      beforeEach( () => {
        testListing = { id: 1, description: "Description Test", destination_id: 3, price: 120 };
        action = {
          type: 'DESTROY_SPOT',
          spot: testListing
        };
      });

      it('should remove the correct spot from the state', () => {
        let state = ListingsReducer({ 1: testListing }, action);
        expect(typeof state[1]).toEqual('undefined');
      });

      it('should not affect the other listings in the state', () => {
        let oldState = { 1: testListing, 2: 'oldState' };
        // expect(state[1]).toEqual(testListing);
        let state = ListingsReducer(oldState, action);
        expect(state[2]).toEqual('oldState');
        expect(typeof state[1]).toEqual('undefined');
      });
    });
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll( () => {
      testStore = createStore(RootReducer);
    });

    it('exports a function', () => {
      expect(typeof RootReducer).toEqual('function');
    });

    it('includes the ListingsReducer under the key `listings`', () => {
      const listings = { id: 1, title: 'Root Reducer', content: 'Testing' };
      const action = { type: 'RECEIVE_LISTINGS', listings };
      testStore.dispatch(action);

      expect(testStore.getState().listings).toEqual(ListingsReducer( listings, action));
    });
  })
});
