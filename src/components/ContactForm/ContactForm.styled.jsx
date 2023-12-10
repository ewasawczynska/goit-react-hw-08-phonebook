import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: 1px dotted #BFC0C0;
  height: 30px;
  font-family: 'Comfortaa', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;

`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const StyledRoundContainer = styled.div`
background-color: #ffffff;
border-radius: 50%;
box-shadow: 5px 6px 24px 5px rgba(191, 192, 192, 1);
display: flex;
align-items: center;
justify-content: center;
height: 250px;
width: 250px;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
padding: 25px;
text-align: center;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  height: 25px;
  font-family: 'Comfortaa', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
  padding-left: 5px;
&:focus, &:hover {
    color: #BFC0C0;
}
`;