import Page from './Page'
import { BackgroundSection, TanSection } from 'components/Containers';

const geo = 'uppercase poppins font-black tracking-wide'

export default ({header, children})=>(
  <Page>
  	<div className="h-full flex flex-col">
	  	<BackgroundSection>
			<div className="text-center mx-auto container p-16">
				<h1 className="text-4xl text-center text-brown-dark border-1 uppercase poppins font-black tracking-wide">
					{header}
				</h1>
				<p>
				"to read is to knowlege as booksa are to fields"
				</p>
			</div>
	  	</BackgroundSection>
		<TanSection light={true} className="flex-1 overflow-visible border-t border-tan-lighter">
			<div className="container mx-auto p-4 h-full">
				{children}
			</div>
		</TanSection>
  	</div>
  </Page>
)
