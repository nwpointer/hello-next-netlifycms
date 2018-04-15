import BasicPage from 'components/layouts/BasicPage'

export default () => (
  <BasicPage header={'Contact'}>
      <div className="text-center container mx-auto">
        <div style={{"maxWidth":"600px"}} className="bg-white -mt-12 mb-8 sm:p-16 mx-auto sm:rounded sm:shadow-md">
          <form action="#">
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
            <button className="tracking-wide w-full mt-4 rounded bg-blue-darker poppins uppercase hover:bg-blue-darkest text-white text-sm py-4 px-6 border-2 border-blue-darker">
              Send Message
            </button>
          </form>
        </div>
      </div>
  </BasicPage>
)