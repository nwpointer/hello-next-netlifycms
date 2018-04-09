import { Component } from 'react';

import Nav from 'components/Nav'
import Page from 'components/layouts/Page'
import ContentLink from 'components/ContentLink'
import { listFromRecords} from '../mapContent'
import posts from 'content/posts.json'
import testimonials from 'content/testimonials.json'


const PostLink = (props, i) => (
  <li key={i} >
    <ContentLink type="post" record={props} />
  </li>
)

const Testimonial = ({body}, i) => {
  return <div key={i}>{body}</div>
}

export default class extends Component {
  render() {
    return(
      <Page>
        <p>Hello Next.js!!</p>
        { listFromRecords(posts).map(PostLink)}
        { listFromRecords(testimonials).map(Testimonial)}
      </Page>
    )
  }
}
