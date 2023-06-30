import styled from "styled-components";
import CB from "./code-block";
import { useSlice } from "@slices";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const HowToUseItJS = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <ReactMarkdown>
        You can define a Redux slice. The key point is to put a **`reducers`**
        key in the object definition of the slice.
      </ReactMarkdown>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

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
});`}</CodeBlock>
      <ReactMarkdown>
        This is how you would use it in a component with the **`useSlice`**
        hook.
      </ReactMarkdown>
      <CodeBlock>{`// app.jsx
import { useSlice } from "./slices";

const App = () => {
  const [count, reduxDispatch, { increment }] = useSlice("count");

  return (
    <>
      <div>
        <button onClick={() => reduxDispatch(increment())}>+</button>
        {count}
      </div>
    </>
  );
};

export default App;`}</CodeBlock>
      <P>You can define a React Context slice.</P>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count: {
      // React Context slice
      initialArg: 0,
    },
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <ReactMarkdown>
        This is how you would use it in a component with the **`useSlice`**
        hook.
      </ReactMarkdown>
      <CodeBlock>{`// app.jsx
import { useSlice } from "./slices";

const App = () => {
  const [count, setCount] = useSlice("count");

  return (
    <>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        {count}
      </div>
    </>
  );
};

export default App;`}</CodeBlock>
      <ReactMarkdown>
        A React Context slice can also accept a **`reducer`**.
      </ReactMarkdown>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count: {
      // React Context slice
      initialArg: 0,
      reducer: (state, { type }) => {
        switch (type) {
          case "increment":
            return state + 1;
          default:
            return state;
        }
      },
    },
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <ReactMarkdown>
        This is how you would use it in a component with the **`useSlice`**
        hook.
      </ReactMarkdown>
      <CodeBlock>{`// app.jsx
import { useSlice } from "./slices";

const App = () => {
  const [count, dispatchCount] = useSlice("count");

  return (
    <>
      <div>
        <button onClick={() => dispatchCount({ type: "increment" })}>+</button>
        {count}
      </div>
    </>
  );
};

export default App;`}</CodeBlock>
      <ReactMarkdown>
        When using Redux slices, we can also pass a selector as a second
        argument to the **`useSlice`** hook.
      </ReactMarkdown>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    todos: {
      // Redux slice
      initialState: [],
      reducers: {
        add: (state, { payload }) => {
          state.push(payload);
        },
      },
    },
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <CodeBlock>{`// app.jsx
import { useSlice } from "./slices";

const App = () => {
  const [todos, reduxDispatch, { add }] = useSlice("todos");
  const [firstTodo] = useSlice("todos", (state) => state[0]);

  return (
    <>
      <div>
        <button onClick={() => reduxDispatch(add("use react-context-slices"))}>
          add
        </button>
        {todos.map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
      <div>{firstTodo}</div>
    </>
  );
};

export default App;`}</CodeBlock>
      <ReactMarkdown>
        Finally, if we want all to work as expected, we must use the
        **`Provider`** up in the tree:
      </ReactMarkdown>
      <CodeBlock>{`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./slices";
import App from "./app";

const container = document.getElementById("root");

if (container !== null) {
  createRoot(container).render(
    <StrictMode>
      <Provider>
        <App />
      </Provider>
    </StrictMode>
  );
}`}</CodeBlock>
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

export default HowToUseItJS;
