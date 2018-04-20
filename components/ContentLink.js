import { Component } from 'react';
import Link from 'next/link'
const ContentLink = ({type, className, record, children}) => (
  <Link as={`/${type}/${record.slug}`} href={`/${type}?slug=${record.slug}`}>
    <a className={className}>
			{children ? children : record.title}
    </a>
  </Link>
)

export default ContentLink