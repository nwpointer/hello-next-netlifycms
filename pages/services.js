import BasicPage from 'components/layouts/BasicPage'
import {header, subheader, body, aboutMe} from 'content/pages/services.json'
import ReactMarkdown from 'react-markdown';
import services from 'content/services.json'
import { listFromRecords} from '../mapContent'

const formatAsMoney = (price, currency="$") => currency+(price/100).toFixed(2)

const ServicesList = ({services, title, src}) => (
  <div className="w-full h-full bg-white p-4 pb-16">
  	<img className="w-1/2 block m-auto" src={src} alt=""/>
    <h1 className="mt-8 mb-8 md:pb-8 md:pt-8 text-center border-1 uppercase poppins font-black tracking-wide">{title}<br/>services</h1>
    { listFromRecords(services).map(ServiceItem) }
  </div>
)

const ServiceItem = ({title,description, price, icon}) => (
  <div className="flex md:text-lg rounded px-12 py-2 md:w-3/4">
    <div className="flex flex-col justify-center">
      <div className="text-grey-darkest"><b>{title}</b></div>
      <div className="hidden text-sm text-grey-darker md:block">{description}</div>
    </div>
  </div>
)


console.log({services})

const prenatal = {
	bp: {title: "Birth plan", description: "", price: "0"},
	bpb: {title: "Birth support", description: "", price: "0"},
	bpbb: {title: "Birth Position practice", description: "", price: "0"},
	bpbbb: {title: "Pain reduction techniques", description: "", price: "0"}
}

const postpartum = {
	bbfb: {title: "Overnight care", description: "", price: "0"},
	bbfbb: {title: "Maternal massage", description: "", price: "0"},
	bbfbbb: {title: "Breast feeding support", description: "", price: "0"},
	bbfbbbb: {title: "Meal prep", description: "", price: "0"},
}

export default () => (
  <BasicPage header={header} subheader={subheader}>
	<div className="flex flex-col md:flex-row mb-4 md:-mt-16">
		<div className="md:w-full shadow-md md:m-4">
			<div className="w-full h-full pt-8 bg-white pb-16">
				<img className="w-1/2 block -mb-4 m-auto" src={"/static/img/babyblue.png"} alt=""/>
			  <h2 className="mt-4 serif px-8 pt-4 pb-4 mb-8 md:pb-8 md:pt-8 text-center border-1 uppercase poppins font-black tracking-wide">Birth doula services</h2>
			  <h2 className="text-center text-black-light -mt-12 mb-8">$600 package</h2>
			  <p className="px-8 md:px-12">
			  	As a birth doula, I can help guide you through the later stages of pregnancy.  We can practice birthing positions that you might be interested in using, and find ways to involve your birth partner to the level they feel most comfortable. 
			  </p>
			  <p className="px-8 md:px-12">
			  	We can talk about the pros and cons of medicated or unmedicated birth, and whether or not you want to give birth at home or in a hospital.  I attend all types of births, and want to help you achieve your own personal birth goals.
			  	{/*I am on call for the 4 weeks leading up to your due date, and once you begin your labor journey, your doula is there to guide and support you, and your family as it grows. */}
			  </p>

			  <h4 className="px-8 md:px-12 pb-3">Service includes:</h4>
			  { listFromRecords(prenatal).map(ServiceItem) }
			</div>
		</div>
		<div className="md:w-full shadow-md md:m-4 mt-4">
			<div className="w-full h-full pt-8 bg-white pb-16">
				<img className="w-1/2 block m-auto" src={"/static/img/postyello.png"} alt=""/>
			  <h2 className="mt-0 serif px-8 pt-4 pb-4 mb-8 md:pb-8 md:pt-8 text-center border-1 uppercase poppins font-black tracking-wide">Postpartum services</h2>
			  <h2 className="text-center text-black-light -mt-12 mb-8">$15 / hr</h2>
			  <p className="px-8 md:px-12">
			  	Feel like you might want additional support postpartum?  Its okay if you haven't hired us for your birth.  We can also help support you in your postpartum period. 
			  </p>
			  <p className="px-8 md:px-12">
			  	Want help figuring out the finer points of pumping, or need help getting a good position for a great latch?  As a postpartum doula, we can help take care of baby so you and or your parnter can get some much needed rest.  Talk to us about your birth experience, and start to process it.
			  </p>
			  <h4 className="px-8 md:px-12 pb-3">Service may include:</h4>
			  { listFromRecords(postpartum).map(ServiceItem) }
			</div>
		</div>
	</div>
	<div className="flex flex-row mb-4">
		<div className="p-4" style={{textAlign:'center', maxWidth:'500px', margin:'auto'}}>
			<h2>Free Consultation</h2>
			<p>Our initial consultation is always free. This is a one hour meeting where we get to know each other and find out if I am the right fit for you and your partner. </p>
			<a href="/contact">
				<button className="tracking-wide mt-4 mb-8 rounded bg-blue-darker poppins uppercase hover:bg-blue-darkest text-white text-sm py-4 px-6 border-2 border-blue-darker">
				  Request a Consultation
				</button>
			</a>
		</div>
	</div>
  </BasicPage>
)