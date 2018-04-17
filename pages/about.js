import BasicPage from 'components/layouts/BasicPage'
import {header, subheader, body, aboutMe} from 'content/pages/about.json'

export default () => (
  <BasicPage header={header} subheader={subheader}>
  	{body}
  </BasicPage>
)