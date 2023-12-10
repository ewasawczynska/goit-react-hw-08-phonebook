import { Header, Link, Nav, NavDiv } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {

  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Nav>
          <Link to="/">• h o m e •</Link>
          <NavDiv>
          {isLoggedIn && (<Link to="/phonebook">p h o n e b o o k</Link>)}  
          {!isLoggedIn && (<Link to="/login">l o g i n</Link>)}
          {!isLoggedIn && (<Link to="/register">r e g i s t e r</Link>)}
          </NavDiv>
      </Nav>
    </Header>
  );
};
