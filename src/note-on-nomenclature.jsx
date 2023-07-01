import styled from "styled-components";
import CB from "./code-block";
import ReactMarkdown from "./react-markdown";
import { useSlice } from "@slices";

const NoteOnNomenclature = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <ReactMarkdown>
        To define a **React Context** slice you must pass an object which its
        possible keys (all optional) are *`initialArg`*, *`init`*, *`reducer`*,
        *`isGetInitialStateFromStorage`* and *`middleware`*. The first three of
        them are exactly the same as the defined in the React docs about
        *`useReducer`* hook. Check there the info to know what they do.
      </ReactMarkdown>
      <ReactMarkdown>
        The *`isGetInitialStateFromStorage`* its name is not
        *`isGetInitialArgFromStorage`* because in this case the *`init`*
        function will not be applied (in the case that a value from local
        storage has been recovered) even when supplied in the definition of the
        slice because what we save in the local storage it's the state value and
        not *`initialArg`*, so when we recover it we do not must apply the
        *`init`* function and use directly this value as initial state.
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

export default NoteOnNomenclature;
