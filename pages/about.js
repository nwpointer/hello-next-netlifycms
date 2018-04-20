import BasicPage from 'components/layouts/BasicPage'
import {header, subheader, body, aboutMe} from 'content/pages/about.json'
import ReactMarkdown from 'react-markdown';

export default () => (
  <BasicPage header={header} subheader={subheader}>
  	<ReactMarkdown source={body} />
  </BasicPage>
)