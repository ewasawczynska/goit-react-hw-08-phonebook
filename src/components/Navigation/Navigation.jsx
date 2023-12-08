import { Header, Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <Nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/phonebook">Phonebook</Link>
          <Link to="/login">Login</Link>
        </div>
      </Nav>
    </Header>
  );
};
