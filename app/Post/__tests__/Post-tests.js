import React from 'react';
import { shallow } from 'enzyme';
import { post as fixturePost } from './fixtures';
import Post from '../Post';
 
describe('(Component) Post', () => {
  it('should render title and content, passed to props', () => {
    const component = shallow(<Post title={fixturePost.title} content={fixturePost.content} />);
    const contentElement = component.findWhere(el => el.node === fixturePost.content);
    const titleElement = component.findWhere(el => el.node === fixturePost.title);
    
    expect(contentElement).to.have.lengthOf(1);
    expect(titleElement).to.have.lengthOf(1);
  });
  
  it('should render stub text in place of content, if no content passed', () => {
    const component = shallow(<Post />);
    const contentElement = component.findWhere(el => el.node === 'Empty');
  
    expect(contentElement).to.have.lengthOf(1);
  });

  it('should render stub text in place of title, if no content passed', () => {
    const component = shallow(<Post />);
    const titleElement = component.findWhere(el => el.node === 'No title');
  
    expect(titleElement).to.have.lengthOf(1);
  });
});