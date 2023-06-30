import styled from "styled-components";
import CB from "./code-block";
import { useSlice } from "@slices";

const ThingsYouCanDo = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count: {}, // <-- intialArg === undefined (React Context slice)
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    isLightTheme: { initialArg: true, reducer: (state) => !state }, // <-- reducer without action (React Context slice)
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    greeting: { initialArg: "hello", reducer: () => "bye" }, // <-- reducer without state and action (React Context slice)
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    greeting: { init: () => "hello" }, // <-- pass an 'init' function without an 'initialArg' (React Context slice)
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <CodeBlock>{`// app.jsx
import { useSlice } from "./slices";

const App = () => {
  const [foo, setFoo] = useSlice(""); // 'foo' and 'setFoo' will be undefined. If you pass an empty string or a slice name that has not been defined (doesn't exist), it returns undefined for both 'value' and 'setValue'
  return null;
};

export default App;`}</CodeBlock>
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

export default ThingsYouCanDo;
