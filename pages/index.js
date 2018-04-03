import { Component } from 'react';

import Nav from '../components/Nav'
import ContentLink from '../components/ContentLink'
import { listFromRecords} from '../mapContent'
import posts from '../_content/posts.json'

const PostLink = (props, i) => (
  <li key={i} >
    <ContentLink type="post" record={props} />
  </li>
)

export default class extends Component {
  render() {
    return(
      <div>
        <Nav />
        <p>Hello Next.js!!</p>
        { listFromRecords(posts).map(PostLink)}
      </div>
    )
  }
}
