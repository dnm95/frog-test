import styled from "styled-components";

export const Input = styled.input`
  background: #FFFFFF;
  border: 2px solid #000000;
  padding: 16px;
  width: 100%;
  &:focus {
    outline: none;
    border: 2px solid #000000;
  }
`;

export const FormExtraLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  color: #000;
  margin: 2rem 0;
  text-decoration: underline;
  cursor: pointer;
`;

export default Input;
