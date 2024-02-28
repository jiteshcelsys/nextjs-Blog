import Layout from './../../component/Layout';
import { getAllPostIds,getPostData } from '../../lib/posts';
import Date from './../../component/date';
import utilStyles from'./../../styles/utilStyles.module.css';



export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <div className={utilStyles.date}>
      <Date  dateString={postData.date}/>
      </div>
      {/* {postData.date} */}
      <br/>
      <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
    </Layout>
  );
}
//which returns an array of possible values for id.
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
//which fetches necessary data for the post with id.
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}