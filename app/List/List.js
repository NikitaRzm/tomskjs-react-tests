import React, { Component, PropTypes } from 'react';
import PostItem from '../Item/Item';

export default class PostsList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(PostItem.propTypes)),
    onItemClick: PropTypes.func
  };
  
  static defaultProps = {
    items: []
  };

  render() {
    const { items, onItemClick } = this.props;

    return (
      <div className="posts-list">
        {
          items.length ?
            items.map((item, index) => <PostItem key={index} onClick={onItemClick} {...item} />)
            :
            <p>No items</p>
        }
      </div>
    )
  }
}
