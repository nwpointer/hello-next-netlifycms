import { Component } from 'react'
import Ratio from 'react-ratio';
import Page from 'components/layouts/Page'
import ReactMarkdown from 'react-markdown';
import posts from 'content/posts.js'



const Hero = ({max="40vh", min="150px", background, button, primaryText, secondaryText}) =>(
  <div className="limit escape">
    <Ratio ratio={ 2/1 }>
      <div className="hero p-4 w-full h-full flex items-end justify-end">
        <div className="container mx-auto">
          <h1 className="serif md:text-5xl text-3xl highlight text-grey-darkest sm:ml-4 mb-4">{primaryText}</h1>
        </div>
      </div>
    </Ratio>
    <style jsx>{`
      .hero{
        background: 
          linear-gradient(rgba(247, 246, 238, 0.4), rgba(247, 246, 238, 1)), 
          url('${background}');
        background-size: cover;
      }
      .highlight{
        text-shadow: 1px 1px rgba(241, 224, 212, 0.5);
      }
      .limit, .limit div{
        max-height:${max};
      }
      .limit, .limit .hero{
        min-height: ${min};
      }
    `}</style>
  </div>
)

export default class extends Component {
  static async getInitialProps({query}) {
  	return posts.load(query)
  }

  render() {
    const {thumbnail, title} = this.props
    return(
      <Page>
        <Hero background={thumbnail} primaryText={title} />
        <div className="border-t border-tan-lighter">
          <div className="container mx-auto blog-post">
            <div className="sm:p-8 p-4 pt-8 sm:pt-16 bg-white sm:m-4 mt-4 sm:rounded sm:shadow-md round md:p-16" style={{maxWidth:"800px"}}>
              <ReactMarkdown source={this.props.body} />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}