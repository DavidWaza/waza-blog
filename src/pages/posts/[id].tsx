import React from "react";
import { getAllPostIds, getPostData  } from '../../../lib/posts';


const PostPage = ({postData}:{postData:any}) => {
  console.log(postData.id);
  return (
    <div>
      <h1 className="text-white text-center">{postData.title}</h1>
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

export async function getStaticProps({params}: {params:any}) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
