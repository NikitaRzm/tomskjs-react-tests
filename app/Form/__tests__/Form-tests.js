import React from 'react';
import Form from '../Form';
import { shallow } from 'enzyme';

describe('(Component) Form', () => {
  it('should render form with 2 text inputs, 1 textarea and submit button', () => {
    const component = shallow(<Form />);
    const inputs = component.find('input[type="text"]');
    const submit = component.find('button[type="submit"]');
    const textarea = component.find('textarea');

    expect(inputs).to.have.lengthOf(2);
    expect(submit).to.have.lengthOf(1);
    expect(textarea).to.have.lengthOf(1);
  });

  it('should change \'title\' field in state and in input, if onChange emitted on title input', () => {
    const component = shallow(<Form />);
    let titleInput = component.find('input[name="title"]');

    titleInput.simulate('change', { target: { value: 'new post' } });
    titleInput = component.find('input[name="title"]');
    
    expect(titleInput.prop('value')).to.be.equal('new post');
    expect(component.state('title')).to.be.equal('new post');
  });

  it('should change \'author\' field in state and in input, if onChange emitted on author input', () => {
    const component = shallow(<Form />);
    let authorInput = component.find('input[name="author"]');
    
    authorInput.simulate('change', { target: { value: 'me' } });
    authorInput = component.find('input[name="author"]');
    
    expect(authorInput.prop('value')).to.be.equal('me');
    expect(component.state('author')).to.be.equal('me');
  });

  it('should change \'content\' field in state and in input, if onChange emitted on content text area', () => {
    const component = shallow(<Form />);
    let contentTextArea = component.find('textarea[name="content"]');
    
    contentTextArea.simulate('change', { target: { value: 'my awesome post' } });
    contentTextArea = component.find('textarea[name="content"]');
    
    expect(contentTextArea.prop('value')).to.be.equal('my awesome post');
    expect(component.state('content')).to.be.equal('my awesome post');
  });
  
  it('should call onSubmit function, passed to props with entered data in form', () => {
    const newPostData = { title: 'My new post', author: 'Nikita', content: 'Some text in post..' };
    const onSubmitSpy = sinon.spy();
    const component = shallow(<Form onSubmit={onSubmitSpy} />);

    const titleInput = component.find('input[name="title"]');
    const authorInput = component.find('input[name="author"]');
    const contentTextArea = component.find('textarea[name="content"]');

    titleInput.simulate('change', { target: { value: newPostData.title } });
    authorInput.simulate('change', { target: { value: newPostData.author } });
    contentTextArea.simulate('change', { target: { value: newPostData.content } });
    component.simulate('submit');

    expect(onSubmitSpy.calledOnce).to.be.true;
    expect(onSubmitSpy.firstCall.args[0]).to.deep.equal(newPostData);
  });
});