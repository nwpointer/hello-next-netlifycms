import { Component } from 'react';

import Nav from 'components/Nav'
import Page from 'components/layouts/Page'
import { listFromRecords} from '../mapContent'
import testimonials from 'content/testimonials.json'
import Ratio from 'react-ratio';

const Testimonial = ({body}, i) => {
  return <div key={i}>{body}</div>
}

const Hero = ({max="70vh", min="350px"}) =>(
  <div className="limit">
    <Ratio ratio={ 2/1 }>
      <div className="hero p-4 w-full h-full flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="serif md:text-5xl text-3xl highlight text-grey-darkest mb-2">You Deserve peace of mind</h1>
          <div className="serif md:text-3xl text-2xl highlight text-lg text-grey-darkest" >for both you & your baby</div>
          <br/><br/>
          <button className="tracking-wide rounded bg-blue-darker poppins uppercase hover:bg-blue-darkest text-white text-sm py-4 px-6 border-2 border-blue-darker">
            explore our services
          </button>
        </div>
      </div>
    </Ratio>
    <style jsx>{`
      .hero{
        background: 
          linear-gradient(rgba(247, 246, 238, 0.2), rgba(247, 246, 238, 0.4)), 
          url('https://c.pxhere.com/photos/6a/6a/newborn_baby_feet_basket_young_delicate_toes_small-622315.jpg!d');
        background-size: cover;
      }
      .highlight{
        text-shadow: 1px 1px rgba(241, 224, 212, 0.5);
      }
      .limit, .limit div{
        max-height:${max};
        // min-height: 300px;
      }
      .limit, .limit .hero{
        min-height: ${min};
      }
    `}</style>
  </div>
)

// <div className="container mx-auto">
//   { listFromRecords(testimonials).map(Testimonial)}
// </div>

const ServiceItem = ({name,description, img}) => (
  <div className="flex md:w-1/2 md:text-lg rounded hover:shadow bg-white hover:border-blue-lighter border-white border-grey-light border p-2 mb-4 mx-auto md:w-3/4">
    <img className="shadow-md rounded-full border-2 border-white h-16" src={img} />
    <div className="flex flex-col justify-center ml-4">
      <div className="text-grey-darkest"><b>{name}</b></div>
      <div className="hidden text-sm text-grey-darker md:block">{description}</div>
    </div>
    <div className="flex text-blue-darker flex-col justify-center ml-auto ">
      <div className="text-xl san-serif ml-4"><b>$40.00</b></div>
    </div>
  </div>
)

