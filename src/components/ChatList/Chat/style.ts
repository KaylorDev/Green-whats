import { styled } from "styled-components";

type TWrapperProps = {
  active?: boolean;
};

export const Wrapper = styled("div")<TWrapperProps>`
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  border-bottom: 1px solid #abffac;
  cursor: pointer;
  &:hover {
    background-color: rgba(110, 113, 117, 0.2);
  }
  background-color: ${(props) =>
    props.active ? "rgba(110, 113, 117, 0.2)" : "inherit"};
`;

export const Name = styled("div")`
  font-size: 24px;
  color: black;
`;

export const LastMessage = styled("div")`
  font-size: 16px;
  color: gray;
`;
