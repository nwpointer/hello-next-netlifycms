import BasicPage from 'components/layouts/BasicPage'
import {header, subheader, body, aboutMe} from 'content/pages/about.json'
import ReactMarkdown from 'react-markdown';

const textStyle = {
	display: 'inline-block',
	padding: '2em',
	verticalAlign: 'top',
	position: 'relative',
	top: '-2.5em'
}

const imgStyle  ={
	display: 'inline-block',
	verticalAlign: 'top',
	padding: '1em',
	background: 'white',
	position: 'relative',
	top: '-50px',
	boxShadow: '1px 1px 10px #bfbebe',
}

export default () => (
  <BasicPage header={header} subheader={subheader}>
  	<img style={imgStyle} className="fill-current md:inline hidden md:w-1/3" src="/static/img/rbab.jpg" alt="" />
  	<div style={textStyle} className="md:w-2/3">
  		<ReactMarkdown source={body} />
  	</div>
  </BasicPage>
)