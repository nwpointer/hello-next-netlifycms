const BackgroundSection = ({img, className, children})=>(
  <section className={`${className} background`} >
      {children}
    <style jsx>{`
      .background{
        background: url('${img || "/static/img/uploads/download-5.png"}'), #f7f7ee73;
        background-size: cover;
      }
    `}</style>
  </section>
)

const TanSection = ({light, className, children})=>(
  <section className={`${className} bg-tan-${light? 'lightest':'light'} text-brown overflow-auto`} >
    {children}
  </section>
)

export {
	TanSection,
	BackgroundSection
}