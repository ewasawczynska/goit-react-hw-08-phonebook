import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Container } from 'components/Container';
import { StyledLoginText, StyledLoginText2, StyledForm, StyledLabel, StyledInput, StyledButton, Link } from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <StyledLoginText>Hello again. Please enter your data below.</StyledLoginText>
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        email
        <StyledInput type="email" name="email"/>
      </StyledLabel>
      <StyledLabel>
        password
        <StyledInput type="password" name="password"/>
      </StyledLabel>
      <StyledButton type="submit">l o g i n</StyledButton>
    </StyledForm>
    <StyledLoginText2>Are you new here? There you can <Link to="/register">create your personal account</Link> ✨</StyledLoginText2>
    </Container>
  );
};
