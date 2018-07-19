import { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import Link from 'next/link'


class Nav extends Component {
	constructor(props) {
	  super(props);
	  this.state = { active:false }
	}
	toggle(){
		const {active} = this.state;
		this.setState({ active:!active })
	}
	handleClickOutside() {
	   this.setState({ active:false })
	}
	render(){
		const size = 12;
		const {active} = this.state;
    const isActive= active ? 'is-active' : '';
		return (
			<nav className="shadow-md fixed">
			  <div className="container mx-auto overflow-hidden">
				  <div className="flex items-center justify-between flex-wrap">
					  {/* logo */}
					  <Link href="/">
					  <div className="logotype flex items-center flex-no-shrink md:mr-6 h-2 py-6 px-2">
					    <img className="fill-current w-10 mr-2"  src="/static/img/logo.png" alt="" />
					    <span className="font-semibold text-xl text-grey-darkest tracking-wide">GOOSEBERRY DOULAS</span>
					  </div>
					  </Link>
						{/* menu toggle */}
					  <div className="block md:hidden">
					    <div onClick={this.toggle.bind(this)} className="md:hidden ml-auto flex flex-col justify-center py-6 px-4">
		  					<div className={`hamburger ${isActive} flex justify-between flex-col`}>
		  						<div></div>
		  						<div></div>
		  						<div></div>
		  					</div>
		  				</div>
					  </div>
						{/* menu */}
					  <div onClick={this.toggle.bind(this)} className={`menu ${isActive} flex w-full md:w-auto`}>
				      <div className="w-full block ">
      		      <Link as="/aboutus" href="/about">
      			    	<div className="block border-t md:border-0 text-center md:inline-block hover:bg-grey-lightest bleed md:no-bleed py-6 md:px-4">
      				      <a className="block text no-underline text-grey-darkest hover:text-grey-darker md:inline-block md:mt-0">About</a>
      			    	</div>
      			    </Link>
			          <Link href="/services">
			    	    	<div className="block border-t md:border-0 text-center md:inline-block hover:bg-grey-lightest bleed md:no-bleed py-6 md:px-4">
			    		      <a className="block text no-underline text-grey-darkest hover:text-grey-darker md:inline-block md:mt-0">Services</a>
			    	    	</div>
			    	    </Link>
    	          <Link href="/blog">
    	    	    	<div className="block border-t md:border-0 text-center md:inline-block hover:bg-grey-lightest bleed md:no-bleed py-6 md:px-4">
    	    		      <a className="block text no-underline text-grey-darkest hover:text-grey-darker md:inline-block md:mt-0">Blog</a>
    	    	    	</div>
    	    	    </Link>
    	          <Link href="/contact">
    	    	    	<div className="block border-t md:border-0 text-center md:inline-block hover:bg-grey-lightest bleed md:no-bleed py-6 md:px-4">
    	    		      <a className="block text no-underline text-grey-darkest hover:text-grey-darker md:inline-block md:mt-0">Contact</a>
    	    	    	</div>
    	    	    </Link>
				      </div>
					  </div>
				  </div>
			  </div>
			  <style jsx>{`
			  	.fixed{
			  		width:100%;
			  		position: fixed;
			  		background:white;
			  	}
			  	.menu{
			  		display:none !important;
			  		user-select: none;
			  	}
			  	.menu.is-active{
			  		display:block !important;
			  	}

			  	@media (min-width: 768px) {
			  	  .menu{
  			  		display:block !important;
  			  	}
			  	}
			  	nav{
			  		max-width:100vw;
			  		font-family: 'Poppins', sans-serif;
			  		position:relative;
			  		z-index:10;
			  	}
			  	// nav:after{
			  	// 	content: "";
		    //         background: url('static/img/uploads/gooseberry.png');
		    //         opacity: 0.4;
		    //         top: 0;
		    //         left: 0;
		    //         bottom: 0;
		    //         right: 0;
		    //         position: absolute;
		    //         z-index: -1;   
		    //         // background-repeat: no-repeat;
		    //         background-position: 20% -220px; 
			  	// }
			  	a{
			  		letter-spacing: 2px;
	  		    text-transform: uppercase;
	  		    font-size: 14px;
			  	}
			  	.logotype{
			  		min-height: 60px;
			  		font-family: Alegreya,serif!important;
			  	}
			  	.hamburger{
			  		width: ${size*1.5}px;
			  		height: ${size}px;
			  	}
			  	.hamburger.is-active div:nth-child(1){
			  		transform: translateY(${(size/2)-1}px) rotate(45deg);
			  	}
			  	.hamburger.is-active div:nth-child(2){
			  		opacity: 0;
			  	}
			  	.hamburger.is-active div:nth-child(3){
			  		// display: none
			  		transform: translateY(-${(size/2)-1}px) rotate(-45deg);
			  	}
			  	.hamburger > div{
			  		opacity: 1;
			  		transition: all ease-in-out .1s;
			  		width: 100%;
			  		background: black;
			  		height: 2px;
			  	}
			  `}</style>
			</nav>
		)
	}
}

export default enhanceWithClickOutside(Nav)