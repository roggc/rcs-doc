import styled from "styled-components";
import CB from "./code-block";
import { useSlice } from "@slices";
import { LuConstruction } from "react-icons/lu";

const ApiReference = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <Row>
        <LuConstruction />
        <P>Under construction</P>
        <LuConstruction />
      </Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  flex: 1;
`;

const CodeBlock = styled(CB)`
  border-radius: 10px;
  max-width: calc(100%);
  overflow: auto;
`;

const P = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default ApiReference;
