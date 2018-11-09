import React, { Component } from 'react';
import axios from 'axios'

export default class Reddit extends Component {

  // must initialize state first before using axios or whatever!
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then(res => {
      const posts = res.data.data.children.map(obj => obj.data)
      this.setState({ posts })
      console.log(this.state.posts)
    })
  }

  render() {
    return(
      <div>
        <h1>/r/reactjs</h1>
        <ul>
          { this.state.posts.map(post => (
            <li key={ post.id }>
              <a href={ post.url }>{ post.title }</a>
              <br />
              <p>Author: { post.author }</p>
              <p>Upvotes: { post.score }</p>
              <p>Comments: { post.num_comments }</p>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}
