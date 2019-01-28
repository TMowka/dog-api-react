import React from 'react';
import { mount } from 'enzyme';

import Root from 'components/Root';
import BreedSearch from './BreedSearch';

describe('<BreedSearch />', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <BreedSearch />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('has an input', () => {
    expect(wrapped.find('input').length).toEqual(1);
  });

  describe('<input />', () => {
    let input;

    beforeEach(() => {
      input = wrapped.find('input');
    });

    it('responds to data entry', () => {
      const SEARCH_TEXT = 'search text';

      input.simulate('change', { target: { value: SEARCH_TEXT } });
      wrapped.update();

      expect(wrapped.find('input').prop('value')).toEqual(SEARCH_TEXT);
    });
  });
});
