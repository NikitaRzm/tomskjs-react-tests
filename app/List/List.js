import React, { Component, PropTypes } from 'react';

export default class List extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onItemClick: PropTypes.func
  };
  
  static defaultProps = {
    items: []
  };
  
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(item => <div>{item.toString()}</div>)}
      </div>
    )
  }
}
