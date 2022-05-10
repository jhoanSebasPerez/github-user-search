import styled, { css } from "styled-components";

const Search = styled.form`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.darkMode
      ? css`
          background-color: var(--purple-dark);
        `
      : css`
          background-color: var(--white-light);
          box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
        `}
  @media (min-width: 1024px) {
    height: 70px;
  }
`;

const Input = styled.input.attrs((props) => ({
  ref: props.ref,
  type: props.type,
  placeholder: props.placeholder,
  required: props.required,
}))`
  width: 60%;
  height: 95%;
  margin-left: 12px;
  font-family: "Space Mono", monospace;
  font-weight: 400;
  font-size: 13px;
  border: none;
  line-height: 25px;
  cursor: pointer;
  :focus {
    outline: none;
  }
  ${(props) =>
    props.darkMode
      ? css`
          background-color: var(--purple-dark);
          ::placeholder {
            color: var(--white-dark);
          }
          color: var(--white-dark);
        `
      : css`
          background-color: var(--white-light);
        `};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const NoResult = styled.span`
  font-size: 13px;
  color: red;
  font-weight: bold;
  font-size: 15px;
`;

const Button = styled.button`
  margin: 7px;
  background-color: var(--primary-color);
  width: 84px;
  height: 46px;
  border-radius: 10px;
  border: none;
  color: var(--white-dark);
  font-family: "Space Mono", monospace;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  :hover {
    background-color: #60abff;
  }

  @media (min-width: 768px) {
    width: 106px;
    height: 50px;
    font-size: 16px;
  }
`;

export { Search, Input, NoResult, Button };
