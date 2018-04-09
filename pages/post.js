import { Component } from 'react'
import Page from 'components/layouts/Page'
import posts from 'content/posts.js'

export default class extends Component {
  static async getInitialProps({query}) {
  	return posts.load(query)
  }

  render() {
    return(
      <Page>
        <h1>{this.props.title}</h1>
        {this.props.body}
      </Page>
    )
  }
}