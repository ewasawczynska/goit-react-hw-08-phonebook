import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Container } from 'components/Container';
import { StyledLoginText, StyledLoginText2, StyledForm, StyledLabel, StyledInput, StyledButton, Link } from 'components/Login/Login.styled';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <StyledLoginText>Here you can create your personal account<br/>to store phone contacts.</StyledLoginText>
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        username
        <StyledInput type="text" name="name" placeholder="e.g. Love"/>
      </StyledLabel>
      <StyledLabel>
        email
        <StyledInput type="email" name="email" placeholder="e.g. yourfancyemail@gmail.com"/>
      </StyledLabel>
      <StyledLabel>
        password
        <StyledInput type="password" name="password" placeholder="e.g. Verydifficultpassword!"/>
      </StyledLabel>
      <StyledButton type="submit">r e g i s t e r</StyledButton>
    </StyledForm>
    <StyledLoginText2>Have you already an account? There you can <Link to="/login">log in</Link> ✨</StyledLoginText2>
    </Container>
  );
};