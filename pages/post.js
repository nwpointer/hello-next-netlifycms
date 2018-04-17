import { Component } from 'react'
import BasicPage from 'components/layouts/BasicPage'
import posts from 'content/posts.js'

export default class extends Component {
  static async getInitialProps({query}) {
  	return posts.load(query)
  }

  render() {
    return(
      <BasicPage>
        <h1>{this.props.title}</h1>
        {this.props.body}
      </BasicPage>
    )
  }
}