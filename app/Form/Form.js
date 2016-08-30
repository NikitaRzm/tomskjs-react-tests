import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = { title: '', author: '', content: '' };
  
    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  onSubmit() {
    const { onSubmit } = this.props;
    const { title, author, content } = this.state;
    if (onSubmit) onSubmit({ title, author, content });
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  onAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  onContentChange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    const { title, author, content } = this.state;
    return (
      <form className="create-post-form" onSubmit={this.onSubmit}>
        <input name="author" type="text" placeholder="Your name" value={author} onChange={this.onAuthorChange} />
        <input name="title" type="text" placeholder="Post title" value={title} onChange={this.onTitleChange} />
        <textarea name="content" placeholder="Post content" value={content} onChange={this.onContentChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}