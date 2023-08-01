import { Form, Field, ErrorMessage } from 'formik'
import styled from "@emotion/styled";

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 300px;

  padding: 25px;

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
  margin-bottom: 5px;

  font-weight: 600;
  text-align: center;
  color: #064ec1;
`

export const Input = styled(Field)`
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

export const Error = styled(ErrorMessage)`
  padding: 2px;

  color: #e68309;
`

export const Button = styled.button`
  padding: 10px 15px;

  color: white;

  background-color: #1d6be7;
  border: 1px solid transparent;
  border-radius: 4px;

  transition: 150ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #064ec1;
  }
`