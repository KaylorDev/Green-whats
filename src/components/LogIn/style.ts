import { styled } from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Form = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  border-bottom: 1px solid #abffac;
  border-top: 1px solid #abffac;
`;

export const Input = styled("input")`
  background-color: #abffac;
  padding: 5px 15px;
  font-size: 16px;
`;

export const AcceptBtn = styled("button")`
  background-color: #abffac;
  padding: 10px 20px;
  border: 1px solid black;
`;

export const InputLabel = styled("label")`
  color: black;
`;
