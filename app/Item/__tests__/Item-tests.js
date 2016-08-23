import { post as postFixture } from './fixtures';
import React from 'react';
import { shallow } from 'enzyme';
import Item from '../Item';

describe('(Component) Item', () => {
  it('should render \'No content\' stub, if no content specified', () => {
    const component = shallow(<Item />);
    const stub = component.findWhere(element => element.node === 'No content');

    expect(stub).to.have.lengthOf(1);
  });

  it('should render \'No title\' stub, if no content specified', () => {
    const component = shallow(<Item />);
    const stub = component.findWhere(element => element.node === 'No title');
    
    expect(stub).to.have.lengthOf(1);
  });

  it('should render \'No name\' stub, if no content specified', () => {
    const component = shallow(<Item />);
    const stub = component.findWhere(element => element.node === 'No name');
    
    expect(stub).to.have.lengthOf(1);
  });
  
  it('should render \'No date\' stub, if no content specified', () => {
    const component = shallow(<Item />);
    const stub = component.findWhere(element => element.node === 'No title');
    
    expect(stub).to.have.lengthOf(1);
  });
  
  it('should render each field content of fixture item, if specified', () => {
    const component = shallow(
      <Item
        author={postFixture.author}
        content={postFixture.content}
        date={postFixture.date}
        title={postFixture.title} />
    );

    const authorNode = component.findWhere(element => element.node === postFixture.author);
    const contentNode = component.findWhere(element => element.node === postFixture.content);
    const dateNode = component.findWhere(element => element.node === postFixture.date);
    const titleNode = component.findWhere(element => element.node === postFixture.title);

    expect(authorNode).to.have.lengthOf(1);
    expect(contentNode).to.have.lengthOf(1);
    expect(dateNode).to.have.lengthOf(1);
    expect(titleNode).to.have.lengthOf(1);
  });
  
  it('should call onClick handler with item data, if clicked on item', () => {
    const onClickSpy = sinon.spy();
    const component = shallow(
      <Item
        author={postFixture.author}
        content={postFixture.content}
        date={postFixture.date}
        title={postFixture.title}
        onClick={onClickSpy} />
    );

    component.simulate('click');

    expect(onClickSpy.calledOnce).to.be.true;
    expect(onClickSpy.firstCall.args[0]).to.deep.equal(postFixture);
  })
});