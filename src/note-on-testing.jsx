import styled from "styled-components";
import CB from "./code-block";
import { ReactMarkdown as RM } from "react-markdown/lib/react-markdown";
import { useSlice } from "@slices";

const NoteOnTesting = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <ReactMarkdown>
        If you want to write unit tests while using the library, you must
        exclude `react-context-slices` from `transformIgnorePatterns` in `jest`
        configuration file:
      </ReactMarkdown>
      <CodeBlock>{`// jest.config.js
module.exports = {
  transformIgnorePatterns: ["/node_modules/(?!(react-context-slices)/)"],
  // rest of configuration settings
};`}</CodeBlock>
      <ReactMarkdown>
        On React Native you should also exclude `react-native` from the list of
        `transformIgnorePatterns`:
      </ReactMarkdown>
      <CodeBlock>{`// jest.config.js
module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!(react-context-slices|@react-native|react-native)/)",
    // rest of configuration settings
  ],
};`}</CodeBlock>
      <ReactMarkdown>
        Essentially what this tells is to not parse the `node_modules` folder
        except for `react-context-slices`. This is so because
        `react-context-slices` has `import` statements in it, and need to be
        parsed by `tsc` or `babel` when using `jest`.
      </ReactMarkdown>
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

const ReactMarkdown = styled(RM)`
  line-height: 1.5;
`;

export default NoteOnTesting;
