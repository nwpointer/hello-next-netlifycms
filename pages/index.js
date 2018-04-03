import { Component } from 'react';

import Nav from '../components/Nav'
import ContentLink from '../components/ContentLink'
import { listFromRecords} from '../mapContent'
import posts from '../_content/posts.json'
import testimonials from '../_content/testimonials.json'

const PostLink = (props, i) => (
  <li key={i} >
    <ContentLink type="post" record={props} />
  </li>
)

const Testimonial = ({body}, i) => {
  return <div>{body}</div>
}

export default class extends Component {
  render() {
    return(
      <div>
        <Nav />
        <p>Hello Next.js!!</p>
        { listFromRecords(posts).map(PostLink)}
        { console.log(testimonials) } 
        { listFromRecords(testimonials).map(Testimonial)}
      </div>
    )
  }
}
