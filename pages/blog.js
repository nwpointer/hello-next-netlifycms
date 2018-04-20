import { Component } from 'react';

import Nav from 'components/Nav'
import BasicPage from 'components/layouts/BasicPage'
import ContentLink from 'components/ContentLink'
import PostPreview from 'components/PostPreview'
import { listFromRecords} from '../mapContent'
import posts from 'content/posts.json'
import {header, subheader, filters} from 'content/pages/blog.json'
import ReactMarkdown from 'react-markdown';

const FiltersSidebar = () => (
  <div className="w-1/3 px-2 mt-8">
    <h3 className="light">Catagories</h3>
  </div>
)

export default class extends Component {
  render() {
    return(
      <BasicPage header={header} subheader={subheader} constrained={!filters}>
        <div className="flex flex-col md:flex-row-reverse">
          { filters ? FiltersSidebar() : null }
          <div className="px-2 mt-8">
            <div className="w-1/3">
              <h3 className="light">Recent</h3>
            </div>
            <br/>
            <div className="flex flex-wrap -mx-2">
              { listFromRecords(posts).map(post=> (
                <div className="w-full lg:w-1/3 md:w-1/2 px-2 mb-4 ">
                  {console.log(post)}
                  <PostPreview {...post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </BasicPage>
    )
  }
}
