import BasicPage from 'components/layouts/BasicPage'
import {header, subheader, phone, email} from 'content/pages/contact.json'

export default () => (
  <BasicPage header={'thanks!'} subheader={"we've recieved your message and we'll get back to you asap"}>
      <div className="text-center container mx-auto">
        <div className="flex md:flex-row flex-col-reverse md:mx-auto">
        </div>
      </div>
  </BasicPage>
)