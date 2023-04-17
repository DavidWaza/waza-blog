import { getSortedPostsData } from "../../lib/posts";
import { Container, Col, Row } from "react-bootstrap";

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
                  <p className="text-2xl">{title}</p>
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
