import { Component } from 'react';
import Nav from 'components/Nav'

export default ({className, children})=>(
  <div className="h-full flex flex-col">
    <Nav />
    <div className={`flex-1 ${className}`} style={{'marginTop':'60px'}}>
      { children }
    </div>
    <footer className="pin-b">
	    <div className=" text-black p-4 text-center" style={{background: "#afaf90"}} >
			<div className="flex flex-col md:flex-row container mx-auto p-4">
				<div className="text-white text-sm md:text-base mb-4 md:m-0 w-full md:w-auto poppins">
					© 2018 Gooseberry Doulas LLC
				</div>
				<div className="ml-auto w-full md:w-auto">
					<a target="_blank" href="https://www.facebook.com/gooseberrydoulasPDX/?timeline_context_item_type=intro_card_work&timeline_context_item_source=100002591554029">
						<i className="text-white ml-2 fab fa-facebook-square text-xl"></i>
					</a>
					<a target="_blank" href="https://www.pinterest.com/gooseberrydoulas/">
						<i className="text-white ml-2 fab fa-pinterest text-xl"></i>
					</a>
					
				</div>
			</div>
	    </div>
    </footer>
  </div>
)
