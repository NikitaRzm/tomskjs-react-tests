import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';

describe('(Component) List', () => {
  it('should render component', () => {
    const component = shallow(<List />);
    expect(component).to.exist;
  });
});