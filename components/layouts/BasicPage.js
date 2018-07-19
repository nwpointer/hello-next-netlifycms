import Page from './Page'
import { BackgroundSection, TanSection } from 'components/Containers';

const geo = 'uppercase poppins font-black tracking-wide'

export default ({header, subheader, constrained=true, children})=>(
  <Page>
  	<div className="h-full flex flex-col">
	  	{
	  		header &&
  		  	<BackgroundSection>
  				<div className="text-center mx-auto container p-16 pb-8 md:p-24 md:pb-16 pr-4 pl-4 ">
  					<h1 className="text-4xl text-center text-brown-dark border-1 uppercase poppins font-black tracking-wider">
  						{header}
  					</h1>
  					<p className="lighter mt-3 subheader">
  						{subheader}
  					</p>
  				</div>
  		  	</BackgroundSection>
	  	}
		<TanSection light={true} className="flex-1 overflow-visible border-t border-tan-lighter">
			<div className={`container ${constrained ? 'lg:w-3/4' : ''} mx-auto mx-auto p-4 h-full`}>
        {children}
			</div>
		</TanSection>
  	</div>
    <style jsx>{`
      .subheader{
        max-width: 500px;
        margin-right:auto;
        margin-left:auto;
      }
    `}</style>
  </Page>
)
