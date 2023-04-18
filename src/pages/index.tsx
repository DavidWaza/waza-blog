import { getSortedPostsData } from "../../lib/posts";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";

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
              subtitle,
            }: {
              id: number;
              date: number;
              title: string;
              subtitle: string;
            }) => (
              <Col sm={4} key={id}>
                <div className="my-12 text-white text-center hover:bg-[#212F3C] p-10">
                  <Link href={`/posts/${id}`} className="no-underline">
                    <p className="text-2xl text-[#FAEBD7] font-bold">{title}</p>
                  </Link>
                  <p className="text-md text-md px-5">{subtitle}</p>
                  <p className="text-muted">{date}</p>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </main>
  );
}
