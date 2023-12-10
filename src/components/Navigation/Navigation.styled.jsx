import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
border-bottom: 1px solid #BFC0C0;
padding: 30px;
`;

export const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const Link = styled(NavLink)`
color: #000000;
font-size: 18px;
font-weight: 500;
text-decoration: none;
&:focus, &:hover {
    color: #BFC0C0;
    text-decoration: underline;
}
`;

export const NavDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
gap: 30px;
`;
