import { Header, Link, Nav } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {

  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Nav>
          <Link to="/">• h o m e •</Link>
          {isLoggedIn && (<Link to="/phonebook">Phonebook</Link>)}
      </Nav>
    </Header>
  );
};