export default class extends Component {
  render() {
    return(
      <Page>
        <Hero />
        <div className="info bg-tan-lightest text-brown pt-8 xl:pb-32">
          <div className="small-container poppins lg:text-xl leading-normal text-center  mx-auto pb-8">
          <div>
            <img className="shadow-md hidden rounded-full border-4 border-white h-32 mb-4" src="/static/img/rachel2-head.jpg" alt=""/></div>
            <div className="p-8">
              Your entire experience from pregnancy to parenthood should be memorable, put you and your partner at ease and leave you feeling wrapped in comfort. <br/> <br/> <b>Learn how we can support you:</b>
            </div>
          </div>

          <div className="lg:flex lg:flex-row-reverse shadow-lg mt-2 xl:w-3/4 mx-auto">
            <div className="w-full bg-white p-4 pb-16">
              <h1 className="mt-8 mb-8 md:pb-8 md:pt-8 text-center border-1 uppercase poppins font-black tracking-wide">our services</h1>
              
              <ServiceItem 
                name="Post partum hourly packages"
                description="bla bla ya know"
                img="/static/img/rachel2-head.jpg"
              />
              <ServiceItem 
                name="Pre and post birth consults" 
                description="bla bla ya know"
                img="/static/img/rachel2-head.jpg"
              />
              <ServiceItem 
                name="Hand and foot massage" 
                description="bla bla ya know"
                img="/static/img/rachel2-head.jpg"
              />
              <ServiceItem 
                name="belly sifting and rebozo work" 
                description="bla bla ya know"
                img="/static/img/rachel2-head.jpg"
              />
              <ServiceItem 
                name="breastfeeding education" 
                description="bla bla ya know"
                img="/static/img/rachel2-head.jpg"
              />
            </div>
            <div className="w-full bg-face flex flex-col p-8 text-white">
              <div className="mt-auto">
                <img className="shadow-md hidden rounded-full border-4 border-white h-32 mb-4" src="/static/img/rachel-head.jpg" alt=""/>
                <h1 className="uppercase poppins font-black tracking-wide mb-4 mt-4">Rachel is a DONA certified doula</h1>
                <p>should be memorable, put you and your partner at ease and leave you feeling wrapped in comfort.</p>
                <a className="mt-4 text-white inline-block" href="/about"> learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-section bg-tan-light text-brown pt-8 pb-32">
          <div className="container mx-auto">
            <h4 className="mt-16 text-center tracking-widest  mb-4 text-center uppercase poppins font-black ">
              Testimonials
            </h4>
            <h1 className="text-center text-brown-dark border-1 uppercase serif font-black tracking-wide">
              What people are saying:
            </h1>
            <div className="flex align-center justify-center px-4  mt-16">
              <div className="ml-auto mr-4 flex hover:text-brown-dark">
                <div className="hidden sm:block my-auto arrow">
                  <i style={{lineHeight:"1.6em"}} className="fas text-3xl fa-angle-left block "></i>
                </div>
              </div>
              <div style={{"maxWidth":"400px"}} className="bg-white text-center text-grey-darker rounded shadow-md">
                <div className="w-full flex ">
                  <img src="/static/img/rachel2-head.jpg" className="shadow-md -mt-8 mx-auto rounded-full border-4 border-white w-16 h-16 mb-4" alt=""/>
                </div>
                <div className="mx-8 mb-4">
                  <h4 className="mb-2">Sarray Fowler</h4>
                  <p className="leading-normal pb-4">"best doula in town, hands down. Very professional and made the process so much easier. would recommend"</p>
                </div>
              </div>
              <div className="mr-auto ml-4 flex hover:text-brown-dark">
                <div className="hidden sm:block my-auto arrow">
                  <i style={{lineHeight:"1.6em"}} className="fas text-3xl fa-angle-right "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-section appointment text-brown sm:pt-16 sm:pb-16">
          <div className="text-center container mx-auto">
             <div style={{"maxWidth":"600px"}} className="bg-white p-8 sm:p-16 mx-auto sm:rounded sm:shadow-md">
              <h1 className="text-center pb-16 pt-8 uppercase poppins font-black tracking-wide">
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
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                  <option value="5">Honda</option>
                  <option value="6">Jaguar</option>
                  <option value="7">Land Rover</option>
                  <option value="8">Mercedes</option>
                  <option value="9">Mini</option>
                  <option value="10">Nissan</option>
                  <option value="11">Toyota</option>
                  <option value="12">Volvo</option>
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
        </div>
        <div className="blog-section bg-tan-light text-brown pt-8 pb-32">
          <h1 className="pt-16 pb-2 text-4xl text-center text-brown-dark border-1 uppercase serif font-black tracking-wide">
            From the blog
          </h1>
          <p className="text-center text-brown-light pb-8 px-4 poppins">"Before anything else, preparation is the key to success."</p>
            <div className="container mx-auto px-2 mt-4">
            <div className="flex flex-wrap -mx-2 px-2">
              <div className="mx-auto sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="h-full bg-white hover:-mt-2 transition-fast flex flex-col rounded shadow hover:shadow-lg">
                  <img className="rounded-t" src="/static/img/uploads/safe_image.jpg" alt=""/>
                  <div className="p-8 flex flex-col flex-1">
                    <h2 className="mb-2 serif">New Guidelines Establish The Rights Of Women When Giving Birth</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi similique fugiat eaque </p>
                    <br/>
                    <a className="mt-auto text-blue-dark no-underline hover:text-blue" href="/">
                      read more
                      <i className="fas ml-1 fa-angle-right "></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="h-full bg-white hover:-mt-2 transition-fast flex flex-col rounded shadow hover:shadow-lg">
                  <img className="rounded-t" src="/static/img/uploads/safe_image-1.jpg" alt=""/>
                  <div className="p-8 flex flex-col flex-1">
                    <h2 className="mb-2 serif">Doula Support For Pregnant Women Could Improve Care, Reduce Costs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at, culpa inventore quis, </p>
                    <br/>
                    <a className="mt-auto text-blue-dark no-underline hover:text-blue" href="/">
                      read more
                      <i className="fas ml-1 fa-angle-right "></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto sm:w-1/2 md:w-1/3 px-2 mb-4 sm:hidden lg:inline">
                <div className="h-full bg-white hover:-mt-2 transition-fast flex flex-col rounded shadow hover:shadow-lg">
                  <img className="rounded-t" src="/static/img/uploads/safe_image-2.jpg" alt=""/>
                  <div className="p-8 flex flex-col flex-1">
                    <h2 className="mb-2 serif">Having A Doula: Their Benefits And Purpose</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae blanditiis doloremque, officiis aliquam </p>
                    <br/>
                    <a className="mt-auto text-blue-dark no-underline hover:text-blue" href="/">
                      read more
                      <i className="fas ml-1 fa-angle-right "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mx-auto mt-8">
              <a className="tracking-wide rounded no-underline bg-blue-darker poppins uppercase hover:bg-blue-darkest text-white text-sm py-4 px-6 border-2 border-blue-darker" href="/blog">read more posts</a>
            </div>
          </div>
        </div>
        <style jsx>{`
          .appointment{
            background: url('/static/img/uploads/download-5.png'), #f7f7ee73;
            background-size: cover;
            po
          }
          .arrow{
            padding: 0em;
            width: 3em;
            height: 3em;
            text-align: center;
            border-radius: 9999px;
            background: rgba(0,0,0,0.05);
          }
          .bg-face{
            min-height:600px;
            background: linear-gradient(to top, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)), url('/static/img/rachel.jpg');
            background-position: top center, top center;
            background-size: cover, cover;
            // // background-repeat: no-repeat, no-repeat;
            // // background-position: top center, top center;
            // background-size: contain, contain;
            // // background: cover linear-gradient(to top, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)), cover url('/static/img/rachel.jpg');
            // background: linear-gradient(to top, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)), url('/static/img/rachel.jpg') no-repeat top center; 
          }
          .special-card{
            background: url('/static/img/uploads/download-2.png'), white;
            background-repeat:no-repeat;
            // background-size: cover;
            // background-position: center center;
          }
          .small-container{
            max-width:670px;
          }
        `}</style>
      </Page>
    )
  }
}
