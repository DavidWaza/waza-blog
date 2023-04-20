import Image from "next/image";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";

const PostPage = ({ postData, Contents }: { postData: any; Contents: any }) => {
  return (
    <Container>
      <Row>
        <Col>
        <div className="flex justify-center my-5">
          <p className="category bg-[#DB2800] p-3 w-40 text-center text-[#faebd7]">{postData.category}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="border-t-2 border-b">
          <div className="flex justify-center md:justify-start">
            <p className="text-white my-3 category ">{postData.date}</p>
          </div>
          <h1 className="category text-[#FAEBD7] text-center my-5 px-3">
            {postData.title}
          </h1>
          <div className="flex justify-center md:justify-end">
            <Link href={"/"} className="no-underline hover:underline">
              <p className="text-slate-400 category ">By {postData.author}</p>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="flex justify-center">
          <figure>
            <Image src={postData.src} alt="alt" width={900} height={500} />
          </figure>
        </div>
      </Row>
    </Container>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  content,
}: {
  params: any;
  content: any;
}) {
  const postData = getPostData(params.id);
  // const Contents = getPostContents(content)
  return {
    props: {
      postData,
      // Contents,
    },
  };
}
