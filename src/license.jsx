import styled from "styled-components";
import CB from "./code-block";
import { useSlice } from "@slices";

const License = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <P>
        Licensed under the ISC License, Copyright © 2022-present Roger Gomez
        Castells.
      </P>
      <P>
        See{" "}
        <A
          href="https://github.com/roggc/react-context-slices/blob/master/LICENSE"
          target="_blank"
        >
          LICENSE
        </A>{" "}
        for more information.
      </P>
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
const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.red};
`;

export default License;
