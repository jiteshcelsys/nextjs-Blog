import React from 'react'
import Link from 'next/link';

function BlogPost() {
  return (
    <>
    
      <h1>this is the first blog</h1>
      <div className='linkStyle'>
      <Link href='/' >Homepage</Link>
      <Link href='/posts/firstBlog' >firstBlog</Link>
      </div>
      
    </>
  )
}

export default BlogPost
