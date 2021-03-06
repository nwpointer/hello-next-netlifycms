import Ratio from 'react-ratio';

const Hero = ({max="70vh", min="350px", background, button, primaryText, secondaryText}) =>(
  <div className="limit">
    <Ratio ratio={ 2/1 }>
      <div className="hero p-4 w-full h-full flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="serif md:text-5xl text-3xl highlight text-grey-darkest mb-2">{primaryText}</h1>
          <div className="serif md:text-3xl text-2xl highlight text-lg text-grey-darkest" >{secondaryText}</div>
          <br/><br/>
          <a href="/services">
            <button style={{background: "#105a98", borderColor:"#105a98"}} className="tracking-wide rounded bg-blue-dark hover:bg-blue-dark poppins uppercase text-white text-sm py-4 px-6 border-2 border-blue-dark">
              { button }
            </button>
          </a>
        </div>
      </div>
    </Ratio>
    <style jsx>{`
      .hero{
        background: 
          linear-gradient(rgba(247, 246, 238, 0.2), rgba(247, 246, 238, 0.4)), 
          url('${background}');
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

export default Hero