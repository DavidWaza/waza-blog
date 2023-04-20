import { getSortedPostsData } from "../../lib/posts";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: { allPostsData: any }) {
  const length = 15;
  return (
    <main>
      <Container>
        <Row>
          {allPostsData.map((postData: any) => (
            <div key={postData.id}>
              <Row className="my-5 hover:bg-[#212F3C] p-10">
                <Col sm={4}>
                  <div className="border-b-4 border-[#FAEBD7] font-bold ">
                    <p className="Poppins text-muted text-center">
                      {postData.date}
                    </p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="">
                    <Link
                      href={`/posts/${postData.id}`}
                      className="no-underline"
                    >
                      <p className="category text-white font-normal font-medium  my-4 ">
                        {postData.category}
                      </p>
                      <p className="Poppins md:text-4xl text-3xl text-[#FAEBD7] font-bold hover:underline">
                        {postData.title}
                      </p>
                    </Link>
                    <div>
                      <p className="Poppins md:text-xl text-md text-[#DB2800] my-3">
                        {postData.subtitle}
                      </p>
                    </div>
                    <div>
                      <p className="Poppins, text-md text-white mt-3">
                        {postData.content}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <figure>
                    <Image
                      alt="img"
                      src={postData.src}
                      width={600}
                      height={600}
                    />
                  </figure>
                </Col>
              </Row>
            </div>
          ))}
        </Row>
      </Container>
    </main>
  );
}
