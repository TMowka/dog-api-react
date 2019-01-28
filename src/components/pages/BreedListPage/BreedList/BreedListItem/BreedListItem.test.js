import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter, Link } from 'react-router-dom';

import BreedListItem from './BreedListItem';
import Dropright from 'components/partial/Dropright/Dropright';

describe('<BreedListItem />', () => {
  const BREED = 'breed1';
  const SUB_BREEDS = ['subBreed1', 'subBreed2', 'subBreed3'];

  describe('without sub-breeds', () => {
    let wrapped;

    beforeEach(() => {
      wrapped = mount(
        <BrowserRouter>
          <BreedListItem breed={BREED} />
        </BrowserRouter>
      );
    });

    afterEach(() => {
      wrapped.unmount();
    });

    it('renders a <Link />', () => {
      expect(wrapped.find(Link).length).toEqual(1);
    });

    it('doesn\'t render a <Dropright />', () => {
      expect(wrapped.find(Dropright).length).toEqual(0);
    });
  });

  describe('with sub-breeds', () => {
    let wrapped;

    beforeEach(() => {
      wrapped = mount(
        <BrowserRouter>
          <BreedListItem breed={BREED} subBreeds={SUB_BREEDS} />
        </BrowserRouter>
      );
    });

    afterEach(() => {
      wrapped.unmount();
    });

    it('renders a <Link />', () => {
      expect(wrapped.find(Link).length).toEqual(1 + SUB_BREEDS.length);
    });

    it('renders a <Dropright /> with a sub-breed links', () => {
      expect(wrapped.find(Dropright).length).toEqual(1);
    });
  });
});
