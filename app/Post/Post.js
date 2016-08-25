import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };
  
  static defaultProps = {
    title: 'No title',
    content: 'Empty'
  };

  render() {
    const { title, content } = this.props;
    return (
      <div className="post">
        <h2 className="post__title">{title}</h2>
        <p className="post__content">{content}</p>
      </div>
    )
  }
}
