import Nav from '../components/Nav'

export default (props) => (
    <div>
       <Nav />
       <h1>{props.url.query.title}</h1>
       <p>This is the blog post content.</p>
    </div>
)