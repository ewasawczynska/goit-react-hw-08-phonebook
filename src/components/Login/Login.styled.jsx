import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledLoginText = styled.p`
font-size: 20px;
font-weight: 400;
margin-bottom: 45px;
`;

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 15px;
margin-left: 100px;
margin-right: 100px;
`;

export const StyledLabel = styled.label`
display: flex;
height: 20px;
flex-wrap: nowrap;
justify-content: space-between;
align-items: flex-end;
`;

export const StyledInput = styled.input`
border: none;
border-bottom: 1px solid #BFC0C0;
font-family: 'Comfortaa', sans-serif;
font-family: 'Poppins', sans-serif;
font-size: 16px;
font-weight: 700;
width: 300px;
&:placeholder-shown {
font-size: 10px;
font-style: italic;
font-weight: 100;
}
`;

export const StyledButton = styled.button`
background-color: #ffffff;
border: none;
box-shadow: 2px 3px 12px 2px rgba(191, 192, 192, 1);
cursor: pointer;
font-size: 14px;
font-weight: 500;
margin-top: 15px;
&:focus, &:hover {
    background-color: #BFC0C0;
    color: #ffffff;
}
`;

export const StyledLoginText2 = styled.p`
font-style: italic;
font-size: 12px;
font-weight: 400;
margin-top: 30px;
`;

export const Link = styled(NavLink)`
color: #000000;
text-decoration: underline;
&:focus, &:hover {
    color: #BFC0C0;
}
`;