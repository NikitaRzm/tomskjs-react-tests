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
  
  constructor(props) {
    super(props);
    
    this.state = { selectedItem: {} };

    this.onItemClick = this.onItemClick.bind(this);
  }
  
  onItemClick(item) {
    const { onItemClick } = this.props;
    if (onItemClick) onItemClick(item);

    this.setState({ selectedItem: item });
  }

  render() {
    const { items } = this.props;
    const { selectedItem } = this.state;

    return (
      <div className="posts-list">
        {
          items.length ?
            items.map((item, index) =>
              <PostItem
                {...item}
                key={index}
                className={item.id === selectedItem.id ? 'selected' : ''}
                onClick={this.onItemClick} />
            ) : <p>No items</p>
        }
      </div>
    )
  }
}
