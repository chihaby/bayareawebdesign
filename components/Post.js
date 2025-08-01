import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import { CardImg } from 'react-bootstrap'
import { urlFor } from "../lib/client";
import Link from "next/link";
import Image from "next/image";

function Post({ image, title, description, slug }) {
  const sampleDescription = description.slice(0, 200);

  const src = urlFor(image).url();

  return (
    <Col style={{ cursor: "pointer" }}>
      <Link href={`/post/${encodeURIComponent(slug.current)}`} passHref>
        <Card style={{ width: "22rem", margin: "15px" }}>
          <Image
            loader={() => src}
            src={src}
            alt={image.caption}
            width={300}
            height={300}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {sampleDescription}
              {" ..."}
            </Card.Text>
            <Button variant="link">Read more</Button>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default Post;
