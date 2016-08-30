import React from 'react';
import { mount } from 'enzyme';
import Blog from '../../Blog/Blog';
import List from '../../List/List';
import Item from '../../Item/Item';
import Form from '../../Form/Form';
import Post from '../../Post/Post';
import { posts as fixturePosts, newPost } from './fixtures';

describe('(Component) Blog', () => {
  it('should add new post in list after submitting new post form', () => {
    const component = mount(<Blog />);
    const form = component.find(Form);
    const list = component.find(List);
    const titleInput = component.find('input[name="title"]');
    const authorInput = component.find('input[name="author"]');
    const contentTextArea = component.find('textarea[name="content"]');
  
    component.setState({ posts: fixturePosts });
    titleInput.simulate('change', { target: { value: newPost.title }});
    authorInput.simulate('change', { target: { value: newPost.author }});
    contentTextArea.simulate('change', { target: { value: newPost.content }});
    form.simulate('submit');
    
    const newItem = list.find(Item).findWhere(item => item.prop('id') < 0); // find new item

    expect(component.find(Item)).to.have.lengthOf(fixturePosts.length + 1);
    expect(newItem.prop('title')).to.be.equal(newPost.title);
    expect(newItem.prop('author')).to.be.equal(newPost.author);
    expect(newItem.prop('content')).to.be.equal(newPost.content);
  });
  
  it('should show post in details on Post component after selecting him in list (clicking on him)', () => {
    const component = mount(<Blog />);
    component.setState({ posts: fixturePosts });
    const post = component.find(Post);
    const item = component.find(Item).at(1);

    item.simulate('click');

    expect(post.findWhere(el => el.node.textContent === item.prop('title'))).to.have.lengthOf(1);
    expect(post.findWhere(el => el.node.textContent === item.prop('content'))).to.have.lengthOf(1);
  });
});