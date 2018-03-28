import Link from 'next/link'

const Nav = ()=>(
    <div>
        <Link href="/">
          <a>Home Page</a>
        </Link>
        &nbsp;
        <Link as="aboutus" href="/about">
          <a>About Page</a>
        </Link>

    </div>
)

export default Nav