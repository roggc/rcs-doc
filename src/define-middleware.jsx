import styled from "styled-components";
import CB from "./code-block";
import { useSlice } from "@slices";
import ReactMarkdown from "./react-markdown";

const DefineMiddleware = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <ReactMarkdown>
        For React Context slices, you can define **middleware** in a per-slice
        basis to intercept and customise action workflows.
      </ReactMarkdown>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    todos: {
      // React Context slice
      initialArg: [],
      reducer: (state, action) => {
        switch (action.type) {
          case "FETCH_TODOS_REQUEST":
            return state;
          case "FETCH_TODOS_SUCCESS":
            return action.payload;
          case "FETCH_TODOS_FAILURE":
            return state;
          default:
            return state;
        }
      },
      middleware: [
        () => (next) => (action) => {
          // <-- logger middleware (first middleware applied)
          console.log("dispathing action:", action);
          next(action);
        },
        (dispatch) => (next) => (action) => {
          // <-- async middleware (second middleware applied)
          if (typeof action === "function") {
            return action(dispatch);
          }
          next(action);
        },
      ],
    },
    // rest of slices (either Redux or React Context slices)
  },
});
`}</CodeBlock>
      <P>Then you can write your action creator like:</P>
      <CodeBlock>{`const fetchTodos = () => async (dispatch) => {
  dispatch({ type: "FETCH_TODOS_REQUEST" });
  try {
    const response = await fetch("https://api.example.com/todos");
    const todos = await response.json();
    dispatch({ type: "FETCH_TODOS_SUCCESS", payload: todos });
  } catch (error) {
    dispatch({ type: "FETCH_TODOS_FAILURE", payload: error.message });
  }
};`}</CodeBlock>
      <P>And use it in your component like:</P>
      <CodeBlock>{`// todos.jsx
import { useSlice } from "./slices";
import { useEffect } from "react";

const Todos = () => {
  const [todos, dispatchTodos] = useSlice("todos");
  useEffect(() => {
    dispatchTodos(fetchTodos());
  }, [dispatchTodos]);
  return {todos.map(/* ... */)};
};

export default Todos;`}</CodeBlock>
      <P>
        It's important to note that middleware in React Context slices does not
        have access to the slice's state value.
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

export default DefineMiddleware;
