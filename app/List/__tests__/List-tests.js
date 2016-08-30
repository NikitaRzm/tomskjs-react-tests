import React from 'react';
import { shallow, mount } from 'enzyme';
import PostsList from '../List';
import PostItem from '../../Item/Item';
import { items as itemsFixtures } from './fixtures';
import ReactTestUtils from 'react-addons-test-utils';


describe('(Component) List', () => {
  it('Should render stub element with \'No items\ text, if no items prop specified', () => {
    const component = shallow(<PostsList />);
    const stubElement = component.findWhere(element => element.node === 'No items');

    expect(stubElement).to.have.lengthOf(1);
  });
  
  it('should render as many items, as passed to items prop and not render \'No items\' (with react-test-utils)', () => {
    const component = ReactTestUtils.renderIntoDocument(<PostsList items={itemsFixtures} />);
    const stubElement = ReactTestUtils.findAllInRenderedTree(component, element => element.textContent === 'No items');
    const items = ReactTestUtils.scryRenderedComponentsWithType(component, PostItem);

    expect(items).to.have.lengthOf(itemsFixtures.length);
    expect(stubElement).to.have.lengthOf(0);
  });

  it('should render as many items, as passed to items prop and not render \'No items\'', () => {
    const component = shallow(<PostsList items={itemsFixtures} />);
    const stubElement = component.findWhere(element => element.node === 'No items');

    expect(component.find(PostItem)).to.have.lengthOf(itemsFixtures.length);
    expect(stubElement).to.have.lengthOf(0);
  });
  
  it('should call onClick callback with item in arguments, if click on item happen', () => {
    const onClickSpy = sinon.spy();
    const component = mount(<PostsList items={itemsFixtures} onItemClick={onClickSpy}/>);

    component.find(PostItem).first().simulate('click');
    expect(onClickSpy.calledOnce).to.be.true;
    expect(onClickSpy.firstCall.args[0]).to.deep.equal(itemsFixtures[0]);
  });
  
  it('should select item after click: set state with data of selected item and change className of item to \`selected\`', () => {
    const component = mount(<PostsList items={itemsFixtures} />);
    const item = component.find(PostItem).at(2);

    item.simulate('click');
  
    expect(item.prop('className').indexOf('selected') >= 0).to.be.true;
    expect(component.state('selectedItem')).to.deep.equal(itemsFixtures[2]);
  });
});