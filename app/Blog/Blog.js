import React, { Component, PropTypes } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import Post from '../Post/Post';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedPost: null, posts: [] };

    this.onNewPostSubmit = this.onNewPostSubmit.bind(this);
    this.onPostClick = this.onPostClick.bind(this);
  }
  
  onNewPostSubmit(item) {
    const posts = this.state.posts;
    this.setState({ posts: [...posts, item] });
  }

  onPostClick(item) {
    this.setState({ selectedPost: item });
  }

  render() {
    const { posts, selectedPost } = this.state;

    return (
      <div className="blog">
        <List items={posts} onItemClick={this.onPostClick} />
        <Post {...selectedPost} />
        <Form onSubmit={this.onNewPostSubmit} />
      </div>
    )
  }
}