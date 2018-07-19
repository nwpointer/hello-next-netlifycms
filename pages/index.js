import { Component } from 'react';
import { filter } from 'lodash';
import { Carousel } from 'react-responsive-carousel';
import { Swipeable, defineSwipe } from 'react-touch';

import Nav from 'components/Nav'
import Hero from 'components/Hero'
import Page from 'components/layouts/Page'
import PostPreview from 'components/PostPreview'
import {TanSection, BackgroundSection} from 'components/Containers'
import { listFromRecords} from '../mapContent'
import testimonials from 'content/testimonials.json'
import posts from 'content/posts.json'
import services from 'content/services.json'
import pageContent from 'content/pages/home.json';

function mod(n, m) {
  return ((n % m) + m) % m;
}

const matches = (a,b)=>{
  return b.map(where => {
    const matches = filter(a, where)
    return Array.isArray(matches) && matches[0]
  })
}

const CallToAction = ({primaryText, secondaryText})=>(
  <div className="small-container pt-8 poppins lg:text-xl leading-normal text-center mx-auto pb-8">
    <div className="p-8">
      {primaryText}
      <br/> <br/> 
      <b>{secondaryText}</b>
    </div>
  </div>
)

const formatAsMoney = (price, currency="$") => currency+(price/100).toFixed(2)

const ServiceItem = ({title,description, price, icon}) => (
  <a className="no-underline" href="/services">
  <div className="flex  md:w-1/2 md:text-lg rounded hover:shadow bg-white hover:border-blue-lighter border-white border-grey-light border p-2 mb-4 mx-auto md:w-3/4">
    { icon && <img className="shadow-md rounded-full border-2 border-white h-16 w-16" src={icon} />}
    <div className="flex flex-col justify-center ml-4">
      <div className="text-grey-darkest"><b>{title}</b></div>
      <div className="hidden text-sm text-grey-darker md:block">{description}</div>
    </div>
    <div className="flex text-blue-darker flex-col justify-center ml-auto ">
      {
        Number(price) > 0 && 
        <div className="text-xl san-serif ml-4"><b>{formatAsMoney(price)}</b></div>
      }
    </div>
  </div>
  </a>
)

const ServicesList = ({services}) => (
  <div className="flex flex-col w-full bg-white p-4 pb-16">
    <div>
      <h1 className="mt-8 mb-8 md:pb-8 md:pt-8 text-center border-1 uppercase poppins font-black tracking-wide">our services</h1>
      { listFromRecords(services).map(ServiceItem) }
    </div>
    <div className="mt-auto hidden">
    <a className="
      mt-4 inline-block no-underline
      flex md:w-1/2 md:text-lg p-2 mb-4 mx-auto md:w-3/4
    " href="/services">
      <div className="ml-4">
        Learn more
      </div>
      
      <i className="fas ml-1 fa-angle-right "></i>
    </a></div>
  </div>
)

const AboutHero = () => (
  <div className="w-full bg-face flex flex-col p-8 text-white">
    <div className="mt-auto">
      <img className="shadow-md hidden rounded-full border-4 border-white h-32 mb-4" src="/static/img/rachel-head.jpg" alt=""/>
      <h1 className="uppercase poppins font-black tracking-wide mb-4 mt-4">Rachel is a DONA trained doula</h1>
      <div className="font-hairline leading-tight">
        <div className="light">
          <p>Rachel is a birth and postpartum full spectrum doula who beleives in  a  mothers right to empowered choice in the birth process.
          

          </p>
        </div>
        <a className="mt-4 text-white inline-block no-underline" href="/aboutus">
          Learn more
          <i className="fas ml-1 fa-angle-right "></i>
        </a>
      </div>
    </div>
    <style jsx>{`
      .bg-face{
        min-height:600px;
        background: linear-gradient(to top, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)), url('/static/img/rachel.jpg');
        background-position: top center, top center;
        background-size: cover, cover;
      }
    `}</style>
  </div>
)


