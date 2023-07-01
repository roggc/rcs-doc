import styled from "styled-components";

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 3px 1px;
  padding: 20px;
  margin-bottom: 3px;
  max-width: calc(100% - 46px);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Card;
