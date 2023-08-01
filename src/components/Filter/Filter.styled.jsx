import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 20px;

  border: 2px solid #615e5e;
  border-radius: 4px;
  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);

  transition: 200ms;

  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);
  }
`

export const P = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #464242;
`

export const Input = styled.input`
  display: block;
  width: 250px;

  padding: 10px 8px;

  font-size: 16px;
  color: #514d4d;

  border: 1px solid black;
  border-radius: 4px;

  outline: transparent;

  transition: 200ms;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 5px #064ec1;
  }
`