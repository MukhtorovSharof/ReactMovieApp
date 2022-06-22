import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
} from "reactstrap";
export default function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
    <Col key={imdbID} md="4" className="mb-4">
      <Card>
        <CardImg alt="Card image cap" src={Poster} top width="100%" />
        <CardBody className="text-center">
          <CardTitle tag="h5" className="my-3">
            {Title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {Year} <span>{Type}</span>
          </CardSubtitle>
          <Button className="mb-3">Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
