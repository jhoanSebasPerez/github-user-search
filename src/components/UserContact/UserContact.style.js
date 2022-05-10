import styled from "styled-components";

const UserContact = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    margin-left: 21%;
    margin-top: 36px;
  }
`;

export { UserContact };
