import styled from 'styled-components';

export const InputFiltrStyled = styled.input`
  border: none;
  border-bottom: 1px solid #BFC0C0;
  font-family: 'Comfortaa', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  width: 100%;

  &:placeholder-shown {
  font-size: 10px;
  font-weight: 100;
  text-align: center;
  }
`;
export const LabelFiltrStyled = styled.label`
  display: flex;
  flex-direction: row;
  gap: 15px;
  height: 30px;
  align-items: flex-end;
  padding-left: 30px;
  width: 600px;
  white-space: nowrap;
`;
