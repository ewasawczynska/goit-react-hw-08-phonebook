import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
border-bottom: 1px solid #BFC0C0;
padding: 25px;
`;

export const Nav = styled.nav`

`;

export const Link = styled(NavLink)`
color: #000000;
font-size: 18px;
font-weight: 500;
text-decoration: none;
&:focus, &:hover {
    color: #BFC0C0;
}
`;
