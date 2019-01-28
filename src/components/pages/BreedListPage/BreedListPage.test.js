import React from 'react';
import { mount } from 'enzyme';

import Root from 'components/Root';
import BreedListPage from './BreedListPage';
import BreedSearch from './BreedSearch/BreedSearch';
import BreedList from './BreedList/BreedList';

describe('<BreedListPage />', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <BreedListPage />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('renders <BreedSearch /> component', () => {
    expect(wrapped.find(BreedSearch).length).toEqual(1);
  });

  it('renders <BreedList /> component', () => {
    expect(wrapped.find(BreedList).length).toEqual(1);
  });
});
