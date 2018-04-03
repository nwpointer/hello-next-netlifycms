import { Component } from 'react';
import Nav from '../components/Nav'
import posts from '../_content/posts.js'

export default class extends Component {
  static async getInitialProps({query}) {
  	return posts.load(query)
  }

  render() {
    return(
      <div>
        <Nav />
        <h1>{this.props.title}</h1>
        {this.props.body}
      </div>
    )
  }
}