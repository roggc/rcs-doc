import { FaReact as FR } from "react-icons/fa";
import { SiRedux as SR } from "react-icons/si";
import styled from "styled-components";
import Card from "./card";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSlice } from "@slices";

const Presentation = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <PresentationContainer onClick={() => setIsShownMobileLateralMenu(false)}>
      <Title>react-context-slices</Title>
      <IconsContainer>
        <FaReact />
        <SiRedux />
      </IconsContainer>
      <Card>
        <ReactMarkdown>
          **`react-context-slices`** offers a unique solution to global state
          management in React by seamlessly integrating both **Redux** and
          **React Context** with **zero-boilerplate**.
        </ReactMarkdown>
        <ReactMarkdown>
          Define your slices using the **`getHookAndProviderFromSlices`**
          function provided by the library. This gives you the **`useSlice`**
          hook and a **provider** component.
        </ReactMarkdown>
        <ReactMarkdown>
          Use the **`useSlice`** hook in your components to get the value of the
          slice's state, a setter or dispatch function, and an actions object
          (for Redux slices).
        </ReactMarkdown>
        <ReactMarkdown>
          What differentiates a Redux slice from a React Context slice is the
          presence of the **`reducers`** key in its definition (if present, it's
          a Redux slice; otherwise it's a React Context slice).
        </ReactMarkdown>
        <ReactMarkdown>
          React Context slices can initialize state from **storage** (local for
          web and async for React Native) and use **middleware** for action
          workflow customization in a per-slice basis.
        </ReactMarkdown>
        <ReactMarkdown>
          Use **`react-context-slices`** to manage global state in React with
          **zero-boilerplate** either by defining **Redux slices** or **React
          Context slices**.
        </ReactMarkdown>
      </Card>
    </PresentationContainer>
  );
};

const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: auto;
  flex: 1;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 2em;
`;

const P = styled.div``;

const FaReact = styled(FR)`
  color: blue;
`;
const SiRedux = styled(SR)`
  color: blue;
`;

export default Presentation;
