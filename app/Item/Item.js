import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  static propTypes = {
    id: PropTypes.number,
    date: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
  };
  
  static defaultProps = {
    id: -1,
    date: 'No date',
    title: 'No title',
    author: 'No name',
    content: 'No content'
  };
  
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    const { id, title, date, author, content, onClick } = this.props;
    if (onClick) onClick({ id, title, date, author, content });
  }

  render() {
    const { title, date, author, content, className } = this.props;

    return (
      <div className={`post-item ${className}`} onClick={this.onClick}>
        <h3 className="post-item__title">{title}</h3>
        <p className="post-item__author">{author}</p>
        <p className="post-item__content">{content}</p>
        <span className="post-item__date">{date}</span>
      </div>
    );
  }
}