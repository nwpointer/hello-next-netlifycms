import BasicPage from 'components/layouts/BasicPage'
import {header, subheader, body, aboutMe} from 'content/pages/services.json'
import ReactMarkdown from 'react-markdown';
import services from 'content/services.json'

export default () => (
  <BasicPage header={header} subheader={subheader}>
  	<ReactMarkdown source={body} />
  </BasicPage>
)