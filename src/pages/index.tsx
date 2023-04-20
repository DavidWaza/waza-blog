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
  return (
    <main>
      <Container>
        <Row>
          {allPostsData.map(
            ({
              id,
              date,
              title,
              category,
              subtitle,
              src,
            }: {
              id: number;
              date: number;
              title: string;
              category:string;
              subtitle: string;
              src:string;
            }) => (
              <div key={id}>
                <Row className="my-5 hover:bg-[#212F3C] p-10" >
                  <Col sm={4}>
                    <div className="border-b-4 border-[#FAEBD7] font-bold ">
                      <p className="text-muted text-center">{date}</p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="">
                      <Link href={`/posts/${id}`} className="no-underline">
                        <p className="text-white font-normal font-medium sm:my-0 my-3">{category}</p>
                        <p className="text-4xl text-[#FAEBD7] font-bold">
                          {title}
                        </p>
                      </Link>
                      <div>
                      <p className="text-xl text-white my-3">{subtitle}</p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <figure>
                    <Image alt="img" src={src} width={600} height={600}/>
                    </figure>
                  </Col>
                </Row>
              </div>
            )
          )}
        </Row>
      </Container>
    </main>
  );
}
