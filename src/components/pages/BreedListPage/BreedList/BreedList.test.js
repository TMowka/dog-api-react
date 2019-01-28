import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Root from 'components/Root';
import BreedList from './BreedList';
import BreedListItem from './BreedListItem/BreedListItem';

describe('<BreedList />', () => {
  describe('without filter', () => {
    let wrapped;
    const initialState = {
      breeds: {
        list: {
          breed1: [],
          breed2: [],
          breed3: []
        },
        filter: ''
      }
    };

    beforeEach(() => {
      wrapped = mount(
        <Root initialState={initialState}>
          <BrowserRouter>
            <BreedList />
          </BrowserRouter>
        </Root>
      )
    });

    afterEach(() => {
      wrapped.unmount();
    });

    it('shows the correct amount of <BreedListItem />\'s', () => {
      expect(wrapped.find(BreedListItem).length).toEqual(Object.keys(initialState.breeds.list).length);
    });
  });

  describe('with filter', () => {
    let wrapped;
    const initialState = {
      breeds: {
        list: {
          breed1: [],
          breed2: [],
          breed3: []
        },
        filter: 'breed1'
      }
    };

    beforeEach(() => {
      wrapped = mount(
        <Root initialState={initialState}>
          <BrowserRouter>
            <BreedList />
          </BrowserRouter>
        </Root>
      )
    });

    afterEach(() => {
      wrapped.unmount();
    });

    it('shows the correct amount of <BreedListItem />\'s', () => {
      expect(wrapped.find(BreedListItem).length).toEqual(Object.keys(initialState.breeds.list)
        .filter(breed => breed.includes(initialState.breeds.filter)).length);
    });
  });
});
