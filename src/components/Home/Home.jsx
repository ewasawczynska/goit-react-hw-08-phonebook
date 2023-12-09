import { Container } from "components/Container";
import { HomeText, HomePhoto } from "./Home.styled";

import home_photo from "./home_photo.png";

export const Home = () => {
    return (
      <Container>
        <HomeText>Welcome in your phonebook!<br/>Let's phone someone.</HomeText>
        <HomePhoto src={home_photo} alt="People talking by phone"/>
      </Container>
    );
  };