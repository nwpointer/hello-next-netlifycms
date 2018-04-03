import { Component } from 'react';
import Link from 'next/link'
const ContentLink = ({type,record}) => (
  <Link as={`/${type}/${record.slug}`} href={`/${type}?slug=${record.slug}`}>
    <a>{record.title}</a>
  </Link>
)

export default ContentLink