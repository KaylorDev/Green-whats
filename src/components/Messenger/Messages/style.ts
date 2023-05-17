import { styled } from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  gap: 5px;
  overflow-x: auto;
  height: 500px;
  padding: 0 10px 10px 10px;
  border-bottom: 1px solid black;
`;
export const OurMessage = styled("div")`
  border-radius: 15px;
  padding: 5px;
  color: black;
  background-color: white;
  width: min-content;
`;

export const TheyMessage = styled("div")`
  align-self: end;
  border-radius: 15px;
  padding: 5px;
  color: black;
  background-color: #4ada80;
  width: min-content;
`;
