import { getSortedPostsData } from "../../lib/posts";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";

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

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
    >
      <main>
      <Header />
        <Container>
          <Row>
            {allPostsData.map((postData: any) => (
              <div key={postData.id}>
                <Row className="my-2 hover:bg-[#212F3C] bg-[#212f3c] md:bg-transparent p-10">
                  <Col sm={6} md={6} lg={4}>
                    <div className="border-b-4 border-[#FAEBD7] font-bold ">
                      <p className="Poppins text-muted text-center">
                        {postData.date}
                      </p>
                    </div>
                  </Col>
                  <Col sm={6} md={6} lg={4}>
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
                        <p className="Poppins md:text-xl text-md text-[#D7E4E9] my-3">
                          {postData.subtitle}
                        </p>
                      </div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.75,
                        }}
                      >
                        <p className="Poppins, text-md text-white mt-3">
                          {postData.content}
                        </p>
                      </motion.div>
                    </div>
                  </Col>
                  <Col sm={6} md={6} lg={4}>
                    <figure className="md:h-fu">
                      <Image
                        alt="img"
                        src={postData.src}
                        width={600}
                        height={700}
                      />
                    </figure>
                  </Col>
                </Row>
              </div>
            ))}
          </Row>
        </Container>
      </main>
    </motion.div>
  );
}
