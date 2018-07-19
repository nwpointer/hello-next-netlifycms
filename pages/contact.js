import BasicPage from 'components/layouts/BasicPage'
import {header, subheader, phone, email} from 'content/pages/contact.json'

export default () => (
  <BasicPage header={header} subheader={subheader}>
      <div className="text-center container mx-auto">
        <div className="flex md:flex-row flex-col-reverse md:mx-auto  md:-mt-12">
			<div className="bg-white p-8 rounded shadow-md md:mx-4 mb-4">
				<h3 className="mb-6">Direct message</h3>
			  <form name="contact" action="/contactSuccess" netlify>
			    <div className="w-full text-left">Name:</div>
			    <div className="flex">
			      <input className="bg-grey-lighter mr-2 p-2 mb-4 mt-2 rounded border w-full" type="text" placeholder="First Name" />
			      <input className="bg-grey-lighter ml-2 p-2 mb-4 mt-2 rounded border w-full" type="text" placeholder="Last Name" />
			    </div>
			    <div className="text-left">Email:</div>
			    <input className="bg-grey-lighter mr-2 p-2 mb-4 mt-2 rounded border w-full" type="email" placeholder="name@mail.com" />
			    
			    <div className="text-left">Subject:</div>
			    <input className="bg-grey-lighter mr-2 p-2 mb-4 mt-2 rounded border w-full" type="text" />
			    <div className="text-left">Message:</div>
			    <textarea className="bg-grey-lighter p-2 mb-4 mt-2 rounded border w-full" rows="3" cols="50"/>
			    <button type="submit" className="tracking-wide w-full mt-4 rounded bg-blue-darker poppins uppercase hover:bg-blue-darkest text-white text-sm py-4 px-6 border-2 border-blue-darker">
			      Send Message
			    </button>
			  </form>
			</div>
			<div className="flex md:w-1/3 md:flex-col w-full bg-white mb-6 rounded shadow md:bg-transparent md:shadow-none">
				<div className="w-1/2 md:w-full p-4 border-r md:border-r-0 md:bg-white md:mb-4 md:rounded md:shadow-md">
					<i className="fas fa-phone bg-blue text-white p-2 rounded-full mb-2"></i>
					<div><div className="light text-sm mb-1">Phone:</div> <b>{phone}</b></div>
				</div>
				<div className="w-1/2 md:w-full p-4 md:bg-white md:mb-4 md:rounded md:shadow-md">
					<i class="fas fa-envelope bg-blue text-white p-2 rounded-full mb-2"></i>
					<div>
						<div className="light text-sm mb-1">Email:</div>
						<b>{email.split('@')[0]}<wbr/>@{email.split('@')[1]}</b>
					</div>
				</div>
			</div>
        </div>
      </div>
  </BasicPage>
)