const Testimonial = ({name, date, text, picture}) => (
  <div style={{"maxWidth":"400px"}} className="bg-white overflow-show text-center text-grey-darker rounded shadow-md">
    <div className="w-full flex ">
      {picture && <img src={picture} className="shadow-md -mt-8 -mb-2  mx-auto rounded-full border-4 border-white w-16 h-16" alt=""/>}
    </div>
    <div className="mx-8 mt-6">
      <h4 className="mb-2">{name}</h4>
      <p className="leading-normal pb-6">
        {text}
      </p>
    </div>
  </div>
)

class TestimonialSection extends Component {
  constructor(props) {
    super(props);
    const {where, testimonials} = props;
    const testimonialList = listFromRecords(testimonials)
    const matchingTestimonials = matches(testimonialList, where)
    this.items = matchingTestimonials
    this.state = {n:0}
  }
  delta(n){
    const max = this.items.length
    this.setState({n: mod((n+this.state.n),max)})
  }
  render(){
    const {show, where, testimonials} = this.props;
    return (
      <TanSection>
        <Hideable show={show} className="container mx-auto mt-16 pb-16">
          <h4 className="text-center tracking-widest  mb-4 text-center uppercase poppins font-black ">
            Testimonials
          </h4>
          <h1 className="text-center text-brown-dark border-1 uppercase serif font-black tracking-wide">
            What people are saying:
          </h1>
          <div className="flex hidden align-center justify-center px-4 mt-16">
            <div className="ml-auto mr-4 flex hover:text-brown-dark" onClick={()=>this.delta(-1)}>
              <div className="hidden sm:block my-auto arrow">
                <i style={{lineHeight:"1.6em"}} className="fas text-3xl fa-angle-left block "></i>
              </div>
            </div>
            <div>
                {
                  this.items.map((item, i)=>(
                    <Swipeable onSwipeLeft={()=>this.delta(1)} onSwipeRight={()=>this.delta(-1)} >
                      <div key={i} style={{"userSelect": "none"}}>
                        <Hideable show={this.state.n == i}>
                          <Testimonial {...item} />
                        </Hideable>
                      </div>
                    </Swipeable>
                  ))
                }
            </div>
            <div className="mr-auto ml-4 flex hover:text-brown-dark" onClick={()=>this.delta(1)}>
              <div className="hidden sm:block my-auto arrow">
                <i style={{lineHeight:"1.6em"}} className="fas text-3xl fa-angle-right "></i>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-row mt-6">
            {
              this.items.map((item, i)=>(
                <div className={`bg-grey${this.state.n == i ? '-darker': ''} w-2 h-2 m-1 rounded-full`}></div>
              ))
            }
          </div>

          <style jsx>{`
            .arrow{
              padding: 0em;
              width: 3em;
              height: 3em;
              text-align: center;
              border-radius: 9999px;
              background: rgba(0,0,0,0.05);
            }
          `}</style>
        </Hideable>
      </TanSection>
    )
  }
}

