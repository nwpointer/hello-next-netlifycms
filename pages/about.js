import BasicPage from 'components/layouts/BasicPage'
import {header, subheader, body, aboutMe} from 'content/pages/about.json'
import ReactMarkdown from 'react-markdown';

const textStyle = {
	width: '66%',
	display: 'inline-block',
	padding: '2em',
	verticalAlign: 'top',
	position: 'relative',
	top: '-2.5em'
}

const imgStyle  ={
	width: '33%',
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
  	<img style={imgStyle} className="fill-current" src="/static/img/rbab.jpg" alt="" />
  	<div style={textStyle} >
  		<ReactMarkdown source={body} />
  	</div>
  </BasicPage>
)