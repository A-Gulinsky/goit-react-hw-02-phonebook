import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  
  margin-top: 20px;

  background-color: #398bf7;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  padding: 10px;

  border-bottom: 1px solid #524f4f;
`

export const Name = styled.p`
  width: 150px;

  font-size: 18px;
  font-weight: 600;
  color: #dfd4d4;
`

export const Number = styled.p`
  width: 100px;
  
  font-size: 18px;
  font-weight: 600;
  color: #fafafa;
`

export const Button = styled.button`
  padding: 4px 8px;
  
  color: white;

  background-color: #5782f6;
  border: 1px solid #4b4848;
  border-radius: 4px;

  transition: 150ms;

  &:hover,
  &:focus {

    transform: scale(1.02);
  }
`