const AppointmentSection = ({show}) => (
  <Hideable show={show}> 
    <BackgroundSection className="sm:pt-16 sm:pb-16">
      <div className="text-center container mx-auto">
        <div style={{"maxWidth":"600px"}} className="bg-white p-8 sm:p-16 mx-auto sm:rounded sm:shadow-md">
          <h1 className="text-center pb-16 pt-8 text-brown uppercase poppins font-black tracking-wide">
            Appointment
          </h1>
          <form action="#">
            <div className="w-full text-left">Name:</div>
            <div className="flex">
              <input className="bg-grey-lighter mr-2 p-2 mb-4 mt-2 rounded border w-full" type="text" placeholder="First Name" />
              <input className="bg-grey-lighter ml-2 p-2 mb-4 mt-2 rounded border w-full" type="text" placeholder="Last Name" />
            </div>
            <div className="text-left">Email:</div>
            <input className="bg-grey-lighter mr-2 p-2 mb-4 mt-2 rounded border w-full" type="email" placeholder="name@mail.com" />
            <div className="text-left">Service:</div>
            <select style={{height:"34px"}} className="bg-grey-lighter p-2 mb-4 mt-2 rounded border w-full">
              <option value="0">Select Service:</option>
              {
                listFromRecords(services).map(s => <option value={s.title}>{s.title}</option>)
              }
            </select>
            <div className="text-left">Ideal Date:</div>
            <input style={{height:"34px"}} className="bg-grey-lighter p-2 mb-4 mt-2 rounded border w-full" type="date" />
            <div className="text-left">Additional info or questions</div>
            <textarea className="bg-grey-lighter p-2 mb-4 mt-2 rounded border w-full" rows="4" cols="50"/>
            <button className="tracking-wide w-full mt-4 rounded bg-blue-darker poppins uppercase hover:bg-blue-darkest text-white text-sm py-4 px-6 border-2 border-blue-darker">
              Request an appointment
            </button>
          </form>
        </div>
      </div>
    </BackgroundSection>
  </Hideable>
)

const BlogHighlights = ({show, primaryText, secondaryText, where, posts}) => {
  const postList = listFromRecords(posts);
  const matchingPosts = matches(postList, where)
  return (
    <Hideable show={show}>
      <div className="bg-tan-light text-brown pt-8 pb-32">
        <h1 className="pt-16 pb-2 text-4xl text-center text-brown-dark border-1 uppercase serif font-black tracking-wide">
          { primaryText }
        </h1>
        <p className="text-center text-brown-light pb-8 px-4 poppins">
          { secondaryText }
        </p>
        <div className="container mx-auto px-2 mt-4">
          <div className="flex flex-wrap -mx-2 px-2">
            <div className="mx-auto sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <PostPreview {...matchingPosts[0]} />
            </div>
            <div className="mx-auto sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <PostPreview {...matchingPosts[1]} />
            </div>
            <div className="mx-auto sm:w-1/2 lg:w-1/3 px-2 mb-4 sm:hidden lg:inline">
              <PostPreview {...matchingPosts[2]} />
            </div>
          </div>
          <div className="text-center mx-auto mt-8">
            <a className="tracking-wide rounded no-underline bg-blue-darker poppins uppercase hover:bg-blue-darkest text-white text-sm py-4 px-6 border-2 border-blue-darker" href="/blog">read more posts</a>
          </div>
        </div>
      </div>
    </Hideable>
  )
}

const Hideable = ({show, className, children})=> (
  <div className={className} style={show ? {} : {display:'none'}}>
    {children}
  </div>
)

const SplitScreen = ({className="", children}) => (
  <section className={`${className} lg:flex lg:flex-row-reverse shadow-lg mt-2 xl:w-3/4 mx-auto xl:mb-32`}>
    {children}
  </section>
)

export default class extends Component {
  render() {
    return(
      <Page>
        <Hero {...pageContent.hero} />
        <TanSection light={true}>
          <CallToAction {...pageContent.cta}/>

          <SplitScreen>
            <ServicesList services={services} />
            <AboutHero />
          </SplitScreen>
          
          <div className="p-8 md:p-4 lg:p-0 lg:-mt-8 lg:pb-4" style={{textAlign:'center', position:'relative'}}>
            <h2>WHAT IS A DOULA?</h2>
            <p style={{maxWidth:"400px", margin:'auto', paddingBottom: '2em'}}>
              A doula is a person who supports women and their partner during the labor and after.  She tends to your nonmedical needs and is an advocate for you in during your birth.
            </p>
          </div>

        </TanSection>
        <TestimonialSection testimonials={testimonials} {...pageContent.testimonials} />
        <AppointmentSection show={pageContent.appointment} />
        <BlogHighlights posts={posts}  {...pageContent.blog} />
      </Page>
    )
  }
}
