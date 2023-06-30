import styled from "styled-components";
import CB from "./code-block";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSlice } from "@slices";

const PassOptionsToReduxStore = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <ReactMarkdown>
        You can pass options to the Redux store, those defined by the
        documentation in Redux Toolkit about the parameters accepted by the
        `configureStore` method, except `reducers`. Look at the documentation
        there to know what are these options.
      </ReactMarkdown>
      <CodeBlock>{`import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count: {
      // Redux slice
      initialState: 0,
      reducers: {
        increment: (state) => state + 1,
      },
    },
    // rest of slices (either Redux or React Context slices)
  },
  reduxStoreOptions: {
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat((store) => (next) => (action) => {
        console.log("dispatching action:", action);
        next(action);
        console.log("next state:", store.getState());
      }),
  },
});`}</CodeBlock>
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

export default PassOptionsToReduxStore;
