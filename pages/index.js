import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from './../component/date';



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    
 <>
    <div className='HomePageContent'> 
    Home page__
      <Link href='/posts'> posts</Link>
    </div>
    
    <div  className='unorderedList'>
      <ul className='listItem' >
          {allPostsData.map(({ id, date, title }) => (
            <li>
              <Link href={`/posts/${id}`}>{title}</Link>
              <small>
                <Date dateString={date}/>
              </small>
            </li>
            // <li key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
          ))}
          </ul>
        </div>
 
 </>

  )
}
