import { getAllPostIds, getPostData } from '../../../lib/posts';

const PostPage = ({postData, Contents}:{postData:any, Contents:any}) => {
  return (
    <div>
      <h1 className="text-white text-center">{postData.title}</h1>
      <p className="text-white">{Contents}</p>
    </div>
  );
};

export default PostPage;

export async function getStaticPaths(){
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params, content}: {params:any, content:any}) {
  const postData = getPostData(params.id);
  // const Contents = getPostContents(content)
  return {
    props: {
      postData,
      // Contents,
    },
  };
}
