import { Container } from 'components/Container';
import { StyledError } from "./Error.styled";
import { useSelector } from 'react-redux';
import { selectError } from "../../redux/contacts/selectors";

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <Container>
      <StyledError>Houston, we have a problem 👀: {error}</StyledError>
    </Container>
  );
};

