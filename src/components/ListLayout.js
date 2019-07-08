import React, { Component } from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import PostData from "./PostData";

const PostList = styled.ul`
  flex: 0 1 25%;
  list-style-type: none;
  text-align: left;
  margin: 0;

  li {
    margin: 4px 0;
    padding: 4px 0;
    width: 100%;
  }
`;

const PostDetails = styled.div`
  flex: 1;
  margin: 0;
`;

class ListLayout extends Component {
  state = {
    showDetails: false,
    posts: [],
    postData: null
  };

  componentDidMount() {
    const { posts } = this.props;

    this.setState({
      posts: posts.default
    });
  }

  loadPost = post => {
    this.setState({
      showDetails: true,
      postData: post
    });
  };

  render() {
    const { posts, showDetails, postData } = this.state;
    return (
      <>
        <PostList>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <a href="#" onClick={() => this.loadPost(post)}>
                  {post.post_title}
                </a>
              </li>
            );
          })}
        </PostList>
        <PostDetails>
          {!!showDetails && !!postData ? (
            <PostData postData={postData} />
          ) : (
            <p>Please select an entry</p>
          )}
        </PostDetails>
      </>
    );
  }
}

export default ListLayout;

ListLayout.propTypes = {
  posts: propTypes.object
};
