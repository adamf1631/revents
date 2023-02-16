import React from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";
import Logo from "../../assets/logo.png";

function HomePage({ history }) {
  return (
    <Segment inverted vertical textAlign="center" className="masthead">
      <Container>
        <Header as="h1">
          <Image src={Logo} size="massive" style={{ marginBottom: 12 }} />
          Revents
        </Header>
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Get Started <Icon name="chevron right" inverted />
        </Button>
      </Container>
    </Segment>
  );
}

export default HomePage;
