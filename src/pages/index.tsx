import { getSortedPostsData } from "../../lib/posts";
import { Container, Col, Row } from "react-bootstrap"
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
                <div className="my-5 text-white">
                  <Link href={`/posts/${id}`}>
                    <p className="text-2xl">{title}</p>
                  </Link>
                  <p className="text-md">{subtitle}</p>
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
