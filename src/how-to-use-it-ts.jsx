import styled from "styled-components";
import CB from "./code-block";
import { useSlice } from "@slices";

const HowToUseItTS = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <P>This is how you define a Redux slice using typescript.</P>
      <CodeBlock language="typescript">{`import getHookAndProviderFromSlices, {
  defineSlice,
} from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count: defineSlice<number>({
      // Redux slice
      initialState: 0,
      reducers: {
        increment: (state) => state + 1,
      },
    }),
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <P>
        And then use it in your component with the <strong>useSlice</strong>{" "}
        hook like this.
      </P>
      <CodeBlock language="typescript">{`import { useSlice } from "./slices";

const App = () => {
  const [count, reduxDispatch, { increment }] = useSlice<number>("count");

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
      <P>For a React Context slices you do it like this.</P>
      <CodeBlock language="typescript">{`import getHookAndProviderFromSlices, {
  defineSlice,
} from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count1: defineSlice<number>({
      // React Context slice
      initialArg: 0,
    }),
    count2: defineSlice<number>({
      // React Context slice
      initialArg: 0,
      init: (initialArg) => initialArg * initialArg,
    }),
    count3: defineSlice<number, boolean>({
      // React Context slice
      initialArg: false,
      init: (initialArg) => (initialArg ? 0 : 1),
    }),
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <P>And then in your component you do it like this.</P>
      <CodeBlock language="typescript">{`import { useSlice } from "./slices";

const App = () => {
  const [count1, setCount1] = useSlice<number>("count1");
  const [count2, setCount2] = useSlice<number>("count2");
  const [count3, setCount3] = useSlice<number>("count3");

  return (
    <>
      <div>
        <button onClick={() => setCount1((c) => c + 1)}>+</button>
        {count1}
      </div>
      <div>
        <button onClick={() => setCount2((c) => c + 1)}>+</button>
        {count2}
      </div>
      <div>
        <button onClick={() => setCount3((c) => c + 1)}>+</button>
        {count3}
      </div>
    </>
  );
};

export default App;`}</CodeBlock>
      <P>For a Redux slice that uses a selector you do it like this.</P>
      <CodeBlock language="typescript">{`import getHookAndProviderFromSlices, {
  defineSlice,
} from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    todos: defineSlice<string[]>({
      // Redux slice
      initialState: [],
      reducers: {
        add: (state, { payload }) => {
          state.push(payload);
        },
      },
    }),
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <CodeBlock language="typescript">{`import { useSlice } from "./slices";

const App = () => {
  const [todos, reduxDispatch, { add }] = useSlice<string[]>("todos");
  const [firstTodo] = useSlice<string[], string>("todos", (state) => state[0]);

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

export default HowToUseItTS;
