import Link from 'next/link'

const summary = n => body => {
  const shortened = body.split(' ', n).join(' ')
  return shortened.length < body.length
    ? shortened + '...' 
    : shortened
}

const PostPreview = ({title='title', body='body', slug, thumbnail='/'})=>(
  <Link href={'/post/' + slug}>
    <a href={'/post/' + slug} className="block h-full text no-underline text-grey-darkest md:inline-block md:mt-0">
      <div className="h-full bg-white hover:-pt-2 transition-fast flex flex-col rounded shadow hover:shadow-lg">
        <img className="rounded-t border-b-4 border-lavender" src={thumbnail} alt={thumbnail}/>
        <div className="p-6 pt-4 flex flex-col flex-1">
          <h2 className="mb-2 serif">{title}</h2>
          <p>{summary(10)(body)}</p>
          <br/>
          <a className="mt-auto text-blue-dark no-underline hover:text-blue" href="/">
            read more
            <i className="fas ml-1 fa-angle-right "></i>
          </a>
        </div>
      </div>
    </a>
  </Link>
)

export default PostPreview